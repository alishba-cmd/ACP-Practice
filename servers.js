const express = require('express');
const app = express();
const port = 3000;

app.get('/greet/:name', (req, res)=>{
    res.send("hello")
})

app.get('/greet/:slug', (req, res)=>{
    res.send(`hello ${req.params.slug}`)
})
app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
