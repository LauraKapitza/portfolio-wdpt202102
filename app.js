const { urlencoded } = require('express');
const express = require('express');
const hbs = require('hbs');
const data = require('./data.json')

const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views'); //par default c'est toujours views
app.use(express.static(__dirname + '/public'));

//routes
app.get('/', (req, res) => {
    res.render('index')
});

app.get('/projets', (req, res) => {
    res.render('projects', {projects: data})
});

app.get('/projects/:id', (req, res) => {
    let id = req.params.id;
    let theProject;

    // for (let i=0; i < data.length; i++) {
    //     if (data[i].id === id) {
    //         theProject = data[i]
    //         break;
    //     }
    // }
    theProject = data.find((el) => {return req.params.id === el.id;})

    res.render('project', {project: theProject})
});

//port 3000
app.listen(3000, () => {
    console.log('le serveur fonctionne bien.')
});