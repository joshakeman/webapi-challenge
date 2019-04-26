const express = require('express')

const Projects = require('../helpers/projectModel')

const router = express.Router()

router.get('/', async (req, res) => {
    console.log(req.query)
    try {
        const projects = await Projects.get()
        res.status(200).json(projects)
    } catch(error) {
        console.log(error)
        res.status(500).json({
            message: 'Error retrieving the projects'
        })
    }
})

router.get('/:id', async (req, res) => {
    console.log(req.params)
    try {
        const projects = await Projects.get()
        res.status(200).json(projects)
    } catch(error) {
        console.log(error)
        res.status(500).json({
            message: 'Error retrieving the projects'
        })
    }
})

router.post('/', async (req, res) => {
    try {
      const project = await Projects.insert(req.body);
      res.status(201).json(project);
    } catch (error) {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error adding the project',
      });
    }
  });

  router.put('/:id', async (req, res) => {
    try {
      const project = await Projects.update(req.params.id, req.body);
      if (project) {
        res.status(200).json(project);
      } else {
        res.status(404).json({ message: 'The post could not be found' });
      }
    } catch (error) {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error updating the post',
      });
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
        const project = await Projects.remove(req.params.id);
        if (project) {
        res.status(200).json({ message: `That post is deleted` });
        } else {
        res.status(404).json({ message: 'We couldn\'t find that post' });
        }
    } catch (error) {
        // log error to database
        console.log(error);
        res.status(500).json({
        message: 'Error removing the post',
        });
    }  
});


module.exports = router