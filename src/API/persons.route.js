const express = require('express');
const personRoutes = express.Router();

let Person = require('./business.model');

// Defined store route
personRoutes.route('/add').post(function (req, res) {
    let person = new Person(req.body);
    person.save()
        .then(person => {
            res.status(200).json({'person': 'person in added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

// Defined get data(index or listing) route
personRoutes.route('/').get(function (req, res) {
    Person.find(function(err, persons){
        if(err){
            console.log(err);
        }
        else {
            res.json(persons);
        }
    });
});

module.exports = personRoutes;