require('dotenv').config();
let express = require('express');
let app = express();
const PORT = process.env.PORT;
const sequelize = require('./db');
const customer = require('./controllers/customerController');


// let customer = require('./controllers/customerController');
sequelize.sync();


// app.use(require("./middleware/headers"));
app.use(express.json());


app.use('/customer', customer);
// app.use(require('./middleware/validate-session'));

app.get('*', (req, res) => {
    res.status(404).send('nothing');
})

app.use('/test', function(req, res){
    res.send('This is a message from the endpoint on the server')
})

app.listen(3001, function () {
    console.log("App is listening on port 3001");
  })