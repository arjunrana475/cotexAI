import api from "../../utils/axios.js";

const getCurrentUser = async () => {
  try {
    const { data } = await api.get("/api/me");
    return data;
  } catch (e) {
    console.log(e.response?.data || e.message);
    return null;
  }
};

export default getCurrentUser;
