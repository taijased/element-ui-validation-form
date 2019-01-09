import axios from 'axios';

// Example privite board 

// const key = '0456580dsa9fdsan0a932498n32b05c7b';
// const token = '9153bd91c2c038das81f7823gadsddagh984fsd32badyubg9823418d35c';
// const API_URL_TRELLO = 'https://api.trello.com/1/cards?key='+ key +'&token=' + token

// P.S key and token test value

// Example public board 

const API_URL_TRELLO = 'https://trello.com/c/4hzuJL8E/1-%D1%8D%D1%82%D0%BE-%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%B0%D1%8F'

let ApiTrello = axios.create({
    baseURL: API_URL_TRELLO,
    headers: {
      'Accept': 'application/json; charset=utf-8',
      'Accept-Language': 'ru-RU,ru;q=0.5',
      'Content-Type': 'application/json'
    }
  })
  
export default ApiTrello;
