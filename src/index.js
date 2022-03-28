const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/routes.js');
const { default: mongoose} = require("mongoose");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://group-project:hI0Hyzj3TPK3cVYp@project.xqpst.mongodb.net/group09DB",{
    useNewUrlParser:true
})
.then( () => console.log("mongodb is connected"))
.catch(err => console.log(err))

app.use('/', route); 

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});