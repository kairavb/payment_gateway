const express = require('express')
const app = express();
const port = app.port || 4000
// const mongoose = require('./db/conn')
// const SignupModel = require('./model/sig?nup')
app.set('view engine', 'hbs')
// app.use(express.json())
// app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.status(200).send(`<h1>Server is running</h1>`)
})

app.get('/cat',(req,res)=>{
    res.status(200).send(`<h1>Cat is running</h1>`)
})

app.get('/signup',(req,res)=>{
    res.render('signup')
})

app.post('/signup', async (req, res)=>{
    const SignupView = new SignupModel({
        usrName:req.body.txtusername,
        usrEmail:req.body.txtemail
    })
    const result = await SignupView.save()
    console.log(result)
   // console.log('button clicked')
    //console.log(req.body)
    res.redirect('/');
})

app.get('/api/v1/getusers', async (req, res)=>{
    const user = await SignupModel.find()
    res.status(200).end(JSON.stringify(user))
})

app.listen(port, ()=>{
    console.log(`Server started at port${port}`)
})