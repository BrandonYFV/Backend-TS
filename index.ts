

const express = require("express")
import router from './src/routes';

const app = express();
const example = function(){
    console.log("Estoy a la escucha-BYFV")
}

router(app);

app.listen(
    9000,
    example
)