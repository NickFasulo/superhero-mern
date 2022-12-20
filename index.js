import db from './db/connection.js'
import routes from './routes/index.js'
import express from 'express'
import logger from 'morgan'
import cors from 'cors'

const app = express()
const PORT = 3000

app.use(express.json())
app.use(cors())
app.use(logger('dev'))

app.use('/api', routes)

db.on('connected', () => {
  console.clear()
  console.log('Connected to MongoDB')
  app.listen(PORT, () => {
    console.log(
      `Express server is running in development on http://localhost:${PORT}`
    )
  })
})
