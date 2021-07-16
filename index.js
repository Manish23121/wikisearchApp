const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.urlencoded());

app.use(express.static('./js'));
app.use(express.static('./assets'));


// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/',function(req,res){
    return res.render('index');
});
app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
