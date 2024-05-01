//1)import json-server library
const jsonServer = require("json-server")

//2) create server using json-server library using create method
const libraryServer = jsonServer.create()

//3) create path for db.json file - router()
const router = jsonServer.router('db.json')

//4) create a middleware to convert json to js
const middleware = jsonServer.defaults()

//server should use router and middleware - use()
libraryServer.use(middleware)
libraryServer.use(router)

//set port to server
const PORT = 4000 || process.env

//run server
libraryServer.listen(PORT,()=>{
    console.log(`Server is running @  port ${PORT}`);
})