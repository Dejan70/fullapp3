const express = require("express");
const app = express();



app.set("view engine","ejs");
app.get('/',(req,res)=>{
    res.send("Ćao Mimi, kako si za mace?");
}
)

//app.use('/',routes);
app.listen(80, function (){
  
    console.log('Listening to port 80*')
})