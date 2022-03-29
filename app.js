const express = require('express');
const app = express();
const puerto = 4000;

//app.use(express.static(__dirname + '/public'));
//app.use(express.static(path.join(__dirname, '/public')));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')

app.get('/', (req, res) => {
    //res.send('Hola Mundo');
    res.render('index', { titulo: 'Lantilla de Inicio' })
})

app.get('/prueba', (req, res) => {
    //res.send(__dirname);
    res.sendFile(__dirname + '/public/')
})

app.listen(puerto, () => {
    console.log('Escuchando: ' + puerto);
})