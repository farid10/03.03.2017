function ucbucaq(){
	
	var div = document.createElement('div');
	document.body.appendChild(div);
	div.style.width = "0px"
	div.style.height = "0px"
	div.style.borderLeft = "200px solid transparent";
  div.style.borderRight = "200px solid transparent";
  
  div.style.borderBottom = "200px solid gray";
  
}
function dordbucaq(){
	document.getElementsByTagName("div")[0].style.display = "none"
	var div = document.createElement('div');
	document.body.appendChild(div);	
	div.style.width = "300px"
	div.style.height = "200px"
	div.style.backgroundColor = "red"
}

function daire(){
	document.getElementsByTagName("div")[0].style.display = "none"
	document.getElementsByTagName("div")[1].style.display = "none"
	var div = document.createElement('div');
	document.body.appendChild(div);
	div.style.width = "300px"
	div.style.height = "300px"
	div.style.borderRadius = "100%"
	div.style.backgroundColor = "yellow"
}