
const express =require('express')
const cors =require('cors')
const bodyParser =require('body-parser')
const userRouter =require('./router/UserRouter')
const connection =require('./mongodb/db')
const userModel = require('./model/UserModel')

const app =express()
app.use(express.json());
app.use(cors())
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
 app.use('/',userRouter);

// app.post('/create',(req,res)=>{
//     const user = new userModel(req.body);
    
//     user.save().then(newuser => res.json(newuser))
// })
// app.get('/getbyid/:id',(req,res) => {
//     userModel.findById(req.params.id)
//     .then(user => res.json(user))
// })

// app.get('/getall',(req,res) =>{
//     userModel.find().then(user => res.json(user))
    
// })

// app.put('/update/:id',(req,res) =>{
//      userModel.findByIdAndUpdate(req.params.id ,req.body,{new:true})
//     .then(user => res.json(user))
    
// })
// app.delete('/remove/:id',(req,res) =>{
//     userModel.findByIdAndDelete(req.params.id)
//    .then(user => res.json(user))
// })

const port=3000
connection();

app.listen(port,console.log("server is run "+port))