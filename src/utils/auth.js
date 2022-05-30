export const baseUrl = 'https://auth.nomoreparties.co';

const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res.status);
      }
}

export const register = (password, email) => {
    return fetch(`${baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        password,
        email,
      })
    })
    .then(res => {
      checkResponse(res);
    })
}; 

export const login = (password, email) => {
    return fetch(`${baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        password,
        email,
      })
    })
    .then(res => {
        checkResponse(res)
    })
}

export const checkToken = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
  .then(res => {
    checkResponse(res)
  })
} 