# Использование API Trello c помощью Vue

## Live Demo [here](https://vue-api-trello.firebaseapp.com/).



## config ApiTrello.js 


```
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

```

## Example request


```
const idBoard = "5c35c65af44c5f13f13fcc65"
const idList = "5c35c68a3a95a04f8e7f0acd"
let description = `Форма: ${this.title}\n Имя: ${this.ruleForm.name}\n Телефон: ${this.ruleForm.phone}\n E-mail: ${this.ruleForm.email}`;
let data = {
    "name":`Запрос с сайта ${window.location.href}`,
    "desc": description,
    "idBoard": idBoard,
    "idList": idList,
}
new Promise((resolve, reject) => {
    ApiTrello.post('', data)
        .then(response => {
            this.dialogFormVisible = false
            resolve(response)
        })
        .catch(error => {
            console.log(error)
            reject(error)
        })
})

```




## Links

* [ElementUI](https://element.eleme.io/#/en-US) - Element, a Vue 2.0 based component library for developers, designers and product managers
* [Trello Api](https://developers.trello.com/docs/api-introduction) - Trello API Introduction
* [Vue CLI 3](https://cli.vuejs.org/) - Standard Tooling for Vue.js Development
