const express=require('express');
const path=require('path');
const port=8000;


const app=express();
// Exspresss
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

// Middleware
app.use(express.urlencoded());

//Bootstrap
app.use('/css',express.static(path.join(__dirname,'node_modules','bootstrap','dist','css')));
app.use('/js',express.static(path.join(__dirname,'node_modules','bootstrap','dist','js')));

// Database
const Collection=require('./models/contact');


// Default List
const contactlist=[
    {
        Name:"Indranil Hazra",
        ph:8436423150
    },
    {
        Name:'John Doe',
        ph:8663339444
    },
    {
        Name:'Sita Dubey',
        ph:9774365240
    },
    {
        Name:'Gandes Dev',
        ph:7797584512
    }
]

app.get('/',(req,res)=>{
    return res.render('home',{
        contact:contactlist
    });
});


app.post('/Contact',(req,res)=>{
    console.log(req.body);
    contactlist.push(req.body);

    const contact={
        name: req.body.Name,
        ph: req.body.ph,
    }
    
    Collection.insertMany([contact]);

    return res.redirect('/');
})


app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(`Server is running on port:${port}`);
    }
});