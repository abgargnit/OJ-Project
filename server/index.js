const express=require('express')
const moongoose=require('mongoose')
const cors=require('cors')
const participantModel=require('./models/participant')


const app=express()
app.use(express.json())
app.use(cors())

moongoose.connect("mongodb://127.0.0.1:27017/participant");

app.post('/login',(req,res)=>{
    const {email,password}=req.body
    participantModel.findOne({email:email})
    .then(user =>{
        if(user){
            if(user.password === password) {
                res.json("Welcome")
            } else {
                res.json("Incorrect Password")
            }
        }
        else {
            res.json("Participant Not Found")
        }
    })
})

app.post('/register',(req,res)=>{
    participantModel.create(req.body)
    .then(participant=>res.json(participant))
    .catch(err=> res.json(err))
})

app.listen(3001, ()=>{
    console.log("Server is running")
})
