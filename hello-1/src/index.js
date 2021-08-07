const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.json({message: 'ok from hello 1 de /'})
})

app.get('/api', (req, res) => {
    res.json({message: 'ok from hello /api'})
})
app.get('/v1', (req, res) => {
    res.json({message: 'ok from hello 1 de /v1'})
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`We are hello 1 and we are on fire on port: ${PORT}`)
})
