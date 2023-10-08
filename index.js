const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors())


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

app.listen(port, () => {
    console.log('Server is running on port ', port)
})