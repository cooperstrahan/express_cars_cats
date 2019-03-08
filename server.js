const express = require('express');
const app = express();
const port = 8000;
// app.get('/', function(request, response) {
// })
app.listen(port, function() {
})
app.use(express.static(__dirname + "/static"));