const getURL = url => process.env.environment === 'development' ? `http://service.azurewebsites.net/api/${url}` :
  `https://service.azurewebsites.net/api/${url}`


const utils = {
  getURL,
}

export default utils
