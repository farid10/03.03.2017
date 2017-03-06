var div = document.createElement('div');
document.body.appendChild(div);
var img = document.createElement('img');
div.appendChild(img);
div.style.width = "500px";
div.style.height = "300px";
div.style.margin = "0 auto";
img.style.width = "100%";
img.style.height = "100%";
img.setAttribute("src","images/01.jpg");
var div1 = document.createElement('div');
document.body.appendChild(div1)
div1.style.margin = "0 auto"
div1.style.width = "500px";
div1.style.height = "100px";
var button1 = document.createElement('button');
var button2 = document.createElement('button');
var button3 = document.createElement('button');
var button4 = document.createElement('button');
var button5 = document.createElement('button');
button1.style.width = "100px"
button1.style.height = "20px"
button2.style.width = "100px"
button2.style.height = "20px"
button3.style.width = "100px"
button3.style.height = "20px"
button4.style.width = "100px"
button4.style.height = "20px"
button5.style.width = "100px"
button5.style.height = "20px"
div1.appendChild(button1);
div1.appendChild(button2);
div1.appendChild(button3);
div1.appendChild(button4);
div1.appendChild(button5);
button1.setAttribute("class","buttonF1");
button1.setAttribute("onclick","blurF()");
button2.setAttribute("class","buttonF2");
button2.setAttribute("onclick","brightnessF()");
button3.setAttribute("class","buttonF3");
button3.setAttribute("onclick","grayscaleF()");
button4.setAttribute("class","buttonF4");
button4.setAttribute("onclick","invertF()");
button5.setAttribute("class","buttonF5");
button5.setAttribute("onclick","saturateF()");
button1.innerHTML = "blur"
button2.innerHTML = "rightness"
button3.innerHTML = "grayscale"
button4.innerHTML = "invert"
button5.innerHTML = "saturate"
function blurF(){
document.getElementsByTagName('img')[0].style.filter= "blur(5px)"; 
}
function brightnessF(){
   document.getElementsByTagName('img')[0].style.filter= "brightness(200%)"
}
function grayscaleF(){
  document.getElementsByTagName('img')[0].style.filter= "grayscale(100%)"
}
function invertF(){
  document.getElementsByTagName('img')[0].style.filter= "invert(100%)"
}
function saturateF(){
  document.getElementsByTagName('img')[0].style.filter= "saturate(8)"
}
