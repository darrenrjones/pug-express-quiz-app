const express = require('express');

const app = express();

app.use('/static', express.static('public'));


app.set('view engine', 'pug'); //express setting what view engine to use]

const mainRoutes = require('./routes');
const questionsRoutes = require('./routes/questions');

app.use(mainRoutes);
app.use('/questions', questionsRoutes);

app.listen(8888, () => {
  console.log('App listening on 8888');
});