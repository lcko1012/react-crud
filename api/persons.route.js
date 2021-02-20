const express = require('express')
const personsRoutes = express.Router()

let Person = require('./persons.model')


personsRoutes.post('/add', (req, res) => {
    let person = new Person(req.body)
    person.save().then(person => {
        res.status(200).json(
            {
                'person': 'person in added successfully'
            }
        )
    }).catch(err => {
        res.status(400).send('unable to save to database')
    })
})


personsRoutes.get('/', (req, res) => {
    let id = req.query.id
    try{
        Person.find(id, (err, person) => {
            res.json(person)

        })
    }catch(err){
        return res.status(404).send({err: 'Khong hien thi duoc du lieu'})
    }
    
})

personsRoutes.get('/edit/:id', (req, res) => {
    console.log("zo")
    let id = req.params.id;
    
    try{
        Person.findById(id, function (err, business){
            res.json(business);
        });
    }catch(err) {
        return res.status(404).send({err: 'Khong lay duoc thong tin'})
    }
})


personsRoutes.post('/update/:id', (req, res) => {
    Person.findById(req.params.id, (err, person) => {
        if(!person){
            res.status(404).send("data is not found")
        }
        else
        {
            person.name = req.body.name
            person.company = req.body.company
            person.age = req.body.age

            person.save().then(business => {
                res.json('update complete')
            }).catch(err => {
                res.status(400).send("unable to update the database")
            })
        }
    })
})

personsRoutes.put('/update/:id', (req, res) => {
    Person.findById(req.params.id, (err, person) => {
        if(!person){
            res.status(404).send("person is not found")
        }
        else
        {
            person.name = req.body.name
            person.age = req.body.age
            person.company = req.body.company

            person.save().then(business => {
                res.json('update complete')
            }).catch(err => {
                res.status(400).send("unable to update the data base")
            })
        }
    })
})


personsRoutes.get('/delete/:id', (req, res) => {
    Person.findByIdAndRemove({
        _id: req.params.id
    }, function(err, person){
        if(err) res.json(err)
        else res.json('Successfully removed')
    })
})

module.exports = personsRoutes