import Superhero from '../models/Superhero.js'

export const getSuperheroes = async (req, res) => {
  try {
    const superheroes = await Superhero.find()
    res.json(superheroes)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const getSuperhero = async (req, res) => {
  try {
    const superhero = await Superhero.findById(req.params.id)

    if (superhero) {
      return res.json(superhero)
    }

    res.status(404).json({ message: 'Superhero not found' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const createSuperhero = async (req, res) => {
  try {
    const superhero = new Superhero(req.body)
    await superhero.save()
    res.status(201).json(superhero)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const updateSuperhero = async (req, res) => {
  try {
    const superhero = await Superhero.findByIdAndUpdate(req.params.id, req.body)
    res.status(201).json(superhero)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const deleteSuperhero = async (req, res) => {
  try {
    const deleted = await Superhero.findByIdAndDelete(req.params.id)

    if (deleted) {
      return res.status(200).send('Superhero deleted')
    }

    throw new Error('Superhero not found')
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}
