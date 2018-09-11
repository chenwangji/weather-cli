const getWeather = require('../utils/getWeather')
const getLocation = require('../utils/location')

module.exports = async (args) => {
  const location = args.location || args.l || await getLocation()
  getWeather({ location, start: 0, days: 1 })
}
