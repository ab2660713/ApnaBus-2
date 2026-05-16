import axios from "axios";

const API_URL = "https://apnabus-2-2.onrender.com/api/rating/";

const addRating = async (data) => {
  const token = JSON.parse(localStorage.getItem("user")).token;

  const res = await axios.post(API_URL, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

const getRating = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export default {
  addRating,
  getRating,
};
