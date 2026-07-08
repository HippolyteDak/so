const express = require("express");
const router = express.Router();

const { v4: uuidv4 } = require("uuid");

const db = require("../database");



router.post("/", async(req,res)=>{


const {
 username
}=req.body;



const uuid =
uuidv4();



const result =
await db.query(

`
INSERT INTO users
(uuid,username)

VALUES($1,$2)

RETURNING uuid,username

`,

[
uuid,
username
]

);



res.json(
 result.rows[0]
);



});



module.exports = router;