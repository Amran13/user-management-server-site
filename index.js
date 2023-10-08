const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors())
app.use(express.json())

const users = [
    {id : 1, name : 'amran_hossain', email: 'amranhossainkchy@gmail.com'},
    {id : 2, name : 'rahul_hasan', email: 'amshyhoneyy@gmail.com'},
    {id : 3, name : 'sakib_alhasan', email: 'misterhacker@gmail.com'},
]

app.get('/', (req, res)=> {
    res.send('Server is running')
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser)
})

app.listen(port, () => {
    console.log('Server is running on port ', port)
})