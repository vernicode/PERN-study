require('dotenv').config()
const express = require('express')
const cors = require("cors");
const userRouter = require('./routes/user.routes')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors());

app.use(express.json())

app.listen(PORT, () => console.log(`Server just have started on ${PORT} port`))
app.use('/api', userRouter)