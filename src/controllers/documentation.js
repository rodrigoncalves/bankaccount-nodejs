const idParam = {
  type: 'object',
  properties: {
    id: { type: 'string' },
  }
}

const agencyBody = {
  type: 'object',
  properties: {
    bank: { type: 'string' },
    address: { type: 'string' },
    ag: { type: 'string' },
  },
  required: ['bank']
}

const agencyResponse = {
  200: {
    type: 'object',
    properties: {
      _id: { type: 'string' },
      bank: { type: 'string' },
      address: { type: 'string' },
      ag: { type: 'string' },
    },
  }
}

const agencyListResponse = {
  200: {
    type: 'array',
    items: {
      properties: {
        _id: { type: 'string' },
        bank: { type: 'string' },
        address: { type: 'string' },
        ag: { type: 'string' },
      },
    }
  }
}

const userBody = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    email: { type: 'string' },
    cep: { type: 'string' },
    account: { type: 'string' },
    agencyId: { type: 'string' },
  },
  required: ['name']
}

const userResponse = {
  200: {
    type: 'object',
    properties: {
      id: { type: 'string' },
      name: { type: 'string' },
      email: { type: 'string' },
      cep: { type: 'string' },
      account: { type: 'string' },
      agencyId: { type: 'string' }
    },
  }
}

const userListResponse = {
  200: {
    type: 'array',
    items: {
      properties: {
        _id: { type: 'string' },
        name: { type: 'string' },
        email: { type: 'string' },
        cep: { type: 'string' },
        account: { type: 'string' },
        agencyId: { type: 'string' }
      }
    }
  }
}

const documentation = {
  getAgenciesSchema: {
    tags: ['agency'],
    summary: 'Find all agencies',
    description: '',
    response: agencyListResponse
  },
  getSingleAgencySchema: {
    tags: ['agency'],
    summary: 'Find agency by ID',
    description: 'Returns a single agency',
    params: idParam,
    response: agencyResponse
  },
  addAgencySchema: {
    tags: ['agency'],
    summary: 'Add a new agency',
    description: '',
    body: agencyBody,
    response: agencyResponse
  },
  updateAgencySchema: {
    tags: ['agency'],
    summary: 'Update an existing agency',
    description: '',
    params: idParam,
    body: agencyBody,
    response: agencyResponse
  },
  deleteAgencySchema: {
    tags: ['agency'],
    summary: 'Deletes an agency',
    description: '',
    params: idParam,
  },

  getUsersSchema: {
    tags: ['user'],
    summary: 'Find all users',
    description: '',
    response: userListResponse
  },
  getSingleUserSchema: {
    tags: ['user'],
    summary: 'Get user by userId',
    description: '',
    params: idParam,
    response: userResponse
  },
  addUserSchema: {
    tags: ['user'],
    summary: 'Create user',
    description: '',
    body: userBody,
    response: userResponse
  },
  updateUserSchema: {
    tags: ['user'],
    summary: 'Updated user',
    description: '',
    params: idParam,
    body: userBody,
    response: userResponse
  },
  deleteUserSchema: {
    tags: ['user'],
    summary: 'Delete user',
    description: '',
    params: idParam,
  }
}

module.exports = documentation
