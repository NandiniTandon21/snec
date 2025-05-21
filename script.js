const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// body
ctx.beginPath();

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, 600, 600);

//snec
ctx.beginPath();


// Movement -> distance -> blocks covered
let x = 10;
let y = 0;


/**
 * Direction controls for the snec
 */
const handleKeyPress = (event) => {
  console.log(event)

  //down
  if (event.key == 's') {
    y = 10;
    x = 0;
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, 10, 10);
  }

  //up
  if (event.key == 'w') {
    y = -10;
    x = 0;
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, 10, 10);
  }

  //left
  if (event.key == 'a') {
    y = 0;
    x = -10;
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, 10, 10);
  }

  //right
  if (event.key == 'd') {
    y = 0;
    x = 10;
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, 10, 10);
  }

}

const erase = () => {
  // console.log('erase ', x, y);
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, 10, 10);
}

const move = () => {
  console.log('moving ', x, y);
  ctx.translate(x, y);
}

const draw = () => {
  // console.log('draw ', x, y);
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, 10, 10);
}

window.addEventListener('keypress', handleKeyPress, true);

draw();
const render = () => {
  erase();
  move();
  draw();
}

setInterval(() => {
  render();
}, 200); // speed of the snec

ctx.endPath(); // snec 



ctx.endPath(); // body




// #̶#̶T̶O̶D̶O̶ :̶ M̶a̶k̶e̶ t̶h̶e̶ d̶o̶t̶ g̶o̶ f̶a̶s̶t̶e̶r̶ -̶ s̶e̶t̶ s̶p̶e̶e̶d̶----------
// #̶#̶T̶O̶D̶O̶ :̶ C̶h̶a̶n̶g̶e̶ d̶i̶r̶e̶c̶t̶i̶o̶n̶ o̶f̶ t̶h̶e̶ d̶o̶t̶ -̶ s̶e̶t̶ d̶i̶r̶e̶c̶t̶i̶o̶n̶ -̶ k̶e̶y̶ p̶r̶e̶s̶s̶e̶s̶

// ##TODO : Make the dot change size on eating food - increase length
// ##TODO : Keep the dot going full circle when it completes one run across the canvas

