let myCanvas = document.getElementById('myCanvas'); // Canvas ist die Leinwand
myCanvas.width = 400;
myCanvas.height = 400;
let ctx = myCanvas.getContext('2d'); // ctx steht für Context und ist die Zeichenoberfläche der Leinwand
ctx.strokeRect(0, 0, myCanvas.width, myCanvas.height); // Zeichnet ein Rechteck, damit man sieht wie groß die Zeichenoberfläche ist.

let dotX = myCanvas.width /2 ; // ist bei 400 --> 200
let dotY = myCanvas.height / 2; // ist bei 400 --> 200
ctx.beginPath();
ctx.moveTo(dotX, dotY); 
dotX = dotX - 100;
dotY = dotY - 100;
ctx.lineTo(dotX, dotY); 
ctx.strokeStyle = 'purple';
ctx.stroke(); 

ctx.beginPath();
ctx.moveTo(dotX, dotY); 
dotX = dotX + 100;
ctx.lineTo(dotX, dotY); 
ctx.strokeStyle = 'blue';
ctx.stroke(); // Zeichne

ctx.beginPath();
ctx.moveTo(dotX, dotY); 
dotX = dotX + 0;
dotY = dotY + 100;
ctx.lineTo(dotX, dotY); 
ctx.strokeStyle = 'green';
ctx.stroke(); 

ctx.beginPath();
ctx.moveTo(dotX, dotY); 
dotX = dotX - 100;
dotY = dotY + 0;
ctx.lineTo(dotX, dotY); 
ctx.strokeStyle = 'purple';
ctx.stroke(); 

ctx.beginPath();
ctx.moveTo(dotX, dotY); 
dotX = dotX + 0;
dotY = dotY - 100;
ctx.lineTo(dotX, dotY); 
ctx.strokeStyle = 'red';
ctx.stroke(); 

ctx.beginPath();
ctx.moveTo(dotX, dotY); 
dotX = dotX + 50;
dotY = dotY - 50;
ctx.lineTo(dotX, dotY); 
ctx.strokeStyle = 'yellow';
ctx.stroke(); 

ctx.beginPath();
ctx.moveTo(dotX, dotY); 
dotX = dotX + 50;
dotY = dotY + 50;
ctx.lineTo(dotX, dotY); 
ctx.strokeStyle = 'pink';
ctx.stroke(); 

ctx.beginPath();
ctx.moveTo(dotX, dotY); 
dotX = dotX - 100;
dotY = dotY + 100;
ctx.lineTo(dotX, dotY); 
ctx.strokeStyle = 'purple';
ctx.stroke(); 

for (let i=0; i<=400; i=i+4){
    if (i > 97 && i <120){
      i= i + 100;
    }
    ctx.beginPath();
    ctx.moveTo(i+3,180);
    ctx.lineTo(i+3,200);
    ctx.strokeStyle='green';
    ctx.stroke();
  }

