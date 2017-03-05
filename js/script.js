

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
	for ( var i = 0; i < 200; i ++) {
		var container = document.getElementById('container');
		// console.log(container);
	  var circleColor = makeRandomColor();

	  var circle = document.createElement('div');
	  circle.style.backgroundColor =  circleColor;
	  circle.className += 'light';
	  // console.log(circle);
	  container.appendChild(circle);


	}
}

makeLights();