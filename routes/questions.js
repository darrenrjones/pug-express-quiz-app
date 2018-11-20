const express = require('express');
const router = express.Router();

const questions = require('../data/questions.json');

router.get('/', (req, res) => {
  const randomQ = Math.floor(Math.random() * questions.length);
  res.redirect(`/questions/${randomQ}`);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const answerOptionsArr = questions[id].options;

  const templateData = { id, answerOptionsArr };

  if (id > questions.length) {
    templateData.q = 'no question found'
  } else {
    templateData.q = questions[id].question;
  }
  console.log(templateData);

  res.render('question', templateData);
});

router.post('submitAnswer', (req, res) => {
  console.log(req.body);
  
});

module.exports = router;