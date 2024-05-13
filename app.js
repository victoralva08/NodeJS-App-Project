//  Creating an Express app

const bodyParser = require("body-parser")
const express = require("express")
const app = express()

// Setting the view engine as the ejs files 
app.set("view engine", "ejs")
app.set("views", "views")


app.use(bodyParser.urlencoded( { extended: false } ))

// Creating an object array
const users = []


//  Creating the routes:
app.get('/', (req, res, next) => {
    res.render("index", { pageTitle: "Home Page" })
})

app.get("/add-users", (req, res, next) => {
    res.render("add-users", { 
        pageTitle: "Add User",
        users: users })
})

app.post("/add-users", (req, res, next) => {
    users.push( { name: req.body.username } )
    next()
})

app.get('/users', (req, res, next) => {
    res.render("users", { 
        pageTitle: "Users Page",
        users: users
     })
})

app.listen(3000)

