/**
 * app.js 
 */

const canvas = document.getElementById("jsCanvas");

function onMousemove(event)
{
	console.log(event);
}


if(canvas)
{
	canvas.addEventListener("mousemove",onMousemove);
}