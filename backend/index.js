const express = require('express')
const cors = require('cors')

const app = express()

// imports de arquivos
const UserRoutes = require('./routes/UserRoutes')

// Config JSON response
app.use(express.json())

// Solve CORS
app.use(cors({ credentials: true, origin: 'http://localhost:3000'}))

// Public folder for images
app.use(express.static('public'))

// Routes
app.use('/users', UserRoutes)



app.listen(5000)