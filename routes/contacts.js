const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Get all contacts
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Get a single contact
router.get('/:id', async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) return res.status(404).send('Contact not found');
        res.json(contact);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Create a new contact
router.post('/', async (req, res) => {
    try {
        const newContact = new Contact({ ...req.body });
        const contact = await newContact.save();
        res.json(contact);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Update a contact
router.put('/:id', async (req, res) => {
    try {
        const updatedContact = await Contact.findByIdAndUpdate(
            req.params.id,
            { ...req.body, dateUpdated: Date.now() },
            { new: true }
        );
        res.json(updatedContact);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Delete a contact
router.delete('/:id', async (req, res) => {
    try {
        await Contact.findByIdAndDelete(req.params.id);
        res.send('Contact deleted');
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;
