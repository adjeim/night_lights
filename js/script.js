

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
		var body = document.querySelector('body');
	  var circleColor = makeRandomColor();
	  // append a div to the body that has a background color of this color


	}
}