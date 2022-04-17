const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = 3001

//Logger
const logger = (request, response, next) => {
  console.log('Method:',request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}
app.use(logger)

//BodyParser
const bodyParser = require('body-parser')
app.use(bodyParser.json())

//Cors
const cors = require('cors')
app.use(cors())


let persons = [
    {
        name: "Arto Hellas",
        number: "040-123456",
        id: 1
    },
    {
        name: "Martti Tienari",
        number: "040-123456",
        id: 2
    },
    {
        name: "Arto Järvinen",
        number: "040-123456",
        id: 3
    },
    {
        name: "Lea Kutvonen",
        number: "040-123456",
        id: 4
    }
]



app.get('/api/persons',(request,response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)

    if (person){
        response.json(person)
    }else{
        response.status(404).end()
    }
    
  })

  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
  
    response.status(204).end()
  })

  const generateId = () => {
    const id = Math.floor(Math.random() * 1000000)
    return id
  }

  app.post('/api/persons', (request, response) => {
    const body = request.body
    
    if (body.name === undefined || body.number === undefined) {
      return response.status(400).json({ 
        error: 'content missing' 
      })
    }
    const names = persons.map(p => p.name)
    
    if (names.includes(body.name)){
        return response.status(400).json({
            error: 'name must be unique'
        })
    }
    
    const person = {
      name: body.name,
      number: body.number,
      id: generateId(),
    }
  
    persons = persons.concat(person)
  
    response.json(person)
  })



  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })