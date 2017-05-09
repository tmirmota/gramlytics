const express = require('express');


// Create the app
const app = express('');

app.use(express.static('public'));

app.listen(3000, function() {
  console.log('Exrpess server is up on port 3000');
});
np
