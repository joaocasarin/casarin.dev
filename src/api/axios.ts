import axios from 'axios';

export const selfApi = axios.create({
    baseURL: 'https://joaocasarin.herokuapp.com/v1/'
});
