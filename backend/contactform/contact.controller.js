const Contact = require('../../models/contact.model');

// Contact Form Submission
const submitContactForm = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Create a new contact form entry
        const newContact = new Contact({
            name,
            email,
            message,
        });

        // Save the contact form entry to the database
        await newContact.save();

        res.status(201).json({ message: 'Contact form submitted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { submitContactForm };
