const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost/ContactListDB")
.then(()=>{
    console.log("MongoDB Connected Successfully");
}).catch((err)=>{
    console.log(err);
});


const contactschema= new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    ph:{
        type: Number,
        required: true
    },
});


const contact=mongoose.model('contact',contactschema);
module.exports=contact;