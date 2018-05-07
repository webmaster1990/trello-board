import axios from 'axios'
import utils from './index'

const apiRequest = ( endpoint, params, method ) => {
  const body = params
  const options = {
    method: method || 'POST',
    body,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: '',
    },
  }
  if ( method === 'GET' ) {
    delete options.body
  }
  return axios.get(endpoint, options);
}

const Service = {
  getBucketsList() {
    const url = utils.getURL( `buckets` )
    return apiRequest( url, '', 'GET' )
  },
}

export default Service
