const express = require('express')
const app = express()

const routes = require('./routes')

const port = process.env.APP_PORT
const host = process.env.APP_HOST

app.use('/api', routes)

app.listen(port, host, () => {
    console.log(`Сервер запущен по адресу ${host}:${port}`)
})
