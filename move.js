var ball = document.getElementById('ball');
var container = document.getElementById('container');

// Getting the width of ball ( width and height of ball are same)
var ballWidth = parseInt(getComputedStyle(ball).width);

// Width and Height of container in which the ball is restricted
var contWidth = parseInt(getComputedStyle(container).width);
var contHeight = parseInt(getComputedStyle(container).height);

// This is the maximum value of top and left in integers that ball can go 
var maxWidth = contWidth - ballWidth;
var maxHeight = contHeight - ballWidth;

// This function is for setting the initial value of ball using random()
function initialiseBall() {
    ball.style.top = Math.floor(Math.random() * maxHeight) + 'px';
    ball.style.left = Math.floor(Math.random() * maxWidth) + 'px';
}

initialiseBall();

// Event and function to Move the ball with W,A,S,D keys 
window.addEventListener('keypress', function(event) {
    let key = event.keyCode;
    let top = parseInt(ball.style.top);
    let left = parseInt(ball.style.left);

    // Handling events on pressing W or w 
    if(key == 119 || key == 87) {
        top -= 6;
        // checking if the ball reaches border after pressing the KEY 
        if(top <= 0){
            ball.style.top = 0 + 'px';
            return;
        }
        ball.style.top = top + 'px';              
    }

    // Handling events on keys S & s 
    else if(key == 115 || key == 83) {
        top += 6;
        if(top >= maxHeight){
            ball.style.top = maxHeight + 'px';
            return;
        }
        ball.style.top = top + 'px';
    }

    // Handling events on A & a 
    else if(key == 97 || key == 65) {
        left -= 6;
        if(left <= 0){
            ball.style.left = 0 + 'px';
            return;
        }
        ball.style.left = left + 'px';
    }

    // Handling events on D & d 
    else if(key == 100 || key == 68) {
        left += 6;
        if(left >= maxWidth){
            ball.style.left = maxWidth + 'px';
            return;
        }
        ball.style.left = left + 'px';
    }
});