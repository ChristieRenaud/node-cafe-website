const express = require('express')
const morgan = require('morgan')
const campsiteRouter = require('./routes/campsiteRouter')
const visitRouter = require('./routes/visitRouter')
const hostname = 'localhost'
const port = 3000

const app = express()
app.use(morgan('dev'))
app.use(express.json())

app.use('/cats', catsRouter)
app.use('/events', eventsRouter)
app.use('/cats', visitRouter)

app.use(express.static(__dirname + '/public'))

app.use((req, res) => {
  req.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('<html><body><h1>This is an Express Server</h1></body></html>')
})
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}: ${port}/`)
})
