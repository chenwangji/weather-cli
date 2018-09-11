const axios = require('axios')
const { weatherApiConfig } = require('../config')

module.exports = async ({ location, start, days }) => {
  const result = await axios({
    methods: 'get',
    url: weatherApiConfig.URL,
    params: {
      key: weatherApiConfig.API_KEY,
      language: 'zh-Hans',
      unit: 'c',
      location,
      start,
      days
    }
  })
  const results = result.data.results
  if (results.length) {
    return results[0].daily
  } else {
    return false
  }
}