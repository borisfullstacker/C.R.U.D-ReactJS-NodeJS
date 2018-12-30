var express = require('express');
var usersC = require('../modules/users_controller');
var validator = require('../models/validation');

var router = express.Router();



/* GET ALL USERS*/
// you can do this without the async.
router.get('/', async function (req, res, next) {
  let result = await usersC.getAllUsers()
  res.json(result);
});

/* ADD NEW USER*/
router.post('/', async function (req, res, next) {
  console.log(req.body.rating)
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }
  let sampleFile = req.files.image;
  let target=`C:/Users/boris/Desktop/front-end-profile+pic/files/${sampleFile.name}`
  sampleFile.mv(target,(err)=> {
    if (err) throw err;
    let m = new validator(req.body.name, req.body.year,"",req.body.rating);
    
    //windows server link http://127.0.0.1:8887; 
    let tempTarget= `http://127.0.0.1:8887/${sampleFile.name}`
     usersC.addUser(m.name, m.year, m.rating, tempTarget)
     .then((result)=> {res.json(result)});     
  });


});

// DELETE A USER BY ID//
router.delete('/:id', async function (req, res) {
  let id = new validator("", "", req.params.id);
  let result = await usersC.deleteUserById(id.id)
  res.json(result)
   // return effected raws

});

//add response 



// UPDATE A USER BY ID//
router.put('/', async function (req, res) {
  let user = new validator(req.body.name, req.body.year, req.body.id);
  let result = await (usersC.updateUserById(user.id, user.name, user.year))
  res.json(result);//re.json({id: req.params.id, ...req.body})
});

// Search a User

router.get('/:id', async function (req, res) {
  let id = new validator("", "", req.params.id);
  let result = await (usersC.searchUserById(id.id))
  res.json(result)
});




module.exports = router;