/*Type your code here .. */
var factorial = 1;
async function respond(inputText){
	var i = 1;
	if(inputText < 0){
		Bot.send("-------No Factorial-------");
	}else{
	for(i ; i <= inputText ; i++){
		factorial = parseInt(factorial)*parseInt(i);
	}Bot.send(factorial);
	}
 }
