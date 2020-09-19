import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-fir-73ad7.cloudfunctions.net/api' // The API (cloud function) URL
    // http://localhost:5001/fir-73ad7/us-central1/api
});

export default instance;