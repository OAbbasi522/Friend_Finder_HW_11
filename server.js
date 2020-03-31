var express = require("express")
var app = express()

var PORT = proces.env.PORT || 8080
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
require("./app/routing/apiroutes")
require("./app/routing/htmlroutes")
app.listen(PORT, function(){
    console.log("app listening on PORT: " + PORT)
})
