let { join } = require('path')

function img(file) {
  return join(process.env.HOME, '.config', 'wallpaper', file)
}

let other = img('relax.jpg')
let focus_work = img('work.jpg')
let care_home = img('wife.jpg')
let busy_city = img('highway.jpg')
let dawn_city = img('dawn.jpg')
let hackathon = img('hackathon.jpg')

module.exports = {
  default: other,
  slots: [
    { day_of_week: '1-5', hour: '5-9', file: dawn_city },
    { day_of_week: '1-5', hour: '10-17', file: focus_work },
    { day_of_week: '1-5', hour: '18-19', file: care_home },
    { day_of_week: '1-5', hour: '20-22', file: busy_city },
    { day_of_week: '0,6', file: hackathon },
  ],
}
