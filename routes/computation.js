var express = require('express');
var router = express.Router();

/* GET computation page. */
router.get('/', function (req, res, next) {
  var x;
  //var random = Math.random() * (3) + (-1);
  var random = Math.random();
  console.log(req.query.x);
  x = req.query.x;

  // checking if url has params
  if (x == undefined) {
    x = random;
  }


  
  let hypot = Math.hypot(x)
  let ceil =Math.ceil(x)
  let clz32 = Math.clz32(x)
  res.render('computation', {
    title: 'Computation',
    values: `applied to ` + x + ` is ` + hypot ,
    v1: `applied to ` + x + ` is ` + ceil,
    v2: `applied to ` + x + ` is ` + clz32
  });
});

module.exports = router;