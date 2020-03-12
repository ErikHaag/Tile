let b;

function setup() {
  let minD = min(windowWidth, windowHeight);
  createCanvas(minD - 50, minD - 50);
  setupGUI();
  b = createBoard();
}

let pC = 0;
let pR = 0;
let pPressed = false;

function draw() {
  background(255);
  if (colS.value() != pC || rowS.value() != pR) {
    b.setup(colS.value(),rowS.value()); 
    pC = colS.value();
    pR = rowS.value()
  }
  b.display();
  if (keyIsPressed && !pPressed) {
    pPressed = true;
    switch (keyCode) {
      case 37:
        b.L();
        break;
      case 38:
        b.U();
        break;
      case 39:
        b.R();
        break;
      case 40:
        b.D();
        break;
    }
  }
  if (!keyIsPressed && pPressed) {
    pPressed = false
  }
}

function touchEnded() {
  let angle = degrees(atan2((height/2) - mouseY, (width/2) - mouseX));
  if ((sqrt(sq((width/2)- mouseX) + sq((height/2) - mouseY)) >= 100) && (0 <= mouseX && mouseX <= width && 0 <= mouseY && mouseY <= height)) {
    if (-45 < angle && angle <= 45) {
      b.L();
    } else if (45 < angle && angle <= 135) {
      b.U();
    } else if ((135 < angle && angle <= 180) || (-180 < angle && angle <= -135)) {
      b.R();
    }else if (-135 < angle && angle <= -45) {
      b.D();
    }
  }
}
