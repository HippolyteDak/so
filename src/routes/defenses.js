const express = require("express");

const router = express.Router();


const db =
require("../database");





// sauvegarder une défense
router.post(
"/",
async(req,res)=>{

  try {

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

ON CONFLICT(player_id)

DO UPDATE SET

duration = EXCLUDED.duration,

actions = EXCLUDED.actions

      `,

      [
        playerId,
        duration,
        JSON.stringify(actions)
      ]

    );


    res.json({

      success:true

    });


  }
  catch(error){

    console.log(error);


    res.status(500).json({

      error:error.message

    });

  }


});




// récupérer un adversaire hasard
router.get(
"/random",
async(req,res)=>{


try {


const result =
await db.query(

`
SELECT *
FROM defenses
ORDER BY RANDOM()
LIMIT 1

`

);



if(result.rows.length === 0){

  return res.json(null);

}



res.json(
 result.rows[0]
);



}
catch(error){


console.log(error);


res.status(500).json({

error:error.message

});


}


router.get(
"/player/:uuid",
async(req,res)=>{


const uuid =
req.params.uuid;



const result =
await db.query(

`
SELECT *
FROM defenses
WHERE player_id=$1
LIMIT 1
`,

[
uuid
]

);



if(result.rows.length === 0){

 return res.status(404).json({
   message:"no defense"
 });

}



res.json(
 result.rows[0]
);


});

});



module.exports = router;
