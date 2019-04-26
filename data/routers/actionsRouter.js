const express = require('express')

const Actions = require('../helpers/actionModel')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        // console.log(Actions)
        const actions = await Actions.get(req.query)
        res.status(200).json(actions)
    } catch(error) {
        console.log(error)
        res.status(500).json({
            message: 'Error retrieving the actions'
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
        message: 'Error adding the action',
      });
    }
  });

module.exports = router