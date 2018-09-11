const ora = require('ora')
const weather = require('./weather')

module.exports = async ({location, start, days}) => {
  const spinner = ora().start()

  try {
    const weatherList = await weather({location, start, days})

    spinner.stop()

    if (!weatherList) {
      console.log('没有相关城市的天气信息')
      return
    }
    weatherList.forEach(item => {
      console.log(`\t${item.date} - 最低：${item.low}°C | 最高：${item.high}°C | ${item.text_day}`)
    })
  } catch (err) {
    spinner.stop()
    console.error(err)
  }
}