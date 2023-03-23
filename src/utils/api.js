class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._authorization = options.headers.authorization;

  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserData() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: this._authorization
      }
    })
      .then(res => {
        return this._checkResponse(res);
      });
  }

  updateUserData(newUserData) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._authorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: newUserData.name,
        about: newUserData.about
      })
    })
      .then(res => {
        return this._checkResponse(res);
      });
  }

  updateUserAvatar(newLink) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._authorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: newLink
      })
    })
      .then(res => {
        return this._checkResponse(res);
      });
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: this._authorization
      }
    })
      .then(res => {
        return this._checkResponse(res);
      });
  }

  likeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {
        authorization: this._authorization
      },
    })
      .then(res => {
        return this._checkResponse(res);
      });
  }

  dislikeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: this._authorization
      },
    })
      .then(res => {
        return this._checkResponse(res);
      });
  }

  postNewCard(newImageData) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: this._authorization
      },
      body: JSON.stringify({
        name: newImageData.name,
        link: newImageData.link
      })
    })
      .then(res => {
        return this._checkResponse(res);
      });
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/` + cardId, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: this._authorization
      },
    })
      .then(res => {
        return this._checkResponse(res);
      });
  }

}

/******************** class *******************/
/* api */
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-59',
  headers: {
    authorization: '26a361d2-5544-4967-a67c-9f781c38c119',
    'Content-Type': 'application/json'
  }
});

export default api;