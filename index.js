//create server
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.get(
    '/siswa/:nama', (request, response)=>{
        let namasiswa = request.params.nama;
        response.end("menampilkan nama siswa"+ namasiswa);
    }
);


app.post('/siswa',(request,response)=>{
    let namasiswa = request.body.name;
    let alamat = request.body.adress;
    response.end('menampilkan siswa baru '+ namasiswa +', yang beralamat di '+alamat);
});

app.delete('/siswa/delete/:id', (request, response)=>{
    let id = request.params.id;
    let namasiswa =  request.body.nama;
    response.end('id '+ id +' telah dihapus, dengan nama: '+namasiswa);
});

app.put('/siswa/put/:id', (request, response)=>{
    let id = request.params.id;
    let namasiswa = request.body.nama;
    let alamat = request.body.alamat;
    response.end('siswa dengan id: '+id+' telah diupdate')
});

app.listen('8080', (e)=>{
    console.log(e);
})
