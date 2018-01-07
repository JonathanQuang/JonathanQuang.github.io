var score = 0;


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
			//console.log(deleteList);
			deleteList.outerHTML = "";
			delete deleteList;
		}
		catch(error) {
		}
	}
}

var storyText = {
	"0":"This is a test if your browser supports this program. If so, click on the button below. If not, switch to a different browser.",
	"0options":"1.Proceed0",
	"1":"You are Jane Re. You are together with Ed. Instead of being driven to 646 Thorn Street, Ed got off the bridge and went to the Promenade. The two of you look over the East River and the Manhattan skyline.",
	"1options":"2.Let the silence carry on0,3.Talk about your dinner at Windows on the World1"
	
}

var createButton = function(buttonText,functionString){
	var btn = document.createElement("BUTTON");
	var wrapper = document.createElement("div");
	var textNode = document.createTextNode(buttonText);
	btn.appendChild(textNode);
	//btn.onclick = "function(){createButton('0');}"
	btn.setAttribute('onclick',functionString);
	btn.id = "del";
	wrapper.append(btn);
	var insertionPoint = document.getElementById("displayText");
	//insertTextDel(storyText[buttonText]);
	insertionPoint.appendChild(wrapper);
}

createButton("start","parseJsonThing(0)");

var parseJsonThing = function(eventIndex){
	var displayText = storyText[eventIndex];
	insertTextDel(displayText);
	var arrayOfOptionsText = storyText[eventIndex+"options"];
	var optionsArray = arrayOfOptionsText.split(',');
	console.log(optionsArray);
	for (recStr in optionsArray) {
		var str = optionsArray[recStr];
		console.log(str);
		var firstPeriod = str.indexOf('.');
		createButton(str.slice(firstPeriod+1,str.length-1),"parseJsonThing(" + str.slice(0,firstPeriod) + ")");

	}

}



