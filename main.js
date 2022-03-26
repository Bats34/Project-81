canvas=document.getElementById("mycanvas");
ctx =canvas.getContext("2d");
colour="blue";
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=5;
ctx.arc(200,200,100,0,2*Math.PI);
ctx.stroke();

colour="yellow";
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=5;
ctx.arc(290,330,100,0,2*Math.PI);
ctx.stroke();

colour="black";
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=5;
ctx.arc(415,200,100,0,2*Math.PI);
ctx.stroke();


colour="green";
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=5;
ctx.arc(500,330,100,0,2*Math.PI);
ctx.stroke();

colour="red";
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=5;
ctx.arc(625,200,100,0,2*Math.PI);
ctx.stroke();