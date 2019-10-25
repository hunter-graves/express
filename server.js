const express = require("express");

const app = express();

app.use(express.json());


app.use((req, res, next) => {
  //All logic here applies to the endpoint
  console.log(req.originalUrl);
  next();
});


app.get('*', (req, res) => {
  return 'hello';
});


app.post('/post-test', (req,res)=>

{

  console.log(req.body);

res.send('worked');

});

app.listen(3000);

