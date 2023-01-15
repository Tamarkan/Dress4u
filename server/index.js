const express = require('express');
const app = express();
const cors=require('cors');
const port =8000;
app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(port, function () {
  console.log(`listening on port ${port}!`);
});