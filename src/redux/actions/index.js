import Service from '../../utils/_data'
import {
  SET_BUCKETS_LIST,
  SET_BUCKETS_LIST_LOADING,
  SET_BUCKETS_LIST_ERROR
} from './ActionTypes'

export const setBucketItems = payload => ( {
  type: SET_BUCKETS_LIST,
  payload,
} )

export const setItemsError = payload => ( {
  type: SET_BUCKETS_LIST_ERROR,
  payload,
} )

export const getBucketsList = () => dispatch => {

  dispatch({type:SET_BUCKETS_LIST_LOADING})

  Service.getBucketsList().then( ( res ) => {
      dispatch( setBucketItems( res.data ) )
  } ).catch(err => {
      dispatch( setItemsError( err.response && err.response.data ) );
  })

}
