const myImage=new Image();
myImage.src="data:image/png;base64,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"
const canvas=document.getElementById("canvas1");
const ctx=canvas.getContext('2d');
canvas.width=500;
canvas.height=706;
ctx.drawImage(myImage,0,0,canvaswidth,canvasheight);
myImage.addEventListener('load',function(){
    const canvas=document.getElementById("canvas1");
const  ctx=canvas.getContext('2d');
canvas.width=500;
canvas.height=706;
ctx.drawImage(myImage,0,0,canvaswidth,canvasheight);

});