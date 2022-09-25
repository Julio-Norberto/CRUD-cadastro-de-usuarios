const express = require('express')
const pool = require('./db/conn')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.post('/register', (req, res) => {
    const name = req.body.name
    const number = req.body.number
    const occupation = req.body.occupation

    const query = `INSERT INTO users (name, number, occupation) VALUES ('${name}', '${number}', '${occupation}')`

    pool.query(query, function(err) {
        if(err) {
            console.log(err)
        }

        console.log('sucesso')
    })

})

app.get('/users', (req, res) => {
    const query = 'SELECT * FROM users'

    pool.query(query, function(err, result) {
        if(err) {
            console.log(err)
            return
        }

        res.send(result)
    })
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id

    const query = `SELECT * FROM users WHERE id = ${id}`

    pool.query(query, function(err, data) {
        if(err) {
            console.log(err)
            return
        }

        res.send(data)
    })
})

app.get('/users/delete/:id', (req, res) => {
    const id = req.params.id

    const query = `DELETE FROM users WHERE id = ${id}`

    pool.query(query, function(err) {
        if(err) {
            console.log(err)
            return
        }

        console.log('usuário deletado')
    })
})

app.post('/users/edit/:id', (req, res) => {
    const id = req.body.id
    const name = req.body.name
    const number = req.body.number
    const occupation = req.body.occupation

    const query = `UPDATE users SET name = '${name}', number = '${number}', occupation = '${occupation}' WHERE id = ${id}`

    pool.query(query, function(err) {
        if(err) {
            console.log(err)
        }

        console.log('atualizado com sucesso')
    })
})

app.listen(3001, () => {
    console.log('Servidor rodando...')
})