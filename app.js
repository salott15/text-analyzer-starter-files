$(function() {
  $('button').mousedown(function(event) {
  	event.preventDefault();
  	event.stopPropagation();
  	var analizer = [];
  	analizer = $("textarea").val().split(" ")
  	console.log(analizer)
  	wordCount(analizer);
  	lengthAverage(analizer);
  	uniqueWord(analizer);
 })

  function wordCount(analizer){
  	$("dl").removeClass("hidden");
  	$(".wordCount").text(analizer.length);
  	}

  function uniqueWord(analizer){
  	$("d1").removeClass("hidden");
  	var uniqueWord = [];
  	uniqueWord.push(analizer[0])
  	var isUnique = true;
  	for (var i=0; i<analizer.length; i++){
  		for(var j=0; j<uniqueWord.length; j++){
  			if(analizer[i] === uniqueWord[j]){
  			isUnique = false }
  		}
  		if(isUnique){uniqueWord.push(analizer[i])}
  			isUnique = true;
  		}
  		console.log(analizer);
  		console.log(uniqueWord);
  		$(".uniqueWord").text(uniqueWord.length);
  	}
  function lengthAverage(analizer){
  	var totalCharacters = 0;
  	for (var i=0; i<analizer.length; i++){
  		totalCharacters+=analizer[i].length;
  	}
  	var average = totalCharacters / analizer.length;
  	$(".averageLength").text(average);

  }

  	//$("textarea")
  })