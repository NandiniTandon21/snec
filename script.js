// const canvas = document.getElementById('canvas');

// const foodX = Math.floor(Math.random() * (580 - 0 + 1) + 0)
// const foodY = Math.floor(Math.random() * (580 - 0 + 1) + 0)

// // console.log('foodX : ', foodX)
// // console.log('foodY : ', foodY)

// const ctx = canvas.getContext('2d');

// // body
// ctx.beginPath();

// ctx.fillStyle = 'black';
// ctx.fillRect(0, 0, 600, 600);

// ctx.fillStyle = 'red';
// ctx.fillRect(foodX, foodY, 10, 10);

// //snec
// ctx.beginPath();

// // Movement -> distance -> blocks covered
// let x = 10;
// let y = 0;

// if (x == foodX && y == foodY) {
//   console.log('food eaten');
// }

// /**
//  * Direction controls for the snec
//  */
// const handleKeyPress = (event) => {
//   console.log(event)

//   //down
//   if (event.key == 's') {
//     y = 10;
//     x = 0;
//     ctx.fillStyle = 'white';
//     ctx.fillRect(0, 0, 10, 10);
//   }

//   //up
//   if (event.key == 'w') {
//     y = -10;
//     x = 0;
//     ctx.fillStyle = 'white';
//     ctx.fillRect(0, 0, 10, 10);
//   }

//   //left
//   if (event.key == 'a') {
//     y = 0;
//     x = -10;
//     ctx.fillStyle = 'white';
//     ctx.fillRect(0, 0, 10, 10);
//   }

//   //right
//   if (event.key == 'd') {
//     y = 0;
//     x = 10;
//     ctx.fillStyle = 'white';
//     ctx.fillRect(0, 0, 10, 10);
//   }
// }

// const erase = () => {
//   // console.log('erase ', x, y);
//   ctx.fillStyle = 'black';
//   ctx.fillRect(0, 0, 10, 10);
// }

// const move = () => {
//   console.log('moving ', x, y);
//   ctx.translate(x, y);
// }

// const draw = () => {
//   // console.log('draw ', x, y);
//   ctx.fillStyle = 'white';
//   ctx.fillRect(0, 0, 10, 10);
// }

// window.addEventListener('keypress', handleKeyPress, true);

// draw();
// const render = () => {
//   erase();
//   move();
//   draw();
// }

// setInterval(() => {
//   render();
// }, 200); // speed of the snec

// // ctx.endPath(); // snec 

// // ctx.endPath(); // body



// // #̶#̶T̶O̶D̶O̶ :̶ M̶a̶k̶e̶ t̶h̶e̶ d̶o̶t̶ g̶o̶ f̶a̶s̶t̶e̶r̶ -̶ s̶e̶t̶ s̶p̶e̶e̶d̶----------
// // #̶#̶T̶O̶D̶O̶ :̶ C̶h̶a̶n̶g̶e̶ d̶i̶r̶e̶c̶t̶i̶o̶n̶ o̶f̶ t̶h̶e̶ d̶o̶t̶ -̶ s̶e̶t̶ d̶i̶r̶e̶c̶t̶i̶o̶n̶ -̶ k̶e̶y̶ p̶r̶e̶s̶s̶e̶s̶
// // ##TODO : spawn food at random locations

// // ##TODO : Make the dot change size on eating food - increase length
// // ##TODO : Keep the dot going full circle when it completes one run across the canvas



// Create the canvas
const canvas = document.getElementById('canvas');

// get the context of the canvas we'll work in
const ctx = canvas.getContext('2d');

// define mr. snec
const snec = {
  x: 0,
  y: 0,
  size: 10,
  speed: 3,
  dx: 3,
  dy: 3,
}

// function to clear the canvas
function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawSnec() {
  ctx.beginPath();

  ctx.fillStyle = 'black';
  ctx.fillRect(snec.x, snec.y, snec.size, snec.size);
}

function detectWalls() {
  if (snec.x < 0) {
    snec.x = canvas.width - snec.size;
  }
  if (snec.x + snec.size > canvas.width) {
    snec.x = 0;
  }
  if (snec.y < 0) {
    snec.y = canvas.height - snec.size;
  }
  if (snec.y + snec.size > canvas.height) {
    snec.y = 0;
  }
}

function newPos() {
  snec.x += snec.dx;
  snec.y += snec.dy;

  // check if the snec is out of bounds
  detectWalls();
}

function moveRight() {
  if (snec.dx == 0) {
    snec.dx = snec.speed;
  }
  if (snec.dx < 0) {
    snec.dx *= -1; // change direction to right
  }
  snec.dy = 0; // stop vertical movement
}
function moveLeft() {
  if (snec.dx == 0) {
    snec.dx = snec.speed;
  }
  snec.dy = 0;
  snec.dx *= -1;
}
function moveUp() {
  if (snec.dy == 0) {
    snec.dy = snec.speed;
  }
  snec.dx = 0;
  snec.dy *= -1;
}
function moveDown() {
  if (snec.dy == 0) {
    snec.dy = snec.speed;
  }
  if (snec.dy < 0) {
    snec.dy *= -1;
  }
  snec.dx = 0;
}

function keyDownHandler(e) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    moveRight();
  }
  if (e.key === 'Left' || e.key === 'ArrowLeft') {
    moveLeft();
  }
  if (e.key === 'Down' || e.key === 'ArrowDown') {
    moveDown();
  }
  if (e.key === 'Up' || e.key === 'ArrowUp') {
    moveUp();
  }
}

// animate the snec
function update() {
  clear();

  drawSnec();

  newPos();

  requestAnimationFrame(update);
}

update();

document.addEventListener('keydown', keyDownHandler);