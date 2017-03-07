var go;


function getRGB() {
  return Math.floor(Math.random() * 256);
}

function makeRandomColor() {
  var color = 'rgb(' 
  color += (getRGB() + ',' + getRGB() + ',' + getRGB() + ')');
  // console.log(color);
  return color;
}

function makeLights() {
	for ( var i = 0; i < 1; i ++) {
		var container = document.getElementById('container');
		// console.log(container);
	  var circleColor = makeRandomColor();

	  var circle = document.createElement('div');
	  circle.style.backgroundColor =  circleColor;
	  circle.className += 'light';
	  // console.log(circle);
	  container.appendChild(circle);


	}
	go = setTimeout(makeLights, 100);
}

function stop(){
	clearTimeout(go);
}

document.body.onkeydown = function(event){
    var keycode =  event.keyCode;
    if(keycode === 32){
        stop();
    }
}

makeLights();

// Make spacebar toggle the stop and go.