import Http from "./http"

export const getAuctions = () => Http.get('/auctions')

export const postBid = data => Http.post('/auctions/'+ data.id + '/bids', data)
