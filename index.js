const express = require('express');
var schedule = require('node-schedule');
// you can use npm i timeout-callback for socket timeout callback
const app = express();
const port = 3000

app.get('/', (req, res) =>{
	res.send('Hello World!');
	var date = new Date('2019-05-12 14:18:55.140');
	var j = schedule.scheduleJob(date, function(y){
		console.log('/ url')
		console.log(y);
	});
})
for(let i=0;i<5;i++){
	let date = new Date('2019-05-12 14:44:13.140');
	let j = schedule.scheduleJob(date, function(y){
		console.log('loop')
		console.log(y);
	});
}
console.log('run')
var date = new Date('2019-05-12 14:19:13.140');
var j = schedule.scheduleJob(date, function(y){
	console.log('home')
	console.log(y);
});


setTimeout((arg)=>console.log(`arg was => ${arg}`), 10000, 'funky');
app.listen(port, () => console.log(`Example app listening on port ${port}!`))