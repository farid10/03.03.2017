

function general(){
	setTimeout(red , 0);
	setTimeout(yellow , 5000);
	setTimeout( green, 10000);
}
general();
setInterval(general, 12000)
function red(){
	document.getElementsByClassName("redL")[0].style.backgroundColor = "red"
	document.getElementsByClassName("yellowL")[0].style.backgroundColor = "gray"
	document.getElementsByClassName("greenL")[0].style.backgroundColor = "gray"
}
function yellow(){
	document.getElementsByClassName("redL")[0].style.backgroundColor = "gray"
	document.getElementsByClassName("yellowL")[0].style.backgroundColor = "yellow"
	document.getElementsByClassName("greenL")[0].style.backgroundColor = "gray"
}
function green(){
	document.getElementsByClassName("redL")[0].style.backgroundColor = "gray"
	document.getElementsByClassName("yellowL")[0].style.backgroundColor = "gray"
	document.getElementsByClassName("greenL")[0].style.backgroundColor = "green"
}