const express = require('express');
const app = express();
const port = 3000;

app.listen(port, function() {
})
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.render('index');
})

app.get('/cars', function(request, response) {
    response.render('cars');
})

app.get('/cats', function(request, response) {
    response.render('cats');
})

app.get('/cars/new', function(request, response) {
    response.render('form');
})

app.get('/funny_face_hobbes', function(request, response) {
    var data = {
        img: "cat1.jpeg",
        name: "Clowning Hobbes",
        activity: "Making a funny face",
        quotes: ["Reality continues to ruin my life.",
                "Sometimes when I'm talking, my words can't keep up with my thoughts. \
                I wonder why we think faster than we speak. Probably so we can think  \
                twice.",
                "You know, Hobbes, some days even my lucky rocket ship underpants don't help." ]
    };
    response.render('details', {data: data});
})

app.get('/dancing_hobbes', function(request, response) {
    var data = {
        img: "cat2.jpg",
        name: "Dancing Hobbes",
        activity: "Dancing",
        quotes: ["I'm killing time while I wait for life to shower me with meaning and happiness.",
    "You know, sometimes kids get bad grades in school because the class moves too slow for them.  \
        Einstein got D's in school. Well guess what, I get F's!!!",
    "'I'm a misunderstood genius.' \
    'What's misunderstood?' \
    'Nobody thinks I'm a genius.'"]
    }
    response.render('details', {data: data});
})

app.get('/eating_hobbes', function(request, response) {
    var data = {
        img: "cat3.png",
        name: "Eating Hobbes",
        activity: "Eating a tuna sandwich",
        quotes: ["When life gives you lemons, chunk it right back.",
    "You know, sometimes the world seems like a pretty mean place.' \
    'That's why animals are so soft and huggy'"]
    }
    response.render('details', {data: data});
})

app.get('/zombie_hobbes', function(request, response) {
    var data = {
        img: "cat4.jpg",
        name: "Zombie Hobbes",
        activity: "With calvin pretending to be a zombie",
        quotes: ["I'm not dumb. I just have a command of thoroughly useless information.",
    "Life is like topography, Hobbes. There are summits of happiness and success, flat stretches \
    of boring routine and valleys of frustration and failure."]
    }
    response.render('details', {data: data});
})