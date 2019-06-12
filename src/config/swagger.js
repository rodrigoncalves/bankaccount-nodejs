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
    ],
    definitions: {
      Agency: {
        type: 'object',
        required: ['ag', 'bank'],
        properties: {
          bank: { type: 'string', example: 'bank' },
          ag: { type: 'string', example: '2090-0' },
          address: { type: 'string' }
        },
        example: {
          bank: 'bank',
          address: 'address',
          ag: '2090-0',
        }
      },
      User: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          email: { type: 'string' },
          cep: { type: 'string' },
          account: { type: 'string', description: 'Bank account' },
          agency: { '$ref': '#/definitions/Agency' }
        },
        example: {
          agency: {
            bank: 'bank',
            address: 'address',
            ag: '2090-0',
          },
          name: 'name',
          email: 'email',
          account: 'account',
          cep: 'cep'
        }
      }
    }
  }
}
