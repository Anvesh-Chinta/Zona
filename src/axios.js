import axios from "axios";

const instance = axios.create({
      //THE API (cloud function) URL
     baseURL: 'https://us-central1-zona-87983.cloudfunctions.net/api'
     //'http://localhost:5001/zona-87983/us-central1/api'
});

export default instance;