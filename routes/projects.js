const router = require('express').Router()
const projectsController = require('../controllers/projects-controller')
const { Project } = require('../database/models')

router.get('/', projectsController.index)
router.post('/', projectsController.post)
router.get('/:id', projectsController.show)
router.put('/:id', projectsController.put)

module.exports = router