//require express
const express = require("express");
//require body-parser
const bodyParser = require("body-parser");
//setup express
const app = express();
//body-parser works with express
app.use(bodyParser.urlencoded({
  extended: true
}));
/*get and post method for index.html*/

//creating root route i.e. '/'

//__dirname/gives current working directory
// app.get("/", function(req, res) {
//   res.sendFile(__dirname + "/index.html");
// });

//handling post request

// app.post("/", function(req, res) {
//   //req.body.num1 is a string :: we need to convert it into a number
//   var n1 = Number(req.body.num1);
//   var n2 = Number(req.body.num2);
//   var result = n1 + n2;
//   res.send("result is:" + result);
// });

/*get and post method for index.html ended*/

/*creating get and post method for bmiCalculator.html*/

app.get("/",function(req,res){
  res.sendFile(__dirname+"/bmiCalculator.html");
});
app.post("/",function(req,res){
  var w=Number(req.body.weight);
  var h=Number(req.body.height);
  var bmi=w/(h*h);
  res.send("your BMI is "+bmi);
})

/*get and post method for bmiCalculator.html ended*/

//creating contact route
app.get("/contact", function() {
  res.send("it's contact page!!");
});
//spining server on port 3000
//with anonymous callback function
app.listen(2000, function() {
  console.log("listening to port 2000");
});
