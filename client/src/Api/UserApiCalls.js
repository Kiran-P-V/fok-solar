import axios from "../Utility/Axios";

const signUp = async (signUpData) => {
  try {
    const response = await axios.post("/user/signup", signUpData);
    return response;
  } catch (error) {
    console.log(error.message);
    return error.response;
  }
};


const UserApiCalls = {
  signUp,
};

export default UserApiCalls;
