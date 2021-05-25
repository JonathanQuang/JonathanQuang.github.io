svgStuff = document.getElementById("skillIco");
svgList=[];


var clearSkillIco = function(){
	var i;
	try{
		for (i=1;i<=17;i+=2){
			childNodeRef = svgStuff.childNodes[i];
			childNodeRef.setAttribute("opacity",0);
			svgList.push(childNodeRef);
		}
	}
	catch(err){
	}
	console.log("svg error bug");
}

var incrementO = function(){

	counter = 0;
	intervalId = -1;

	var increment = function(){
		counter +=1;
		console.log(counter);
		if (counter >= 100){
			clearInterval(intervalId);
		}
		try{
			for (i=0;i<=svgList.length;i++){
				svgList[i].setAttribute("opacity",parseFloat(svgList[i].getAttribute("opacity"))+0.01);
			}
		}
		catch(err){
			console.log("svg error bug")
		}
	}
	
	intervalId = setInterval(increment,35)
	

}

window.onload = function(){clearSkillIco();incrementO();}

