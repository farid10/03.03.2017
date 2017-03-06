var next = new Date("march 21, 2017 00:00:00")
var x = setInterval(function() {
var today = new Date().getTime()
var qalib= next - today
var days=Math.floor(qalib / (1000*60*60*24));
var hours = Math.floor((qalib % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((qalib % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((qalib % (1000 * 60)) / 1000);

document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
},1000);

