var score = 0;

//first, figure out how to add text statically given a string input
var insertText = function(theString){
	var textInsertionPoint = document.getElementById("displayText");
	var newLine = document.createElement("BR");
	var relevantText = document.createElement("H5");
	var inputText = document.createTextNode(theString);
	relevantText.append(inputText);
	textInsertionPoint.append(relevantText);
	textInsertionPoint.append(newLine);
}

//after inserting text, delete previous buttons to prevent the user accessing
//multiple parts of the decision tree at the same time.
var insertTextDel = function(theString){
	insertText(theString);
	//assumes a max of ten buttons, delete them, the try and catch should prevent an error
	//hanging up the webpage
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


//The decision tree was compressed into a json object where things are defined line by line
//a number denotes the event ID
//a number plus the word options defined the options the player can choose from
//There is metadata added for the sake of being able to render buttons statically that lead to the right event
//Lines 90 and above define endings.
//the rest is standard situations and options. 
//this part took approximately three hours due to debugging formatting errors
var storyText = {
	"0":"This is a test if your browser supports this program. If so, click on the button below. If not, switch to a different browser. This story starts off near the end of chapter 10. This scene is set the night before Jane leaves for her flight. However, this choose-your-own adventure will explore the dynamic between Jane and Ed if the flight never existed. This choose-your-own adventure starts off with a bit of summary.",
	"0options":"1.Proceed0",
	"1":"You are Jane Re. You are together with Ed. Instead of being driven to 646 Thorn Street, Ed got off the bridge and went to the Promenade. The two of you look over the East River and the Manhattan skyline.",
	"1options":"2.Let the silence carry on0,3.Talk about your dinner at Windows on the World1",
	"2":'Ed turns to you. "You look kinda down. Is something wrong?"',
	"2options":"4.Tell him about your identity crisis2,5.Continue staying silent0",
	"3":'You talk about how your grandfather did not like the steak. Ed comments on how nobody goes there for the steak and that the bar next door is better. His accent that he represses around Beth is noticeably present. The accent reminds you of Re Myungsun commenting on you looking more Korean.',
	"3options":"2.Bite your lip at the memory of Re Myungsum's comment1",
	"4":"You talk about your Korean mother and American father and all the friction it has caused in you life. Ed responds with an anecdote about his Italian mother and Irish father. He leans in closer to you, and tells you how much he missed you, blushing while doing so.",
	"4options":"6.Tease him1",
	"5":'Awkward silence begins to fill the space. You know it. He knows it too, but at least he tries to break the silence. Ed tells you how much he misses you, and blushes while doing so. He eventually confesses to you.',
	"5options":"7.Let the scene continue0",
	"6":'You tell him, "Keep it together Farley". Ed laughs. He begins to confess his love for you.',
	"6options":"7.Let the scene continue0",
	"7":'He leans in for a kiss. Warnings fire off in the back of your head, but your heart says otherwise. There is so much wrong with this situation, but you have your own life to consider as well. What will you do at this crucial moment?',
	"7options":"8.Listen to those warnings and slap him0,9.Let him kiss you (but never kiss back)1",
	"8":'He looks at you, eyebrows raised and mouth wide open. You can see his hand rubbing your red handprint on his cheek.',
	"8options":'11."How dare you?" Storm off for a while0,11.Cry and run0,12.Apologize to him. Tell him that you were just surprised.1',
	"9":'Ed asks, "Do you love me Jane?" You think about it for a moment. Why did you hesitate?',
	"9options":'15.Ask about how the relationship will work with regard to Beth1,16.Ask how the relationship is going to work with regard to Devon in the short term.1,17.Ask how he imagines a long term relationship with you.1',
	"11":"Well, you've essentially cut off ties with him. You didn't forget about your job did you? Do you plan on going back?",
	"11options":"90.The atmosphere would simply be too awkward. Perhaps you don't have the heart to face him anymore. Never go back.0,13.You believe you can still salvage your relationship. You should go back to your job taking care of Devon.1",
	"12":'"Ed, I was just caught off guard," you say softly. "Perhaps I was too quick. Maybe we should continue another time.," Ed responds.',
	"12options":'90."There will never be another time Ed. I do not think I should come back." Never return to the Mazer-Farley household0,13.You believe that your relationship can still work. You can walk away for now. Do remember that you are going back to work for them.1',
	"13":"It's just another day at the Mazer-Farley household, but you can't ignore what happened the previous night. What's your plan on how to interact with Ed?",
	"13options":'91.This is too awkward. You can barely look at him straight in the face. You should avoid your nights in the kitchen with Ed.0,92. Be up front with Ed. Tell him that you want to stay friends.0,14. Confess your love to him at the nearest opportunity.1',
	"14":'You knew this would happen. He invites you to his bedroom, but he simply lacked enough passion to start. You could sense his hesitation in the bedroom. Perhaps your previous actions caused him to have some of his own doubts.',
	"14options":"91.The next few weeks working at the Mazer-Farley household is simply too awkward. You can barely look at him straight in the face. Ed has also stopped visiting the kitchen during the night. You have no real reason to stop working though.0",
	"15":'"Jane, I have never felt this way with Beth. With you, I feel like I am with someone who understands me, not someone who oppresses me."',
	"15options":"18.Question if he understands that this might evolve to a long term affair.0,19. Tell him that you plan on keeping this affair a secret.1",
	"16":'"We should try our best to keep this a secret from Devon too. She should not have to put up with this at her age.',
	"16options":"20.Ask what will happen if she finds out.1,21.Ask if Devon will approve of this relationship when she does find out.1",
	"17":'"No question about it, at one point, I will seperate from Beth. When that time comes, we should live in a modest apartment. To prepare for that, I will help you look for a new job so you are not dependent on Beth or my income.',
	"17options":"23.Ask about if he plans on bringing Devon with him after the separation.1",	
	"18":'"I understand, but Jane, I am sick and tired of this suffocating marriage.',
	"18options":"24.Ask no further questions. Kiss him on the cheek to end the conversation and go home.0,16.Ask how the relationship is going to work with regard to Devon in the short term.1,17.Ask how he imagines a long term relationship with you.1",
	"19":'"Then we will be accomplices in crime," laughs Ed.',
	"19options":"24.Ask no further questions. Kiss him on the cheek to end the conversation and go home.0,16.Ask how the relationship is going to work with regard to Devon in the short term.1,17.Ask how he imagines a long term relationship with you.1",
	"20":'"Well she is definitely not the type to tell Beth. Devon is fine with hiding things from Beth. Remember her and the ice cream?',
	"20options":"24.Ask no further questions. Kiss him on the cheek to end the conversation and go home.0,15.Ask about how the relationship will work with regard to Beth.1,17.Ask how he imagines a long term relationship with you.1",	
	"21":'"Devon is definitely annoyed that Beth keeps on doing things to her that she is too old to day. She definitely sees you as a much more pleasant person to be around."',
	"21options":"24.Ask no further questions. Kiss him on the cheek to end the conversation and go home.0,15.Ask about how the relationship will work with regard to Beth.1,17.Ask how he imagines a long term relationship with you.1,",	
	"23":'"I know you love Devon very much, but it is unlikely that a court is going to give me guardianship over Devon. We are the ones in the affair and Beth has certainly been more motherly than I have as a father."',
	"23options":"24. Ask no further questions. Kiss him on the cheek to end the conversation and go home.0,15.Ask about how the relationship will work with regard to Beth.1,16.Ask how the relationship is going to work with regard to Devon in the short term.1",
	"24":'Nothing much has changed at the Mazer-Farley household, except you and Ed are a lot more friendly. You can feel your love for him growing, but also your guilt.',
	"24options":"93.Tell Beth0,25.Tell Devon0,26.Continue your nightly kitchen sessions with Ed.0,90. Your guilt and your heart are tearing you apart. You decide that this situation is not healthy for you and decide to leave permanently.0",
	"25":'Devon says, "You know, I am honestly not surprised. Your secret is safe with me. Beth is starting to get on my nerves."',
	"25options":'93.Tell Beth.0,26.Continue your nightly kitchen sessions with Ed.0,90. Your guilt and your heart are tearing you apart. You decide that this situation is not healthy for you and decide to leave permanently.0',
	"26":'You can feel the passion between the two of you growing with each night. Eventually, you end up in his bedroom. After that, you and Ed start to plan your lives away from Beth.',
	"26options":"93.You cannot bear the guilt any longer. You should tell Beth.0,90. Your guilt and your heart are tearing you apart. You decide that this situation is not healthy for you and decide to leave permanently.0,94.You go through with the plan.0",
	"90": "Many months pass. You're back to working for a grocery store, but at least it isn't with Sang. The job market seems to be recovering, and you have a few promising interviews lined up. On your way to one of them, you spot Beth, Ed, and Devon together. They're still a family, but the atmosphere is tense. Ed is clearly trapped in an unhappy marriage.",
	"91": "Months pass like this. You realize that you can't stand being in the Mazer-Farley household anymore. It has become too hard to hold a conversation with Ed, and now you can barely talk to Beth without feeling extremely guilty. You quit and you're back to working for a grocery store, but at least it isn't with Sang. The job market seems to be recovering, and you have a few promising interviews lined up. On your way to one of them, you spot Beth, Ed, and Devon together. They're still a family, but the atmosphere was tense. Ed is clearly trapped in an unhappy marriage.",
	"92": 'Your heart feels pain, knowing that you can no longer be with Ed. However, time heals all wounds. You two remain great friends. However, the relationship between Beth and Ed continues to deteriorate. Not wanting to witness a divorce, you leave the household and begin looking for a new job.',
	"93": 'Beth slams her fist on the table. "I want a divorce!" she screams. You manage to slip out of the house before you get dragged into their argument. You stay with Nina for the night. When you go back to the household, you see Beth laying on the couch with puffy eyes. Ed is nowhere to be seen, and Devon is awkwardly staring at you. "Get out Jane!" Beth screams. You go back to where you stayed the night before. You check your email and realize that Ed was dissapointed in you to. All ties with the Mazer-Farley family are now gone. Was this the best choice?',
	"94": 'A few weeks later, Ed and Beth have divorced. Beth wins Devon in the divorce. At first, your life with Ed was going smoothly. However, when the two of you go out to a part that Nina invited you to, Ed is clearly upset. His idea of an ideal night is a nice dinner at home with you, but this conflicts with you wanting to enjoy time with friends as well. You do not want to feel trapped in a relationship. You decide to break up with Ed.'
}

//create a button that can call upon the json parser function
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

//create the initial json
createButton("start","parseJsonThing(0,0)");

//this function parses the json data to generate the appropriate buttons
//in a pseudo-recursive manner
var parseJsonThing = function(eventIndex,scoreDelta){
	var displayText = storyText[eventIndex];
	insertTextDel(displayText);
	var arrayOfOptionsText = storyText[eventIndex+"options"];
	//this try and catch exists for thr sake of restarting the adventure upon hitting an ending
	try{
		var optionsArray = arrayOfOptionsText.split(',');
		console.log(optionsArray);
	}
	catch (err) {
		insertText("You have reached one of five endings. To enjoy this in it's entirety, discover the other 4.");
		createButton("start","parseJsonThing(0,0)");
	}
	//this iterates through the appropriate JSON options entry and parses it to generate the apporpriate buttons
	for (recStr in optionsArray) {
		var str = optionsArray[recStr];
		console.log(str);
		var firstPeriod = str.indexOf('.');
		createButton(str.slice(firstPeriod+1,str.length-1),"parseJsonThing(" + str.slice(0,firstPeriod) + "," + str.slice(str.length-1,str.length) + ")");
	score += parseInt(scoreDelta);
	}

}



