
function searchFriend (){
	$("#search-btn").on("click", function() {
		var quizAnswer = [];

		for(var i = 1; i<11; i++){
			quizAnswer.push($('input[name=q' + i + ']:checked').val());
		};

		var surveyData = {
			name: $("#nameInput").val(),
			picture: $("#pictureInput").val(),
			answer: quizAnswer
		};

		filterPost();

		updatingData(surveyData);
	});
}

function filterPost (){
	$.ajax({url: "https://localhost:8080/api/friends", method: 'GET'}).done(function(respond){
			console.log(respond);
	});
}

function updatingData (data) {
	$.post("/api/friends", data).done(function(data) {
		console.log(data);
		alert("Adding character...");
	});
}

$("document").ready(function(){
	searchFriend();

});
