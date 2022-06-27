const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')

app.use(cors());
app.use(express.json());

app.get('/', (req, res) =>{
    res.send('Look Bro! I can code node now!!!')
});
const users = [
    {id: 1, name: "Ranjit K  Mandal", email: "ranjit@gmail.com"},
    {id: 2, name: "Rinku  Mandal", email: "rinku@gmail.com"},
    {id: 3, name: "Biswajit Mandal", email: "biswa@gmail.com"},
    {id: 4, name: "Rita Kumar", email: "ria@gmail.com"},
    {id: 5, name: "Arun Kumar", email: "arun@gmail.com"},
    {id: 6, name: "Jamal Mandal", email: "jamal@gmail.com"},
    {id: 7, name: "Kuddus  Mandal", email: "kuddus@gmail.com"}
]

// create user api
app.get('/users', (req, res)=>{
    res.send(users)
});
// parameter
app.get('/user/:id', (req, res)=>{
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find( u => u.id === id );
    res.send(user);
});

app.post('/user', (req, res)=>{
    // req data আসে res data পাঠায়
    console.log("request", req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
});

app.listen(port, ()=>{
    console.log('Listening to port', port)
});