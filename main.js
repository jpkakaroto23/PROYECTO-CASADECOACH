// variables

const express = require('express');
const app = express();
const path = require('path');
const nodemailer = require('nodemailer');


//puerto

let PUERTO = process.env.Port||5200;

app.listen(PUERTO, ()=>{
    console.log(`CORRIENDO EN EL PUERTO ENCONTRADO ${PUERTO}`);
})

app.use('/recursos', express.static(__dirname+'/public'));


//peticiones
app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'index.html'));
})


app.get('/decoach', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'decoach.html'));
})


app.get('/decoalzheimer',(req, res)=>{
    res.sendFile(path.resolve(__dirname, 'decoalzh.html'));
})

app.get('/decoemocional', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'decoemocional.html'));
})

app.get('/decoautismo', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'decoautismo.html'));
})

app.get('/deco-nosotros', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'nosotros.html'));
})

app.get('/tienda-online', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'tiendaonline.html'));
})


app.get('/galeria-fotos', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'galeria.html'));
})

app.get('/diario', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'diario.html'));
})

app.get('/contacto', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'contacto.html'));
})

app.get('/servicios', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'servicios.html'));
})