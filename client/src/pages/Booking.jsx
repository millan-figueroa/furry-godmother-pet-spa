/* eslint-disable no-unused-vars */
//Import useState to capture customer selections and control form data.
import React, { useState } from 'react';

//Import react-calendar to create a ready-made interactive calendar.
import Calendar from 'react-calendar';

//Import useNavigate to redirect the user back to the Home page after booking.
import { useNavigate } from 'react-router-dom';

//Define variables for dropdown menus. These could be saved in MongoDB instead to make them updateable in a UI element.
const services = [
    'Small dog bath (less than 20lbs)',
    'Medium dog bath (21 - 40lbs)',
    'Large dog bath (41 - 60 lbs)',
    'XLarge dog bath (61+ lbs)',
    'Cat bath short coat', 'Cat bath long coat',
    'Nail trim', 'Haircut', 'Deluxe Package'
];

const groomers = [
    'Che Guevara',
    'Simón Bolívar',
    'Isabel Allende',
    'Jose Artigas'
]

const Booking = () => {

    // Define state variables for form elements
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState(new Date());
    const [service, setService] = useState('');
    const [groomer, setGroomer] = useState('');
    const navigate = useNavigate();

    // Function to handle submissions, prevents default HTML actions (like page reload)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, date, service, groomer }),
    });

    // Successful booking message
        if (response.ok) {
            alert('Booking for ${name} on ${date.toLocaleDateString()} was successful! Email confirmation sent to ${email}!');
            navigate('/');
        } else {
            alert('Booking failed. Please try again.')
        }
    };
}

export default Booking;