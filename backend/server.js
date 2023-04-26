require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectdb = require("./config/connectdb");
const { default: mongoose } = require("mongoose");
const corsOptions = require("./config/corsOptions");
const path = require('path')
const cookieParser = require('cookie-parser')
PORT = process.env.PORT;
connectdb();
app.use(cors(corsOptions));
app.use(express.json())
app.use(cookieParser())
app.use(express.static(path.join(__dirname,'public')))
app.use('/',require('./routes/root'))
app.use('/api',require('./routes/authRoutes'))
app.all('*',(req,res)=>{
  res.status(404)
  if(req.accepts('html')){
    res.sendFile(path.join(__dirname,'views','404.html'))
  }
})

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
