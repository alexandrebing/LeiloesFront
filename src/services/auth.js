import Http from "./http"

export const createToken = (username, password) => Http.post('/auth', { username, password });

export const getTokenInfo = (accessToken) => Http.get('/auth', {
  headers: {
    Authorization: accessToken,
  },
});