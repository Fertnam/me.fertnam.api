module.exports = (error, request, response, next) => {
    response.status(500).send('Internal error')
}
