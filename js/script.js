$(document).ready(function(){

	$(document).on("click", ".add", function(){
		$(this).find(".originalText").hide();
		$(this).append("<span class='removeButton'>Remove<span>");

		setTimeout(changeback, 3000, $(this));
	});

	 function changeback(test){
		test.find(".removeButton").remove();
	 	test.find(".originalText").show();
	 }

	 $(".drinks, .kMenu, .brunch").click(function(){
		 $(".popDError").removeClass("display")
	 });

	 var date = new Date();
	 var day = date.getDay();
	 var hour = date.getHours();

	 if (hour < 16){
		 $(".brunch").show();
	 } else {
		  $(".brunch").hide();
	 }

	 if (hour >= 16){
		 $(".pizza, .dinner, .desserts").show();
	 } else {
		  $(".pizza, .dinner, .desserts").hide();
	 }

	 if (day == 4 && hour >= 16){
		 $(".pizzaDeal").show();
		 $(".popContainer").removeClass("display");
	 } else {
		 $(".pizzaDeal").hide();
	 }
	 if ((day == 1 || 3) && hour >= 16){
		 $(".twoMains").show();
	 } else {
		 $(".twoMains").hide();
	 }

	 $(".exit").click(function(){
 		$(".popContainer, .popDError").addClass("display");
 	});

});
