// Student details
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(bodyParser.json());

// model and schema and connection
mongoose.connect('mongodb://localhost:27017/school',{})
.then(() => {console.log("Connected to mongo successful!")})
.catch(err => {console.log("Error connecting")
});


const studentSchema = new mongoose.Schema({
    name: String,
    class: Number,
    rollNumber: Number,
    subjects: [String]
});

const studentModel = mongoose.model('Student', studentSchema);

// const students = new studentModel;
app.get("student/:rollno", async(req, res) =>{
    let {no} = req.params;
    try{
        let s = await students.findOne({no});
    // res.writeHead(200, {"content-type": "text/html"});
    if(s){
        res.json(s);
    }
        else{
            res.status(400).json({message: "student not found"});
        }
    }
    catch(error){
        res.status(500).json({message: "Internal Server Error"});
    }
    
});

let port = 5000;
app.listen(port, () =>{
    console.log(`Server is running on http://localhost:${port}`)
});