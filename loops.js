function forLoop(array) {
  for(let i = 0; i < 25; i++) {
    if(i === 1) {
      array.push('I am 1 strange loop.');
    }
    else {
      array.push('I am ${i} strange loop.');
    }
  }
  return array;
}

function whileLoop(n) {
  while(n > 0) {
    console.log(--n);
  }
  return 'done';
}

while (maybeTrue()) {
  console.log("And I ran; I ran so far away!");
}

function doWhileLoop(array) {
  
function maybeTrue() {
  return Math.random() >= 0.5;
  
}  
}