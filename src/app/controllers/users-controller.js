const { User } = require('../models')

module.exports = {
  index: async(req, res, next) => {
    try {
      const users = await User.findAll({
        attributes: ['id', 'email', 'firstName', 'lastName']
      })
      res.json({ users })
    } catch (err) {
      next(err)
    }
  },
  post: async(req, res, next) => {
    try {
      const { email, firstName, lastName } = req.body
      
      const user = await User.create({
        email,
        firstName,
        lastName,
      })

      res.json({ user })
    } catch(err) {
      next(err)
    }
  },
  show: async(req, res, next) => {
    try {
      console.log('this is the params', req.params)
      const user = await User.findOne({
        where: {
          id: req.params.id
        },
        attributes: ['id', 'email']
      })
      res.json({user})
    } catch(err) {
      next(err)
    }
  },

  put: async(req, res, next) => {
    try {
      const [updated] = await User.update(req.body, {
        where: {
          id: req.params.id
        }
      })
      if (updated) {
        const updatedUser = await User.findByPk(req.params.id)
        res.json({user: updatedUser})
      }
    } catch(err) {
      next(err)
    }
  }
}