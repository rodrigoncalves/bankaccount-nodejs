// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true
})

// Import Swagger Options
const swagger = require('./config/swagger')

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)

// Run the server!
const start = async () => {
  try {
    await fastify.listen(8081)
    fastify.swagger()
    fastify.log.info(`listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

// Require external modules
const mongoose = require('mongoose')

// Connect to DB
mongoose.connect('mongodb://localhost/bankaccount', { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected…'))
  .catch(err => console.log(err))

const routes = require('./routes')
routes.forEach((route, index) => {
  fastify.route(route)
})

start()
