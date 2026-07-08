const express = require("express");

const router = express.Router();


const db =
require("../database");





// sauvegarder une défense

router.post(
"/",
async(req,res)=>{


    const {
        playerId,
        duration,
        actions

    } = req.body;



    await db.query(

`
INSERT INTO defenses
(player_id,duration,actions)

VALUES($1,$2,$3)

`,

[
playerId,
duration,
actions
]

);



res.json({

success:true

});


});





// récupérer un adversaire hasard

router.get(
"/random",
async(req,res)=>{


const result =
await db.query(

`
SELECT *
FROM defenses
ORDER BY RANDOM()
LIMIT 1

`

);



res.json(

result.rows[0]

);


});



module.exports = router;