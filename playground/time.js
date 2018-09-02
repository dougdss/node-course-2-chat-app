var moment = require('moment');

// Jan 1st 1970 00:00:00 am

// var date = new Date();
// var months = ['Jan', 'Feb']
// console.log(date.getMonth());


// var date = moment();
// date.add(1,'year');
// console.log(date.format('MMM Do, YYYY'));

//10:35 am
// 6:01 am

var createdAt = 1234;
var someTimestamp = moment().valueOf();
var date = moment(createdAt);
console.log(someTimestamp);
console.log(date.format('h:mm a'));
