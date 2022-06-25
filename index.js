const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.get('/', (req, res) =>{
    res.send('Look Bro! I can code node now!!!')
});

// create user api
app.get('/users', (req, res)=>{
    res.send({id: 1, name: "Ranjit Kumar Mandal", age: 43, profession: "Business"})
});

app.listen(port, ()=>{
    console.log('Listening to port', port)
});