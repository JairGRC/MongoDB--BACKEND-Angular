const express= require('express')
const conectarDB=require('./config/db')
const cors=require('cors')
//Creamos el servidor 
const app=express()
// conectar a la bd
conectarDB()

app.use(cors())

app.use(express.json())

app.use('/api/productos',require('./routes/producto'))
// defeninos ruta principal

app.listen(4000,()=>{
    console.log('el servidor esta que corre bien')
})