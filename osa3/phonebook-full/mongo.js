const fs = require('fs')


const content = fs.readFileSync('salis.txt')
const salis = content.toString()
console.log(salis)

const { response } = require('express')
const mongoose = require('mongoose')
const process = require('process')

const url = `mongodb+srv://vmjkom:${salis}@fullstack-app.voarc.mongodb.net/Phonebook?retryWrites=true&w=majority`

mongoose.connect(url)

const Person = mongoose.model('Person',{
    name: String,
    number: String,

})
if (process.argv.length > 3){
    const person = new Person({
        name: process.argv[2],
        number: process.argv[3]
    })
    person
        .save()
        .then(response => {
            console.log(`adding person ${person.name} number ${person.number} to the directory`)
            mongoose.connection.close()
        })
}
if (process.argv.length <= 2){
    Person
        .find({})
        .then(people => {
            console.log('puhelinluettelo:')
            people.forEach(person => {
                console.log(person.name," ",person.number)
            });
            mongoose.connection.close()
        })
}