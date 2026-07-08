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


});



module.exports = router;