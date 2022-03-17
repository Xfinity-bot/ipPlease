const requestIp =require('request-ip');
var geoip = require('geoip-lite')
const express =require('express')
const app =express()
const lookup = require('country-code-lookup')
app.set('view engine','ejs')

app.use(requestIp.mw())


app.get('/',(req,res)=>{
    const ip= req.clientIp
    //res.send(ip);
    
    const geo = geoip.lookup(ip)
    const country=lookup.byIso(geo.country)
    const flaglink="https://purecatamphetamine.github.io/country-flag-icons/3x2/"+geo.country+".svg"
    
    //res.send(geo)
    res.render('index',{ip:ip,geo:geo,country:country,flaglink:flaglink});
    
   
});


app.listen(3001,()=>{
    console.log()
})