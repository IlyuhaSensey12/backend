const express = require("express")
const app = express()

require('dotenv').config()

const postsRouter = require('./routes/posts.router')

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use("/api/v1/posts", postsRouter)


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("SERVER running")
})

// const db = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'12345678',
//     database:'test'
// });

// app.get("/", (req,res)=>{
//     res.json("hello this is the backend")
// })

// app.get("/books", (req,res)=>{
//     const q = "SELECT * FROM test.books"
//     db.query(q,(err,data)=>{
//         if(err) return res.json(err)
//         return res.json(data)
//     })
// })

// app.post("/books", (req,res)=>{
//     const q = "INSERT INTO books (`title`, `desc`, )"
// })

// app.listen(8800, ()=>{
//     console.log("connected to backend!")
// })