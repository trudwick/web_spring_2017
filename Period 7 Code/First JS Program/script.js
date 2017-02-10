function clicked(){
	console.log("The Button was clicked!");
	var first = document.getElementById("firstInput");
	var val1 = first.value;
	var second = document.getElementById("secondInput")
	var val2 = second.value
	var product = val1 * val2;
	document.getElementById("outputDiv").innerHTML = product
}