import express from 'express'
import dataFilteringRouter from './src/services/dataFiltering.js'
const app = express()
const port = process.env.PORT || 3000

// Router registration
app.use(dataFilteringRouter)

app.get('/', function (req, res) {
  res.json({ message: 'ok' })
})

app.listen(port, '0.0.0.0', () => {
  console.log(`K+N app listening at http://localhost:${port}`)
})
