var canvas = document.getElementById('my-canvas');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();

console.log(canvas);