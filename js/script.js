

function getRGB() {
  return Math.floor(Math.random() * 256);
}

function makeRandomColor() {
  var color = 'rgb(' 
  color += (getRGB() + ',' + getRGB() + ',' + getRGB() + ')');
  // console.log(color);
  return color;
}