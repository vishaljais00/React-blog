const router = require("express").Router();
const User = require('../models/User');
const Catogory = require('../models/Category');
const Post = require('../models/Post');
const bcrypt = require('bcrypt');

// Create Catogory
router.post("/", async (req, res) => {

    const newCat =  new Catogory(req.body);
    try{

        const savedCat = await newCat.save();
        res.status(200).json(savedCat);
    }catch(err){
        res.status(500).json(err)
    }
})

// Fetch All Categories

router.get("/", async (req, res) => {

    try{

        const cats = await Catogory.find();
        res.status(200).json(cats);
    }catch(err){
        res.status(500).json(err)
    }
})


module.exports = router;

