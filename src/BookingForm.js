import React from 'react';

const BookingForm = ({ bookingInfo, handleInputChange, handleSubmit, availableTimes }) => {
  return (
    <form className='booking-form' onSubmit={handleSubmit}>
      <label>
        <span>Date:</span>
        <input
          type='date'
          name='date'
          value={bookingInfo.date}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        <span>Time:</span>
        <select name='time' value={bookingInfo.time} onChange={handleInputChange} required>
          <option value=''>Select a time</option>
          {availableTimes.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </select>
      </label>
      <label>
        <span>Number of guests:</span>
        <input
          type='number'
          name='guests'
          value={bookingInfo.guests}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        <span>Occasion:</span>
        <select name='occasion' value={bookingInfo.occasion} onChange={handleInputChange} required>
          <option value=''>Select an option</option>
          <option value='Birthday'>Birthday</option>
          <option value='Anniversary'>Anniversary</option>
        </select>
      </label>
      <button type='submit'>Submit reservation</button>
    </form>
  );
};

export default BookingForm;
