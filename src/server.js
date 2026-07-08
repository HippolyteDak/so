const express = require("express");
const cors = require("cors");
require("dotenv").config();
const defenseRoutes = require("./routes/defenses");
const playerRoutes = require("./routes/player");




const app = express();


app.use(cors());

app.use(express.json());

app.use(
"/players",
playerRoutes
);

app.use(
    "/defenses",
    defenseRoutes
);



app.get(
    "/",
    (req,res)=>{

        res.json({
            status:"Stick Outlaw server online"
        });

    }
);



const PORT =
    process.env.PORT || 3000;



app.listen(
    PORT,
    ()=>{

        console.log(
          "Server running on port "
          + PORT
        );

    }
);