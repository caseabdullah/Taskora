const express=require("express");
const authentication=require('./routes/auth.route')
const dashboard=require('./routes/dashboard.route')
const cookieParser=require('cookie-parser');
const cors=require('cors');

const app=express();

app.use(express.json());

app.use(cors({
    origin: "https://taskora-todo.netlify.app/", // Your React frontend
    credentials: true
}));

app.use(cookieParser());


app.use('/auth',authentication);
app.use('/dashboard',dashboard);

module.exports=app;