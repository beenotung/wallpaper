#!/usr/bin/env node
let { execSync } = require('child_process')
let { CronJob } = require('cron')

let config = require('./config')
let lastFile = ''

setWallpaper(config.default)
config.slots.forEach(slot => {
  runJob(slot, () => {
    setWallpaper(slot.file)
  })
})


function setWallpaper(file) {
  if (file === lastFile) {
    return
  }
  lastFile = file
  let res = execSync(`feh --bg-scale ${JSON.stringify(file)}`).toString()
  if (res) {
    console.log('res:', res)
  }
}

function runJob(
  {
    second = '0',
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
