import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-be22b.firebaseio.com/'
});

export default instance;
