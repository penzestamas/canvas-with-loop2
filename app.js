var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var size = 50;
var positionX = 15;
var positionY = 15;
var distance = 5;

context.fillStyle = 'rgba(255,165,0,.5)';

for (var i = 0; i < 5; i++) {
  positionX = 15;
  for (var rowItem = 0; rowItem <= i; rowItem++) {
    context.fillRect(positionX, positionY, size, size);
    positionX += size + distance;
  }
  positionY += size + distance;
}