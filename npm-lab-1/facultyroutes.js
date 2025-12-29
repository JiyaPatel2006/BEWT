const express = require('express');
const Faculty = require('./faculty');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const faculty = new Faculty(req.body);
        const savedFaculty = await faculty.save();
        res.status(201).json(savedFaculty);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const faculties = await Faculty.find();
        res.json(faculties);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;  
