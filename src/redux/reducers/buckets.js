import {
  SET_BUCKETS_LIST,
  SET_BUCKETS_LIST_LOADING,
  SET_BUCKETS_LIST_ERROR,
} from '../actions/ActionTypes'

const initialState = {
  items: [],
}

export default (state = initialState, action) => {

  switch (action.type) {

    case SET_BUCKETS_LIST:
      return {
        ...state,
        items: action.payload,
        error: null,
        isLoading: false,
      }
    case SET_BUCKETS_LIST_ERROR:
      return {
        ...state,
        items: [],
        error: (action.payload && action.payload.Message) || 'Error while fetching records',
        isLoading: false,
      }
    case SET_BUCKETS_LIST_LOADING:
      return {
        ...state,
        isLoading: true,
      }
    default:
      return state

  }

}
