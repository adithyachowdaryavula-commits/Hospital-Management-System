const express = require('express');

const router = express.Router();

const Todo = require('../models/todo');
const Patient = require('../models/patient');

// ==================== TODO APIs ====================

router.get('/todos', (req, res, next) => {
    Todo.find({}, 'action')
        .then((data) => res.json(data))
        .catch(next);
});

router.post('/todos', (req, res, next) => {
    if (req.body.action) {
        Todo.create(req.body)
            .then((data) => res.json(data))
            .catch(next);
    } else {
        res.status(400).json({
            error: 'The input field is empty',
        });
    }
});

router.delete('/todos/:id', (req, res, next) => {
    Todo.findOneAndDelete({ _id: req.params.id })
        .then((data) => res.json(data))
        .catch(next);
});


// ==================== PATIENT APIs ====================

// GET all patients
router.get('/patients', (req, res, next) => {
    Patient.find()
        .then((data) => res.json(data))
        .catch(next);
});


// POST new patient
router.post('/patients', (req, res, next) => {
    const { name, age, gender, phone, email, address } = req.body;

    if (!name || !age || !gender || !phone) {
        return res.status(400).json({
            error: 'Name, age, gender and phone are required'
        });
    }

    Patient.create({
        name,
        age,
        gender,
        phone,
        email,
        address
    })
        .then((data) => res.status(201).json(data))
        .catch(next);
});


// GET patient by ID
router.get('/patients/:id', (req, res, next) => {
    Patient.findById(req.params.id)
        .then((data) => {
            if (!data) {
                return res.status(404).json({
                    error: 'Patient not found'
                });
            }

            res.json(data);
        })
        .catch(next);
});


// UPDATE patient
router.put('/patients/:id', (req, res, next) => {
    Patient.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    )
        .then((data) => {
            if (!data) {
                return res.status(404).json({
                    error: 'Patient not found'
                });
            }

            res.json(data);
        })
        .catch(next);
});


// DELETE patient
router.delete('/patients/:id', (req, res, next) => {
    Patient.findByIdAndDelete(req.params.id)
        .then((data) => {
            if (!data) {
                return res.status(404).json({
                    error: 'Patient not found'
                });
            }

            res.json({
                message: 'Patient deleted successfully',
                patient: data
            });
        })
        .catch(next);
});


module.exports = router;