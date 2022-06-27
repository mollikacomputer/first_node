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
    {id: 1, name: "Ranjit K  Mandal", age: 43, phone: "01914-924473"},
    {id: 2, name: "Rinku  Mandal", age: 40, phone: "01914-199999"},
    {id: 3, name: "Biswajit Mandal", age: 23, phone: "01914-000000"},
    {id: 4, name: "Rita Kumar", age: 33, phone: "01914-111111"},
    {id: 5, name: "Arun Kumar", age: 22, phone: "01914-222222"},
    {id: 6, name: "Jamal Mandal", age: 19, phone: "01914-333333"},
    {id: 7, name: "Kuddus  Mandal", age: 20, phone: "01914-444444"}
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
    // req data server থেকে  আসে; res data server এ পাঠায়;
    console.log("request", req.body);
    res.send('Post method success');
});

app.listen(port, ()=>{
    console.log('Listening to port', port)
});
