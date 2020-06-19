let { join } = require('path')

function img(file) {
  return join(process.env.HOME, '.config', 'wallpaper', file)
}

let other = img('relax.jpg')
let focus_work = img('work.jpg')
let care_home = img('wife.jpg')
let busy_city = img('highway.jpg')
let morning = img('dawn.jpg')
let hackathon = img('hackathon.jpg')

module.exports = {
  default: other,
  slots: [
    { hour: '5-9', file: morning },
    { hour: '10-17', file: focus_work },
    { hour: '18-19', file: care_home },
    { hour: '20-22', file: busy_city },
    { day_of_week: '0,6', file: hackathon },
  ],
}
