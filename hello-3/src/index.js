const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json({message: 'ok from hello 3'})
})

const PORT = 5000

app.listen(PORT, ()=> {
    console.log(`We are hello 3 and we are on fire on port: ${PORT}`)
})