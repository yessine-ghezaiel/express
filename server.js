// etape 1 de creation de notre server import de express
const express=require('express')
// etape 2  put our express method to a const
const app=express()
//create our port
const port=5000;

const date = new Date( Date.now());
app.get('/stylesheet.css', (req, res) => {
  res.sendFile(__dirname + '/public/stylesheet.css');
});

app.use(function (req,res,next) {
    const day =date.getDay()
    const hour =date.getHours(); 
  ((5 < day && day < 1) && (17 < hour  && hour < 9 )  === true ) ? res.sendFile(__dirname + '/public/unavailable.html') : next();
})
app.use(express.static('public'))
// last step : listen to the port
app.listen( port ,(err)=>{
    err ? console.log(err) : console.log('welcome yessine')
})