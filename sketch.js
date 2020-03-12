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
