class Auth{
    constructor({baseUrl}){
        this._baseUrl = baseUrl;
    }

    // Возврат ответа об ошибке от сервера
    checkResponse = (res) => {
        if (res.ok) {
            // Метод .json принимает предоставленный JSON, строит его и отправляет его клиенту
            return res.json();
        }
        // Promise  позволяет создать обертку для значения, который еще не известен при создании промиса. Нужен для асинхронных операций
        return Promise.reject(`Ошибка: ${res.statusText}, с кодом: ${res.status}`);
    }

    /**
    * Метод запроса для регистрации пользователя на сервере 
    * @param {String} email Почтовый адрес пользователя, необходимый для регистрации
    * @param {String} password Пароль пользователя, необходимый для регистрации
    */
    register({email, password}) {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'Post',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                    "password": password,
                    "email": email
            }),
        })
        .then(this.checkResponse)
    }

    /**
    * Метод запроса для авторизации пользователя на сервере 
    * @param {String} email Почтовый адрес пользователя, необходимый для авторизации
    * @param {String} password Пароль пользователя, необходимый для авторизации
    */
   login({email, password}) {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "password": password,
                "email": email
            }),
        })
        .then(this.checkResponse)
   }
}

const auth = new Auth({   
    baseUrl: 'https://auth.nomoreparties.co',
})

export default auth;
