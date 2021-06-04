var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = canvas.width/2;
var y = canvas.height-30;
var dx = -3;
var dy = -1;
var cr = 130;
var cg = 105;
var cb = 100;

var ballRadius = 10;

function drawBall() {
    ctx.beginPath();
    var ballColor = `rgb(${cr}, ${cg }, ${cb})`;
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = ballColor;
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();   
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        cr -= 50;
        cg -= 50;
        cb -= 50;
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        cr += 50;
        cg += 50;
        cb += 50;
        dy = -dy;
    }
    
    x += dx;
    y += dy;
}

setInterval(draw, 10);