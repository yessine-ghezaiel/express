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
  ((day === 0 || day === 6) || ( hour < 9 || hour > 17)) ?   res.sendFile(__dirname + '/public/unavailable.html') : next();
})

app.use(express.static('public'))
const hour =date.getHours()
console.log(hour)
const h =  17 < hour 
const r= hour < 9
const yoyo =r && h
console.log(h)
console.log(r)
console.log(yoyo)
// last step : listen to the port
app.listen( port ,(err)=>{
    err ? console.log(err) : console.log('welcome yessine')
})