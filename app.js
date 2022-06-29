import express from 'express'
import dataFilteringRouter from './src/controllers/dataController.js'

import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './swagger.js'

const app = express()
const port = 8080

// Router registration
app.use(dataFilteringRouter)
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

app.get('/', function (req, res) {
  res.json({ message: 'Welcome to the K+N app' })
})

app.listen(port, '0.0.0.0', () => {
  console.log(`K+N app listening at http://localhost:${port}`)
})

export default app
