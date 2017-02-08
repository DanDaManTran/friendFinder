//once the search button is click it will validate and gather the information so it can search for common interst in the friends database
function searchFriend (){

		var quizAnswer = [];

		for(var i = 1; i<11; i++){
			if($('input[name=q' + i + ']:checked').val() !== undefined){
				quizAnswer.push(parseInt($('input[name=q' + i + ']:checked').val()));
			}
		}

		var surveyData = {
			name: $("#nameInput").val(),
			photo: $("#pictureInput").val(),
			scores: quizAnswer
		};

		console.log(surveyData);
		$(".warning").removeClass("warning");

		if(quizAnswer.length<10){
			$("#survey").addClass("warning");
		}

		if(surveyData.name === ""){
			$("#nameInput").addClass("warning");
		}

		if(surveyData.photo === ""){
			$("#pictureInput").addClass("warning");
		}

		if(quizAnswer.length===10 && surveyData.photo !== "" && surveyData.name !== ""){
			updatingData(surveyData);
		}
}

//this will calculate the best option for a friend and also add your information to the database so you can also be used as a future resorce
function updatingData (data) {
	$.post("/api/friends", data).done(function(data) {
		var newFriend = data[(data.length-1)].scores;
		var bestFriendIndex = 0;
		var bestScore = 100000000000;

		for(var i = 0; i<data.length-1; i++){
			var score = 0;
			var friendScore = data[i].scores;

			for(var j = 0; j<10; j++){
				score = score + Math.abs(newFriend[j] - friendScore[j]);
			}

			if(score<bestScore){
				bestScore = score;
				bestFriendIndex = i;
			}
		}

		displayFriend(data[bestFriendIndex]);
	});
}

//this will update the modal for your new friend depening on the information it is taking
function displayFriend (data) {
	$("#newName").text(data.name);
	$("#newImage").attr("src", data.photo);
	$("#myModal").css("display", "block");
}

//waiting for the document to start and listening on the button
$("document").ready(function(){
	$("#search-btn").on("click", function() {
		searchFriend();
	});

	//waiting for the click on the "X" to close the modal
	$(".close").on("click", function(){
		$("#myModal").css("display", "none");
	});

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == document.getElementById('myModal')) {
	        document.getElementById('myModal').style.display = "none";
	    }
	};
});
