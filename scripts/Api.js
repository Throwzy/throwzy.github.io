class Api {
    constructor(config) {
        this.url = config.url;
        this.headers = config.headers;
        this.method = config.method;
        this.body = config.body;
        this.baseUrl = config.baseUrl;
    }
    getInititalCards() {
        return fetch(`${this.baseUrl}/cards`, {
            headers: this.headers
        }).then ((res) => {
            /*
                Можно лучше: проверка ответа сервера и преобразование из json
                дублируется во всех методах класса Api, лучше вынести в отдельный метод:
                    _getResponseData(res) {
                        if (!res.ok) {
                            return Promise.reject(`Ошибка: ${res.status}`); 
                        }
                        return res.json();
                    }
                Подчеркивание в начале имени метода говорит о том, что метод является приватным, т.е.
                не используется вне класса Api   
            */
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }
    getProfile() {
        return fetch(`${this.baseUrl}/users/me`, {
            headers: this.headers
        }).then ((res) => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }

    /*
        Можно лучше: renewProfile => updateProfile
    */
    renewProfile(name,about) {
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                name: name,
                about: about
            })
        }).then ((res) => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }
}