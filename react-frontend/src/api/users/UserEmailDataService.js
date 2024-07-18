import axios from "axios";

const UserEmailDataService = async (email) => {
  try {
    return axios.post(`http://192.168.56.104:80/notification`, null, {
      params: {
        email,
      },
    });
  } catch (err) {
    let error = "";
    if (err.response) {
      error += err.response;
    }
    return error;
  }
};

export default UserEmailDataService;
