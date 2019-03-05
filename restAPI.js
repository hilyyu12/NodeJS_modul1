// import body-parser
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.get('/siswa', (req, res)=>{
    res.end("ini get XI RPL 2");
});

app.post('test',(req, res)=>{
    res.end("ini get XI RPL 2");
}); 

app.listen('8080', (e)=>{
    console.log(e);
})

