const axios = require('axios')
const { locationApiConfig } = require('../config')

module.exports = async () => {
  const results = await axios({
    method: 'get',
    url: locationApiConfig.URL,
    params: {
      ak: locationApiConfig.API_KEY
      // 不传 ip 默认为当前 ip
    }
  })
  return results.data.content.address_detail.city
}