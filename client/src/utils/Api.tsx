import axios from "axios";
const headers = {
    "Content-Type": "application/json",
};
const burl =
    "https://my-json-server.typicode.com/RandyLarzabal/CrossFitProject/blob/master/db.json";

export default {
    getChaussure: function () {
        return axios.get(burl);
    },
};
