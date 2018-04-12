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

	 var date = new Date();
	 var hour = date.getHours();

	 if (hour < 16){
		 $(".brunch").show()
	 } else {
		  $(".brunch").hide();
	 }

	 if (hour > 2){
		 $(".pizza, .dinner, .desserts").show()
	 } else {
		  $(".pizza, .dinner, .desserts").hide();
	 }
});
