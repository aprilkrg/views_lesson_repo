const express = require("express")
const app = express()

const PORT = 3000

// ROUTES
// home route
// HTTP verb = GET   URL pattern = "localhost:3000/"
app.get("/", (request, response) => {
    // ROUTE CHECK
    // response.send("This is the Home Page!")
    // SEND FILE
    response.sendFile(__dirname+"/views/index.html")
})

// HTTP verb = GET   URL pattern = "localhost:3000/about"
app.get("/about", (req, res) => {
    res.send("Some stuff about me will go here.")
})

// HTTP verb = GET   URL pattern = "localhost:3000/blog"
app.get("/blog", (req, res) => {
    res.send("A directory of all my blog posts will go here.")
})

// LISTENER GOES AT THE BOTTOM
app.listen(PORT, () => {
    console.log(`The bird channel is showing on port ${PORT}`)
})