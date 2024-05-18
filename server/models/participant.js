const moongoose=require('mongoose')

const participantschema=new moongoose.Schema({
    name: String,
    email: String,
    password: String
})

const participantModel=moongoose.model("participant",participantschema)

module.exports=participantModel