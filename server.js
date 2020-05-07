const express = require('express')
const app = express()

app.use(express.static('./public'));
app.get('/', (req, res) => {
  console.log('request recieved');
  res.setHeader('statusCode', 200);
  res.sendFile(`${__dirname}/public/index.html`)
});

app.listen(10001, (req,res) => {
  console.log('app listening on port 10001');
});
