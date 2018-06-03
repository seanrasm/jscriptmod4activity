	var count = 7;
	var stock = 10;
	var limit = 20;
	var need_more = 5;
	var enough = "enough stock to work with. Don't worry about inventory now";
/*
	// Sample sorter with a different objective
	// The idea is that we're checking inventory against numbers defined by our make belive company. 
	if (stock == need_more) {
		document.getElementById('sample').innerHTML = "We need more stock! We have less than " + need_more + "left";
	} else if (count > stock) {
		document.getElementById('sample_a').innerHTML += "What we currently have is greater than " + stock;
	} else if (limit > stock && count > need_more) {
		document.getElementById('sample_b').innerHTML += "What we currently have " + enough;
	} */

	// Sort the three numbers held in variables: count, stock, need_more

	if (count < 10) {
		document.getElementById('display').innerHTML = "Our \'count\' variable is less than ten";
		console.log("var count = 7\; \b var stock = 10\; \b var need_more = 5\;");
		console.log("Our \'count\' variable is less than ten");
	} if (stock > 9) {
		document.getElementById('display_a').innerHTML = "Our \'stock\' variable is greater than nine";
		console.log("Our \'stock\' variable is greater than nine");
	} if (count > need_more) {
		document.getElementById('display_b').innerHTML = "Our \'count\' variable is greater than our \'need_more\' variable";
		console.log("Our \'count\' variable is greater than our \'need_more\' variable");
	}