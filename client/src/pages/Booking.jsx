/* eslint-disable no-unused-vars */
//Import useState to capture customer selections and control form data.
import React, { useState } from 'react';
//Import react-calendar to create a ready-made interactive calendar.
import Calendar from 'react-calendar';
//Import useNavigate to redirect the user back to the Home page after booking.
import { useNavigate } from 'react-router-dom';
import '../assets/css/Booking.css'; 

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
            alert(`Booking for ${name} on ${date.toLocaleDateString()} was successful! Email confirmation sent to ${email}!`);
            navigate('/');
        } else {
            alert('Booking failed. Please try again.')
        }
    };


    // Options for services & groomer dropdowns
    return (
        <div>
            <h2>Book a Service</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Pet Name: </label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor='email'>Email: </label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label >Date:</label>
                    {/*See https://www.npmjs.com/package/react-calendar for available config options*/}
                    <Calendar
                        onChange={setDate}
                        value={date}
                        required
                    />
                    <p>Selected Date: {date.toLocaleDateString()}</p>
                </div>
                <div>
                    <label htmlFor="service">Service: </label>
                    <select
                        id="service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        required
                    >
                        <option value="" disabled>Select a service</option>
                        {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="groomer">Groomer: </label>
                    <select
                        id="groomer"
                        value={groomer}
                        onChange={(e) => setGroomer(e.target.value)}
                    >
                        <option value="" disabled>Select a groomer (optional)</option>
                        {groomers.map((groomer, index) => (
                        <option key={index} value={groomer}>{groomer}</option>
                        ))}
                    </select>
                </div>
                <button type="submit">Book</button>
            </form>
        </div>
    );
};


export default Booking;