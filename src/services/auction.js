import Http from "./http"

export const getAuctions = () => Http.get('/auctions')

export const getScore = data => Http.get(`/game/score/${data}`)

export const createAuction = (accessToken, data) => Http.post('/auctions', data, {
  headers: {
    Authorization: accessToken,
  },
});
