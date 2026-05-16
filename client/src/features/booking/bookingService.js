import axios from "axios";

// ==========================
// Get All Bookings
// ==========================
const getAllBookings = async (token) => {
  const options = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const res = await axios.get("https://apnabus-2-2.onrender.com/api/booking/my-bookings", options);
  return res.data;
};

// ==========================
// Get Single Booking
// ==========================
const getSingleBooking = async (id, token) => {
  const options = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const res = await axios.get(`https://apnabus-2-2.onrender.com/api/booking/${id}`, options);
  return res.data;
};

// ==========================
// Create Booking
// ==========================
const createBooking = async (bookingData, token) => {
  const options = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const res = await axios.post("https://apnabus-2-2.onrender.com/api/booking", bookingData, options);
  return res.data;
};

// ==========================
// Update Booking
// ==========================


// ==========================
// Delete Booking
// ==========================
const deleteBooking = async (id, token) => {
  const options = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const res = await axios.delete(`https://apnabus-2-2.onrender.com/api/booking/${id}`, options);
  return res.data;
};
const getBookedSeats = async (busId, date, token) => {
  const options = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const res = await axios.get(
    `https://apnabus-2-2.onrender.com/api/booking/booked-seats?busId=${busId}&date=${date}`,
    options
  );

  return res.data;
};
const bookingService = {
  getAllBookings,
  getSingleBooking,
  createBooking,
 getBookedSeats,
  deleteBooking,
};

export default bookingService;
