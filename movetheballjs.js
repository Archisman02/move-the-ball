var ball = document.getElementById('ball-moves');
// const b = {x:50, y:30, dx: 1, dy: 1};
var dx = 1 + 'px';
var dy = 1 + 'py';
var currPos = 0;
var newPos = 0;
document.addEventListener('keydown', function(event){
	if(event.keyCode == 87){
		console.log("Key pressed");
		currPos = ball.offsetTop;
		console.log(currPos);
		if(currPos < 15){
			console.log("Can't move");
		}else{
			newPos = currPos - 15;
			console.log(newPos);
			ball.style.top = newPos + 'px';
		} 
	}else if(event.keyCode == 68){
		// ball.style.left = ball.offsetLeft + 1 + "px";
		currPos = ball.offsetLeft;
		console.log(currPos);
		if(currPos >= 540){
			console.log("Can't move");
		}else{
			newPos = currPos + 1; 
			console.log(newPos); 
			ball.style.left = newPos + 'px';
		}
	}else if(event.keyCode == 83){
		// ball.style.top = ball.offsetTop + 1 + "px";
		currPos = ball.offsetTop;
		if(currPos >= 340){
			console.log("Can't move");
		}else{
			newPos = currPos + 1;
			ball.style.top = newPos + 'px';
		}
	}else if(event.keyCode == 65){
		console.log("Key pressed");
		// ball.style.left = ball.offsetLeft - 1 + "px";
		currPos = ball.offsetLeft;
		console.log(currPos);
		if(currPos <= 15){
			console.log("Can't move");
		}else{
			newPos = currPos - 15;
			// newPos = -currPos; 
			console.log(newPos); 
			ball.style.left = newPos + 'px';
		}
	}
});

// function moveBall(){

// }