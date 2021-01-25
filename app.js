const express = require('express')
const app = express()
const authRoute = require("./routes/auth")
const homeController = require("./controllers/home-controller")
const pageNotFoundController = require("./controllers/page-not-found-controller")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const port = process.env.PORT || 3000
app.use(bodyParser.urlencoded({ extended: true}))
app.use(express.json())

app.set("view engine","ejs")
app.set("views","views")
app.use(authRoute)
app.get("/",homeController)
app.get("*", pageNotFoundController)
mongoose
    .connect(
    "mongodb+srv://Aeff:esLfr2a3pQ8nn3yc@cluster0.jvj7q.mongodb.net/VoiceBotAS_DB?retryWrites=true&w=majority",
    { useNewUrlParser: true, useCreateIndex: true })
    .then(() => {
        console.log("Database Connected")
    })
    .catch(() => {
        console.log("Cannot Connect to Database !!!")
    })

app.listen(port, function(){
    console.log("Listening on port", port)
})