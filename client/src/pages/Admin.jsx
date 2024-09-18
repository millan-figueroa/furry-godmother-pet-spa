/* eslint-disable no-unused-vars */
// Admin Dashboard component. This is where we can see records we fetched from a backend API

import React, { useEffect, useState } from 'react';
// React is imported along with two hooks: useEffect and useState.
// useState is used to manage the component's state (in this case, a list of bookings).
// useEffect is used to trigger side effects like fetching data when the component is mounted.

const Admin = () => {

    // Initialize bookings as an empty array to hold booking data fetched from server
    // SetBookings is the function used to update the bookings state.
    const [bookings, setBookings] = useState([]); 

    // Async function to fetch and await response, set state var with the list of bookings
    useEffect(() => { // When the page loads call fetchBooking func
        const fetchBookings = async () => {
            const response = await fetch('http://localhost:5000/api/bookings');
            const data = await response.json();
            setBookings(data);
        };
    // Call fetchBookings
        fetchBookings();
    }, []);

    return (
// Mapped over booking state, display each as list item w unique _id that is used as the key for the list, which helps React efficiently update the DOM.
// The date is converted into a readable format using toLocaleDateString().
        <div>
            <h1>Admin Dashboard</h1>
            <ul>
                {bookings.map((booking) => (
                    <li key={booking._id}>
                        {booking.name} - {booking.email} - {new Date(booking.date).toLocaleDateString()} - {booking.service} - {booking.groomer}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Admin;