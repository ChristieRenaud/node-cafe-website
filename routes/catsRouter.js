const express = require('express')
const catsRouter = express.Router()

catsRouter
  .route('/')
  .all((req, res, next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    next()
  })

  .get((req, res) => {
    res.end('Will send all the cats to you')
  })

  .post((req, res) => {
    res.end(
      `Will add the cats: ${req.body.name} with description: ${req.body.description}`,
    )
  })

  .put((req, res) => {
    res.statusCode = 403
    res.end('PUT operation not supported on /cats')
  })

  .delete((req, res) => {
    res.end('Deleting all cats')
  })
  .route('/:catId')
  .all((req, res, next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    next()
  })

  .get((req, res) => {
    res.end(`Will send ${req.param.catId} to you`)
  })

  .post((req, res) => {
    res.end(
      `Will add the cat: ${req.body.name} with description: ${req.body.description}`,
    )
  })

  .put((req, res) => {
    res.statusCode = 403
    res.end('PUT operation not supported on /${req.param.catId}')
  })

  .delete((req, res) => {
    res.end(`Deleting cat ${req.param.catId}`)
  })

module.exports = catsRouter
