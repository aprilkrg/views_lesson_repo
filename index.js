const express = require("express")
const app = express()

const PORT = 3000

const arrCharacters = ["Cheryl", "Pam", "Krieger"]

// CONFIGURE APP TO USE EJS
app.set("view engine", "ejs")

// ROUTES
// home route
// HTTP verb = GET   URL pattern = "localhost:3000/"
app.get("/", (request, response) => {
    // ROUTE CHECK
    // response.send("This is the Home Page!")
    // SEND FILE
    // response.sendFile(__dirname+"/views/index.html")
    // RENDER VIEW
    response.render("index", {name: "Mallory Archer", age: 35})
})

// HTTP verb = GET   URL pattern = "localhost:3000/about"
const faves = ["jump up high", "sit in your lap", "sing wheels on the bus"]
app.get("/about", (req, res) => {
    // SENDS HTML
    // res.send("Some stuff about me will go here.")
    // SENDS HTML FILE
    // res.sendFile(__dirname+"/views/about.html")
    // RENDER VIEW
    res.render("about", {favorites: faves})
})

// HTTP verb = GET   URL pattern = "localhost:3000/blog"
app.get("/blog", (req, res) => {
    // res.send("A directory of all my blog posts will go here.")
    // res.sendFile(__dirname+"/views/blog-directory.html")
    // RENDER VIEW
    res.render("blog-directory")
})

// LISTENER GOES AT THE BOTTOM
app.listen(PORT, () => {
    console.log(`The bird channel is showing on port ${PORT}`)
})