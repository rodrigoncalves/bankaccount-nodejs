exports.options = {
  routePrefix: '/documentation',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'Bank account',
      description: 'This is a simple server. CRUD of user and bank agency. Take a look at my [GitHub](https://github.com/rodrigoncalves).',
      version: '1.0.0',
      contact: { email: 'rodrigosg2000@gmail.com' },
    },
    host: 'localhost:3000',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    basePath: '/api',
    tags: [
      { name: 'agency', description: 'Agency operations' },
      { name: 'user', description: 'User operations' }
    ]
  }
}
