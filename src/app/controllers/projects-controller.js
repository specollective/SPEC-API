const { Project } = require('../models')

module.exports = {
  index: async (req, res, next) => {
    try {
      const projects = await Project.findAll({
        attributes: ['id', 'name', 'description']
      })
      res.json({ projects })
    } catch (err) {
      next(err)
    }
  },
  post: async (req, res, next) => {
    try {
      const { name, description } = req.body
      
      const project = await Project.create({
        name,
        description,
      })

      res.json({ project })
    } catch(err) {
      next(err)
    }
  },
  show: async (req, res, next) => {
    try {
      const project = await Project.findOne({
        where: {
          id: req.params.id
        },
        attributes: ['id', 'name', 'description']
      })
      res.json({ project })
    } catch(err) {
      next(err)
    }
  },
  put: async (req, res, next) => {
    try {
      // Filter out any fields that are not allowed to be updated.
      const [updated] = await Project.update(req.body, {
        where: {
          id: req.params.id
        }
      })
      if (updated) {
        const updatedProject = await Project.findByPk(req.params.id)
        res.json({ project: updatedProject })
      }
    } catch(err) {
      next(err)
    }
  }
}