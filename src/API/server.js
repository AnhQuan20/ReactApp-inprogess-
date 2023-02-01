
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require("mongoose");
const url="mongodb+srv://boynick147:boynick147@cluster0.koxprdo.mongodb.net/?retryWrites=true&w=majority";
const personsRoute = require("./persons.route")

mongoose.Promise = global.Promise;
mongoose.set("strictQuery",true);
mongoose.connect(url,{ useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
  );

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/persons', personsRoute);

app.get("/",function(req,res,next){
    res.send("Hello Node")
})

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});