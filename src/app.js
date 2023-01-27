import express from 'express'
import { pool } from './db.js'
import {PORT} from './config.js'

const app = express()
//get productos
app.get('/products', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM tbproductos')
  res.json(rows)
})
// get Reportes
app.get('/reports',async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM tbrevisar')
  res.json(rows)
})
// get un producto
app.get('/:id', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM tbproductos where cCodPrd = ?',[id])
  res.json(rows)
})


app.get('/create', async (req, res) => {
  const result = await pool.query('INSERT INTO users(name) VALUES ("John")')
  res.json(result)
})

app.listen(PORT)
console.log('Server on port', PORT)
