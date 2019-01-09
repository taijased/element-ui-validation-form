import axios from 'axios';

// Example public board 

const key = 'a8baabbb0068e0ea8ccd2b02a84c2c48';
const token = '1dd44945a26e7aad43a71903a8182252772fdf236ef211f320c4d7a7ed21fe3c';
const API_URL_TRELLO = 'https://api.trello.com/1/cards?key='+ key +'&token=' + token

let ApiTrello = axios.create({
    baseURL: API_URL_TRELLO,
    headers: {
      'Accept': 'application/json; charset=utf-8',
      'Accept-Language': 'ru-RU,ru;q=0.5',
      'Content-Type': 'application/json'
    }
  })
  
export default ApiTrello;
