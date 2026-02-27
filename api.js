
const express = require('express');
const postsRouter = require('./routers/posts');
const app =express()
const checkTime= require('./middlewares/checkTime')
const port =3000


app.use(express.static('public'));
app.use(express.json());
app.use('/posts', postsRouter);


app.get('/', (req,res)=>{
 res.send("ciao")
})
app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})