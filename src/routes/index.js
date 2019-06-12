// Import our Controllers
const agencyController = require('../controllers/agencyController')
const userController = require('../controllers/userController')

const routes = [
  {
    method: 'GET',
    url: '/api/agencies',
    handler: agencyController.getAgencies
  },
  {
    method: 'GET',
    url: '/api/agencies/:id',
    handler: agencyController.getSingleAgency
  },
  {
    method: 'POST',
    url: '/api/agencies',
    handler: agencyController.addAgency,
    // schema: documentation.addAgencySchema
  },
  {
    method: 'PUT',
    url: '/api/agencies/:id',
    handler: agencyController.updateAgency
  },
  {
    method: 'DELETE',
    url: '/api/agencies/:id',
    handler: agencyController.deleteAgency
  },

  {
    method: 'GET',
    url: '/api/users',
    handler: userController.getUsers
  },
  {
    method: 'GET',
    url: '/api/users/:id',
    handler: userController.getSingleUser
  },
  {
    method: 'POST',
    url: '/api/users',
    handler: userController.addUser,
    // schema: documentation.addUserSchema
  },
  {
    method: 'PUT',
    url: '/api/users/:id',
    handler: userController.updateUser
  },
  {
    method: 'DELETE',
    url: '/api/users/:id',
    handler: userController.deleteUser
  }
]

module.exports = routes
