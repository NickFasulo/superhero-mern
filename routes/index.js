import { Router } from 'express'
import superheroRoutes from './superheroes.js'

const router = Router()

router.get('/', (req, res) => {
  res.send('api root')
})

router.use('/superheroes', superheroRoutes)

export default router
