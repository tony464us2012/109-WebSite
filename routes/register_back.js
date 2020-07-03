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

    const {name, email, password} = req.body;
     
    const emailExist = await Registered.findOne({email});
    if (emailExist) return res.status(400).send('User already exists');

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

        const user = new Registered({
        name,
        email,
        password: hashedPassword
    });
    try{
    const savedUser = await user.save();
    const token = jwt.sign({_id: savedUser._id}, config.get('TOKEN_SECRET'));
    res.send(token);
   }catch (err)  {
       res.status(400).send(err)
   };
})

   module.exports = router;