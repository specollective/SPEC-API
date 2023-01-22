const router = require('express').Router()
const { Project } = require('../database/models')

router.get('/', async(req, res, next) => {
  try {
    const projects = await Project.findAll({
      attributes: ['id', 'name', 'description']
    })
    res.json({ projects })
  } catch (err) {
    next(err)
  }
})

router.post('/', async(req, res, next) => {
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
})

router.get('/:id', async(req, res, next) => {
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
})

router.put('/:id', async(req, res, next) => {
  try {
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
})

module.exports = router