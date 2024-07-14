const {createLogger,format,transports} = require('winston')

const logger = createLogger({
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    transports: [
      new transports.Console(),
      new transports.File({ filename: 'logs/backend.log' })
    ]
})

module.exports=logger
