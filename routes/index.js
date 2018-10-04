var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Login' });
});
router.post('/',(req,res)=>{
  res.json(req.body);
});

module.exports = router;
