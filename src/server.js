const express = require("express");

const app = express()

// config
const {PORT} = require("./config")


app.use(express.json());
app.use(require("cors")());

// routes
app.use(require("./routers/router"))

app.listen(PORT , ()=> console.log(`server running http://localhost:${PORT}`))

