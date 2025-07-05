const express = require ("express");
const app = express();
const port =8000;
const cors = require ("cors");
// const {Pool}= require("pg");
// require('dotenv').config();

// middleware to allow cross-origin requests
app.use(cors());

// middleware to parse Json request bodies by making them avaiable in req.body formats
app.use(express.json());

//postgresql setup
// const pool = new Pool({

//     user: "postgres",
//     host: "localhost",
//     database: "testdb",
//     password: process.env.DB_PASSWORD, // Use environment variable for password
//     port: 5432,
// });

// pool.connect().then(()=>{
//     console.log("Connected to PostgreSQL database");
// }).catch((err)=>{
//     console.error("Error connecting to PostgreSQL database:", err);
// });

app.post("https://test-1-qt6p.onrender.com/click", async (req,res)=>{

    const {count} = req.body;
     console.log("button clicked , count:", count);

    try{

        // await pool.query(
        //     " INSERT INTO  clicks (count) VALUES ($1)",
        //     [count]
        // );

        res.json({message: "button clicked successfully"+ count +" time"});
    }catch(err){
        console.error("Error handling click:", err);
        res.status(500).json({message: "Internal server error"});
    }

});

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})

