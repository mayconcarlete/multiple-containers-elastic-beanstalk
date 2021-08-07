const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/v2', (req, res) => {
    res.json({message: 'ok from hello 2'})
})

const PORT = 4000   

app.listen(PORT, () => {
    console.log(`We are hello 2 and we are on fire on port: ${PORT}`)
})