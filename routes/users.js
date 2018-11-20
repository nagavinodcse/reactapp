let express = require('express');
let router = express.Router();
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');
let passport = require('passport');
let keys = require('../config/keys');
//Load Model
const User = require('../models/User');
/* GET users listing. */
router.get('/', (req, res) => {
    res.render('users', { title: 'Users' });
});
router.post('/register',(req,res)=>{
    User.findOne({ email: req.body.email })
        .then(user =>{
            if(user){
                return res.status(422).json({message : "You are already registered."});
            }else{
                const newUser = new User({
                    name:req.body.name,
                    email:req.body.email,
                    password:req.body.password
                });
                bcrypt.genSalt(10,(err,salt)=>{
                    bcrypt.hash(newUser.password,salt,(err,hash)=>{
                        if(err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user=>res.json(user))
                            .catch(err=>console.log(err));
                    })
                })
            }
        })
});
router.post('/login', (req, res) => {
    const email = req.body.email, password = req.body.password;
    User.findOne({email}).then(user => {
        if (!user) {
            return res.status(422).json({message: "User not found."});
        }
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                let payload = {id:user.id,name:user.name};
                jwt.sign(payload,keys.secretOrKey,{expiresIn:"1h"},(err,token)=>{
                    res.json({
                        success:true,
                        token : 'Bearer '+token
                    });
                })
            } else {
                return res.status(422).json({message: 'Password Incorrect.'});
            }
        });
    });
});
module.exports = router;
