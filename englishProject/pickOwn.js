import System.io;
var filePath = "textStorage.txt"


var storyText = {"0":"You will be playing as Jane Re, following an alternate timeline where she never returned to Korea, but stays in New York City."}


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

var createButton = function(buttonText){
	var btn = focument.createElement("BUTTON");
	var wrapper = document.createElement("div");
	var textNode = document.createTextNode(buttonText);
	btn.appendChild(textNode);
	btn.onClick = "insertText('text junk')"
	btn.id = "del";
	wrapper.append(btn);
	var insertionPoint = document.getElementById("displayText");
	insertionPoint.append(wrapper);
}

createButton(0);
