const express = require('express')
const app = express()
const port = 8000

app.get("/health", (req, res) =>  {
  res.send({ success: true, message: "It is working" });
});

app.get('/', (req, res) =>res.json([
  {

name:'Joe',
email:'joe@gmail.com'

},
{

  name:'Alice',
  email:'alice@gmail.com'
  
  },
  {

    name:'John',
    email:'j@gmail.com'
    
    } 

]))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

