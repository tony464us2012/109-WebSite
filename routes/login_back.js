const router = require('express').Router();
const Registered = require('../Models/RegisterModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const config = require('config');

router.post('/', [
  check('email').isEmail(),
  check('password').isLength({ min: 5 })
], async (req, res) => {
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })};
  
  const {email, password} = req.body

    try{
    const user = await Registered.findOne({email});
    if (!user) return res.status(400).send('Wrong username');

     const validPass = await bcrypt.compare(password, user.password);
     if(!validPass) return res.status(400).send('Invalid Password');
    
     const token = jwt.sign({_id: user._id}, config.get('TOKEN_SECRET'));
     res.send(token);
    }
     catch (err) {console.log(err)}
      })
   module.exports = router;