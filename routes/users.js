var express = require('express');
var router = express.Router();
var job;
/* GET users listing. */
router.get('/', function (req, res, next) {
  var CronJob = require('cron').CronJob;
  job = new CronJob('* * * * * *', function () {
    console.log('You will see this message every second');
  }, null, true, 'America/Los_Angeles');
  job.start();


  /*
  var schedule = require('node-schedule');
  var date = new Date(2020, 6, 10, 16, 11, 00);
  var x = 'Tada!';
  var j = schedule.scheduleJob(date, function(y){
    console.log(y);
  }.bind(null,x));
  x = 'Changing Data';*/

  res.send("start");
});
router.get('/stop',function(req,res){
job.stop();
res.send("stop");
});



module.exports = router;
