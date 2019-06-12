// Import our Controllers
const agencyController = require('../controllers/agencyController')
const userController = require('../controllers/userController')
const documentation = require('../controllers/documentation')

const routes = [
  {
    method: 'GET',
    url: '/api/agencies',
    handler: agencyController.getAgencies,
    schema: documentation.getAgenciesSchema
  },
  {
    method: 'GET',
    url: '/api/agencies/:id',
    handler: agencyController.getSingleAgency,
    schema: documentation.getSingleAgencySchema
  },
  {
    method: 'POST',
    url: '/api/agencies',
    handler: agencyController.addAgency,
    schema: documentation.addAgencySchema
  },
  {
    method: 'PUT',
    url: '/api/agencies/:id',
    handler: agencyController.updateAgency,
    schema: documentation.updateAgencySchema
  },
  {
    method: 'DELETE',
    url: '/api/agencies/:id',
    handler: agencyController.deleteAgency,
    schema: documentation.deleteAgencySchema
  },

  {
    method: 'GET',
    url: '/api/users',
    handler: userController.getUsers,
    schema: documentation.getUsersSchema
  },
  {
    method: 'GET',
    url: '/api/users/:id',
    handler: userController.getSingleUser,
    schema: documentation.getSingleUserSchema
  },
  {
    method: 'POST',
    url: '/api/users',
    handler: userController.addUser,
    schema: documentation.addUserSchema
  },
  {
    method: 'PUT',
    url: '/api/users/:id',
    handler: userController.updateUser,
    schema: documentation.updateUserSchema
  },
  {
    method: 'DELETE',
    url: '/api/users/:id',
    handler: userController.deleteUser,
    schema: documentation.deleteUserSchema
  }
]

module.exports = routes
