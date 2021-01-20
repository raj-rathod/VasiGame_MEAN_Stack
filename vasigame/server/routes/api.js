const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Player = require('../models/player');
const fs = require('fs');


//mongoDB connection...
const url = "mongodb://localhost:27017/test";
mongoose.connect(url, {useUnifiedTopology: true,useNewUrlParser: true }, function(err){
    if(err){
        console.error(err);
    }else{
        console.log("Mongodb connected ...successfuly");
    }
});
mongoose.Promise = global.Promise;

//testing purpose..
router.get('/players', async function(req, res){
    console.log("Players Details");
    const result= await Player.find({ });
    try{
        res.json(result);
    }catch(err){
        console.log(err);
    }
    
});

// game file load

router.get('/game',(req, res) => {
    res.writeHead(200, {"content-type" : "text/html"});
    fs.createReadStream("buzoni/buzoni.html").pipe(res);
    buzoniGame();
  });



/// post data from the postman...

router.post('/player', async function(req, res){
   const player = new Player({
         name : req.body.name,
         city : req.body.city,
         country : req.body.country,
         Rank : req.body.Rank
   });
   try{
       const result = await player.save();
       res.json(result);
   }catch(err){
       console.log(err);
   }
});

/// UPDATE data ....

//Buzoni Game

function buzoniGame(){
    router.get("/Build/UnityLoader.js", (req,res) =>{
        res.writeHead(200, {"content-type" : "text/JavaScript"});
        console.log("buzoni/Build/UnityLoader.js");
        fs.createReadStream("buzoni/Build/UnityLoader.js").pipe(res);
    });

    router.get("/Build/apk.json", (req,res) =>{
        res.writeHead(200, {"content-type" : "text/json"});
        console.log("buzoni/Build/apk.json");
        fs.createReadStream("buzoni/Build/apk.json").pipe(res);
    });

    router.get("/Build/apk.data.unityweb", (req,res) =>{
        res.writeHead(200, {"content-type" : "text/data/unityweb"});
        console.log("buzoni/Build/apk.data.unityweb");
        fs.createReadStream("buzoni/Build/apk.data.unityweb").pipe(res);
    });

    router.get("/Build/apk.wasm.code.unityweb", (req,res) =>{
        res.writeHead(200, {"content-type" : "text/wasm/code/unityweb"});
        console.log("buzoni/Build/apk.wasm.code.unityweb");
        fs.createReadStream("buzoni/Build/apk.wasm.code.unityweb").pipe(res);
    });

    router.get("/Build/apk.wasm.framework.unityweb", (req,res) =>{
        res.writeHead(200, {"content-type" : "text/wasm/framework/unityweb"});
        console.log("buzoni/Build/apk.wasm.framework.unityweb");
        fs.createReadStream("buzoni/Build/apk.wasm.framework.unityweb").pipe(res);
    });

    router.get("/TempLateData/UnityProgress.js", (req,res) =>{
        res.writeHead(200, {"content-type" : "text/JavaScript"});
        console.log("UnityProgress.js");
        fs.createReadStream("buzoni/TemplateData/UnityProgress.js").pipe(res);
    });

    router.get("/TempLateData/style.css", (req,res) =>{
        res.writeHead(200, {"content-type" : "text/css"});
        console.log("Style.css");
        fs.createReadStream("buzoni/TemplateData/style.css").pipe(res);
    });

    router.get("/favicon.ico", (req,res) =>{
        res.writeHead(200, {"content-type" : "text/ico"});
        console.log("Favicon.ico");
        fs.createReadStream("buzoni/TemplateData/favicon.ico").pipe(res);
    });

    router.get("/TempLateData/fullscreen.png", (req,res) =>{
        res.writeHead(200, {"content-type" : "text/png"});
        console.log("fullscreen.png");
        fs.createReadStream("buzoni/TemplateData/fullscreen.png").pipe(res);
    });

    router.get("/TempLateData/progressEmpty.Dark.png", (req,res) =>{
        res.writeHead(200, {"content-type" : "text/png"});
        console.log("progressEmpty.Dark.png");
        fs.createReadStream("buzoni/TemplateData/progressEmpty.Dark.png").pipe(res);
    });

    router.get("/TempLateData/progressEmpty.Light.png", (req,res) =>{
        res.writeHead(200, {"content-type" : "text/png"});
        console.log("progressEmpty.light.png");
        fs.createReadStream("buzoni/TemplateData/progressEmpty.Light.png").pipe(res);
    });

    router.get("/TempLateData/progressFull.Light.png", (req,res) =>{
        res.writeHead(200, {"content-type" : "text/png"});
        console.log("progressFull.light.png");
        fs.createReadStream("buzoni/TemplateData/progressFull.Light.png").pipe(res);
    });

    router.get("/TempLateData/progressFull.Dark.png", (req,res) =>{
        res.writeHead(200, {"content-type" : "text/png"});
        console.log("progressFull.Dark.png");
        fs.createReadStream("buzoni/TemplateData/progressFull.Dark.png").pipe(res);
    });
    
    router.get("/TempLateData/progressLogo.Dark.png", (req,res) =>{
        res.writeHead(200, {"content-type" : "text/png"});
        console.log("progressLogo.Dark.png");
        fs.createReadStream("buzoni/TemplateData/progressLogo.Dark.png").pipe(res);
    });

    router.get("/TempLateData/progressLogo.Light.png", (req,res) =>{
        res.writeHead(200, {"content-type" : "text/png"});
        console.log("progressLogo.light.png");
        fs.createReadStream("buzoni/TemplateData/progressLogo.Light.png").pipe(res);
    });


    router.get("/TempLateData/webgl-logo.png", (req,res) =>{
        res.writeHead(200, {"content-type" : "text/png"});
        console.log("/webgl-logo.png");
        fs.createReadStream("buzoni/TemplateData/webgl-logo.png").pipe(res);
    });

}




     


module.exports= router;

