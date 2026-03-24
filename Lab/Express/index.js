const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/About', (req, res) => {
  res.send('Hello about!')
})

app.get('/Contact', (req, res) => {
  res.send('Hello World contact!')
})

app.get('/Project', (req, res) => {
  res.send('Hello World project!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


/*const express = require('express')
const app = express()
const port = 3000

// Routing is deciding what response send to different url
app.get('/', (req, res) => {
  const time = new Date();

  res.json({
    message: "Current Server Time",
    time: time.toString(),
    iso: time.toISOString()
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})*/


//Middleware is function that written before send the response - check data, block info, authenticate user
// app.use(req,res,next=> {
//  console.log("Request recive", new Date())
//  })
// next - pass control to the next function