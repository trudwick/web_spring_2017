// alert("Hello, class! Good morning.")
function clicked(){
	console.log("Happy Thursday")
	var firstValue = parseInt(document.getElementById("first").value);
	var secondValue = parseInt(document.getElementById("second").value);
	console.log(firstValue + secondValue)
	var myDiv = document.getElementById("outputDiv");
	myDiv.innerHTML=firstValue + secondValue;
}