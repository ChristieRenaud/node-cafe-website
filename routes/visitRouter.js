const express = require('express')
const visitRouter = express.Router()

visitRouter
  .route('/')
  .all((req, res, next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    next()
  })

  .get((req, res) => {
    res.end('Will send visit to you')
  })

  .post((req, res) => {
    res.end(
      `Will add visit: ${req.body.name} with description: ${req.body.description}`,
    )
  })

  .put((req, res) => {
    res.statusCode = 403
    res.end('PUT operation not supported on /visit')
  })

  .delete((req, res) => {
    res.end('Deleting visit')
  })

module.exports = visitRouter
