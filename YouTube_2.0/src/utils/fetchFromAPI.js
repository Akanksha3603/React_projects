import axios from 'axios';
const BASE_URL= 'https://youtube-v31.p.rapidapi.com';


const options = {
  // method: 'GET',
  // url: BASE_URL,
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'd16cafd607msh7ebb7f97abf0db5p1d8bfejsneef40eb0a3dc',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};



export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}