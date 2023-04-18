var joao
canvas=document.getElementById("canvas3")
ctx=canvas.getContext("2d")

window.addEventListener("keydown",keydown)

function add(){img_imgTag = new Image(); //definindo uma variável com uma nova imagem
 img_imgTag.onload = uploadimg; // ajustando uma função, ao carregar essa variável
  img_imgTag.src = joao; // carregar uma imagem
 } function uploadimg() { ctx.drawImage(img_imgTag,0 ,0, 300,100 ); }

function keydown
(
e





)
{
keypress=e.keyCode
console.log(keypress)
if((keypress>=65 && keypress<=90)|| (keypress >=97 && keypress<=122)){
document.getElementById("caixa").innerHTML="você pressionou uma tecla do alfabeto"
joao="alfabeto.png"
add ()
}
else if((keypress>=48 && keypress<=57)) {
document.getElementById("caixa").innerHTML="você pressionou uma tecla numerica "
}
else if((keypress>=37 && keypress<=40)) {
document.getElementById("caixa").innerHTML="você pressionou uma tecla direcional"
}
else if((keypress>=17 && keypress<=18)|| keypress==27) {
document.getElementById("caixa").innerHTML="você pressionou uma tecla especial"
}
else{
document.getElementById("caixa").innerHTML="você pressionou outras teclas"
}
}