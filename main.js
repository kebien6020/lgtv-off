import Lgtv from 'lgtv2'
import process from 'node:process'

const lgtv = Lgtv({
  url: 'ws://192.168.1.34:3000',
})

lgtv.on('connect', () => {
  lgtv.request('ssap://system/turnOff', (_err, _res) => {
    lgtv.disconnect()
    process.exit(0)
  })
})
