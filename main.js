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
app.use('/static', express.static('public'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

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


app.get('/galeria-fotos', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'galeria.html'));
})

app.get('/diario', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'diario.html'));
})


app.get('/servicios', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'servicios.html'));
})

app.get('/contacto', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'conta.html'));
})

// petición post para el formulario de contacto...

app.post('/contacto', async(req, res)=>{
    const { nombre, telefono, direccion, comuna } = req.body;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "casadecoach@gmail.com",
            pass: "xyoa cyjr awib lygg",
        },
    
        tls:{
            rejectUnauthorized: false
        }
    })

    const mailOptions = {
        from: 'casadecoach@gmail.com',
        to: 'casadecoach@gmail.com',
        subject: 'Mensaje Posible cliente',
        text: `Nombre: ${nombre}\nTeléfono: ${telefono}\nDirección: ${direccion}\nComuna: ${comuna}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email enviado con éxito');
        res.status(200).send('Mensaje enviado con éxito');

    } catch (error){
        console.error('Error al envíar el correo: ', error);
        res.status(500).send('Error al envár el mensaje');
    }
    
})


//petición para el formulario de la página servicios....

app.post('/servicios', async(req, res)=>{
    const { nombre, telefono, direccion, comuna } = req.body;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "casadecoach@gmail.com",
            pass: "xyoa cyjr awib lygg",
        },
    
        tls:{
            rejectUnauthorized: false
        }
    })

    const mailOptions = {
        from: 'casadecoach@gmail.com',
        to: 'casadecoach@gmail.com',
        subject: 'Mensaje Posible cliente',
        text: `Nombre: ${nombre}\nTeléfono: ${telefono}\nDirección: ${direccion}\nComuna: ${comuna}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email enviado con éxito');
        res.status(200).send('Mensaje enviado con éxito');

    } catch (error){
        console.error('Error al envíar el correo: ', error);
        res.status(500).send('Error al envár el mensaje');
    }
    
})

