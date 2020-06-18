#!/usr/bin/env node
let { execSync } = require('child_process')
let { CronJob } = require('cron')

let config = require('./config')

setWallpaper(config.default)
config.slots.forEach(slot => {
  runJob(slot, () => {
    setWallpaper(slot.file)
  })
})

function setWallpaper(file) {
  let res = execSync(`feh --bg-scale "${file}"`).toString()
  if (res) {
    console.log('res:', res)
  }
}

function runJob(
  {
    second = '*',
    minute = '*',
    hour = '*',
    day_of_month = '*',
    month = '*',
    day_of_week = '*',
  },
  cb,
) {
  new CronJob([second, minute, hour, day_of_month, month, day_of_week].join(' '), cb).start()
}
