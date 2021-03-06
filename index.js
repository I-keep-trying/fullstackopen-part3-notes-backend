const app = require('./app') // the actual Express application
const http = require('http')
const config = require('./utils/config')
const logger = require('./utils/logger')

const server = http.createServer(app)

server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})


// HEROKU
// https://hidden-wave-86862.herokuapp.com/

// FRONT END
// C:\Users\Owner\webdev\fullstackopen\notes-redux-router-part7
// no github repo