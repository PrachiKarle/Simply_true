var express=require("express");
var mysql=require('mysql');
var util=require('util');
const app=express();

//cors option
var cors=require('cors');
app.use(cors({origin:"*"}));

//connection with sql
var connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"simply_true",
})

connection.connect((err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data);
})

//bind with promisfy->promised based exeution
var exe = util.promisify(connection.query).bind(connection);



app.get('/',(req,res)=>{
    console.log('Server is started!!!');
})

app.get('/api/products',async(req,res)=>{
    var sql=`select* from products`;
    var data=await exe(sql);
    res.send(data);
})

app.listen(8000 ,()=>{
    console.log("Server is running");
})