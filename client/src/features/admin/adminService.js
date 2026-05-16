import axios from "axios";

const fetchAllBookings = async (token) => {
  let options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get("https://apnabus-2-2.onrender.com/api/admin/view-bookings", options);
  return response.data;
};

// adminService.js

const updateBooking = async (id, formdata, token) => {
    console.log(id, formdata);
  
    return await axios.put(`https://apnabus-2-2.onrender.com/api/admin/booking/${id}`, formdata, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };


const fetchAllUsers = async (token) => {
  let options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get("https://apnabus-2-2.onrender.com/api/admin/view-users", options);
  return response.data;
};

const adminService = { fetchAllBookings, fetchAllUsers, updateBooking };

export default adminService;
