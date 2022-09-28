import Axios from "axios";

const getUser = () => {
    return Axios.get("https://mocki.io/v1/196c9510-7e53-439e-9f0c-50c5362e9e6a");
};

const Service = {
    getUser
};
export default Service;