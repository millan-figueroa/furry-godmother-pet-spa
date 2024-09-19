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

    return (
        <h1>This is Booking.</h1>
    )
}

export default Booking;