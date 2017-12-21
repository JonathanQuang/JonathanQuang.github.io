var insertText = function(theString){
	var textInsertionPoint = document.getElementById("displayText");
	var newLine = document.createElement("BR");
	var relevantText = document.createElement("H5");
	var inputText = document.createTextNode(theString);
	relevantText.append(inputText);
	textInsertionPoint.append(relevantText);
	textInsertionPoint.append(newLine);
}

var insertTextDel = function(theString){
	insertText(theString);
	for (i=0;i<10;i++){
		try {
			var deleteList = document.getElementById("del");
			console.log(deleteList);
			deleteList.outerHTML = "";
			delete deleteList;
		}
		catch(error) {
		}
	}
}