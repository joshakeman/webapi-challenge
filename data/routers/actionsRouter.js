const express = require('express')

const Actions = require('../helpers/actionModel')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        // console.log(Actions)
        const actions = await Actions.get()
        res.status(200).json(actions)
    } catch(error) {
        console.log(error)
        res.status(500).json({
            message: 'Error retrieving the actions'
        })
    }
})

router.get('/:id', async (req, res) => {
    try {
        // console.log(Actions)
        const actions = await Actions.get(req.params.id)
        res.status(200).json(actions)
    } catch(error) {
        console.log(error)
        res.status(500).json({
            message: 'Error retrieving the actions'
        })
    }
})

router.post('/', async (req, res) => {
    console.log(req.body)
    try {
      const action = await Actions.insert(req.body);
      res.status(201).json(action);
    } catch (error) {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error adding the action',
      });
    }
  });

  router.put('/', async (req, res) => {
    console.log(req.body)
    try {
      const action = await Actions.update(req.params.id, req.body);
      res.status(201).json(action);
    } catch (error) {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error adding the action',
      });
    }
  });

  router.delete('/', async (req, res) => {
    console.log(req.body)
    try {
      const action = await Actions.remove(req.params.id);
      res.status(201).json(action);
    } catch (error) {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error adding the action',
      });
    }
  });

module.exports = router