// Imports the Express library, server creation & HTTP request handling.
const express = require('express'); 
// Imports Mongoose, an Object Data Modeling (ODM) library for MongoDB and Node.js.
const mongoose = require('mongoose'); 
// Imports CORS (Cross-Origin Resource Sharing) middleware for different origin requests
const cors = require('cors'); 
// Loads env var from .env file into process.env, for data security.
require('dotenv').config(); 



// EXPRESS middleware setup  
const app = express(); // Creates an instance of an Express application.
app.use(cors()); // Enables CORS to allow request from different origins
app.use(express.json()); // Parses incoming JSON requests & makes data avail on req.body

// Connection to MongoDB using Mongoose w connection string in template literal
mongoose.connect( 
    'mongodb+srv://millanfig:data1FR@cluster0.emdfm.mongodb.net/furry_godmother?retryWrites=true&w=majority&appName=Cluster0'
).then(() => {
    console.log('Connected to MongoDB'); // Sends success or fail message to console
  }).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  })

// Defines Mongoose schema for a booking and specifies equired fields
const BookingSchema = new mongoose.Schema({ 
    name:{ type: String, required: true }, 
    email: { type: String, required: true },
    date: { type: Date, required: true },
    service: { type: String, required: true },
    groomer: { type: String, required: false },
});

// Model definition -represents collection of bookings in db, allows us to interact using Mongoose methods (save, find, update, etc.)
const Booking = mongoose.model('Booking', BookingSchema);

// Route setup - defines POST endpoint at /api/bookings. Callback func executes when request is made
app.post('/api/bookings', async (req, res) => {
    try {
        // The req.body contains the data sent from the client (like name, email, date, etc.). This data is destructured to extract individual fields.
        const { name, email, date, service, groomer } = req.body;
        // A new instance of the Booking model is created with the provided data
        const newBooking = new Booking({ name, email, date, service, groomer });
        // Saves the doc to the MongoDB database asynchronously using await.
        await newBooking.save();
        // If the booking is saved successfully, it's sent back as a JSON response.
        res.json(newBooking);
        // Otherwise, it's caught in the catch block, error is logged to the console, and 500 status code is sent back to the client with an error message.
    } catch (error) {
        console.error('Error saving booking:', error);
        res.status(500).json({ message: 'Error saving booking' });
    }
});

// Starts the Express server and listens for incoming requests on port 5000.
// Callback func logs message indicating server is running, useful for confirming app has started successfully.
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});