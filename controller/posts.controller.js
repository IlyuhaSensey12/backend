const pool = require("../database/index")
const postsController = {

    getAll: async (req, res) => {
        try {
            const [rows, fields] = await pool.query("SELECT * FROM books")
            res.json({
                data: rows
                })
        } catch(error) {
            console.log(error)
            req.json({
                state: "error"
            })
        }
    },

    getById: async (req, res) => {
        try {
            const { id } = req.params
            const [rows, fields] = await pool.query("SELECT * FROM books WHERE id = ?", [id])
            res.json({
                data: rows
            })
        } catch(error){
            console.log(error)
            req.json({
                state: "error"
            })
        }
    },

    create: async (req, res) => {
        try {
            const { title, desc } = req.body
            const sql = "INSERT INTO books (title, `desc`) VALUES (?, ?)"
            const [rows, fields] = await pool.query(sql, [title, desc])
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                state: "error"
            })
        }
    },

    update: async (req, res) => {
        try {
            const { title, desc } = req.body
            const { id } = req.params
            const sql = "UPDATE books SET title = ?, `desc` = ? WHERE id = ?";
            const [rows, fields] = await pool.query(sql, [title, desc , id])
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                state: "error"
            })
        }
    },

    delete: async (req, res) => {
        try { 
            const { id } = req.params
            const [rows, fields] = await pool.query("DELETE from books WHERE id = ?", [id])
            res.json({
                data: rows
            })
        }
        catch (error) {
            console.log(error)
            res.json({
                state: "error"
            })
        }
    }
}

module.exports = postsController