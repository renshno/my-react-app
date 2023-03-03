import React, { useState, useReducer } from 'react';
import './App.css';
import BookingForm from './BookingForm';

function Main() {
  const [bookingInfo, setBookingInfo] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: '',
  });

  const initializeTimes = () => {
    return ['12:00', '14:00', '16:00', '18:00', '20:00'];
  };

  const updateTimes = (state, action) => {
    // Replace the following line with your logic to update available times based on the selected date
    return initializeTimes();
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingInfo((prevState) => ({ ...prevState, [name]: value }));
    if (name === 'date') {
      dispatch({ type: 'updateTimes', payload: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your logic to submit the form data to your backend or API
    console.log(bookingInfo);
  };

  return (
    <div className='main'>
      <h1>Table Booking Form</h1>
      <BookingForm
        bookingInfo={bookingInfo}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        availableTimes={availableTimes}
      />
    </div>
  );
}

function App() {
  return (
    <div className='App'>
      <Main />
    </div>
  );
}

export default App;
