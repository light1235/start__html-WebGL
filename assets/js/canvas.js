let canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
let doc = document.querySelector('.main');
canvas.classList.add('template-canvas');
doc.appendChild(canvas);


{let size = 200;
     let canvas = document.createElement('canvas');
     let ctx = canvas.getContext('2d');
     canvas.width = size;
     canvas.height = size;
     let doc = document.querySelector('.main');
     canvas.classList.add('sample-canvas');
     doc.appendChild(canvas);
}

