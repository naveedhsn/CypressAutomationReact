const fs = require('fs');
const express = require('express');
const http = require('http');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    console.log("Backend Request Path: /")
    res.send("Backend API");
})


app.post('/user', (req, res) => {
    console.log("Creating New User")
    console.log("Backend Request Path: /user")
    const {username, name, password, favouriteFruit, favouriteMovie, favouriteNumber} = req.body;
    console.log({username, name, password, favouriteNumber, favouriteMovie, favouriteFruit});

    const accounts = fs.readFileSync('./storage/account.json', 'utf-8');

    console.log(accounts);

    const data = JSON.parse(accounts);

    const user = {
        name,
        password,
        favouriteFruit,
        favouriteMovie,
        favouriteNumber,
    }

    if(!data[username]) data[username] = user;
    else res.send("Account Already Exists");

    fs.writeFileSync('./storage/account.json', JSON.stringify(data, 2, 4), 'utf-8', res.send("Account Created"));
})


app.delete('/user', (req, res) => {
    console.log(`Deleting User`);
    const username = req.param('username');

    console.log(`Backend Request Path: /deleteUser?username=${username}`);
    const accounts = fs.readFileSync('./storage/account.json', 'utf-8');
    const data = JSON.parse(accounts);

    if(data[username]) delete data[username];
    else res.send("Account Does Not Exist");

    console.log(data);
    fs.writeFileSync('./storage/account.json', JSON.stringify(data, 2, 4), 'utf-8', res.send("Account Deleted"));
})

app.put('/user', (req, res) => {
    console.log("Updating User");
    const username = req.param('username');
    console.log(`Backend Request Path: /deleteUser?username=${username}`);
    const accounts = fs.readFileSync('./storage/account.json', 'utf-8');

    const {name, password, favouriteFruit, favouriteMovie, favouriteNumber} = req.body;
    console.log({username, name, password, favouriteNumber, favouriteMovie, favouriteFruit});

    const data = JSON.parse(accounts);

    const user = {
        name,
        password,
        favouriteFruit,
        favouriteNumber,
    }

    if(data[username]) data[username] = user;
    else res.send("Account Does NOT Exist");

    console.log(data);

    fs.writeFileSync('./storage/account.json', JSON.stringify(data, 2, 4), 'utf-8', res.send("Account Updated"));
})

http.createServer(app).listen(9999, () => {
    console.log("Application listening on PORT 9999");
});


