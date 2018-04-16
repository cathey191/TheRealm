$(document).ready(function(){
	// Add to order
	$(document).on('click', '.add', function(){
		$(this).find('.originalText').hide();
		$(this).append('<span class="removeButton">Remove<span>');
		setTimeout(function (test){
 			test.find('.removeButton').remove();
 	 		test.find('.originalText').show();
 	 	}, 3000, $(this));
	});

	// Pop Ups
	$('.drinks, .kMenu, .brunch, .dinner, .desserts').click(function(){
		$('.popDError').removeClass('display')
	});
	$('.cash').click(function(){
		$('.atCont').removeClass('display')
		$('.counter').removeClass('display')
	});
	$('.CC, .tab').click(function(){
		$('.atCont').removeClass('display')
		$('.onCard').removeClass('display')
	});
	// Crosses on pop ups
	$('.close').click(function(){
	 $('.popContainer, .popDError').addClass('display');
 });
 
	// variables
	 var date = new Date();
	 var day = date.getDay();
	 var hour = date.getHours();

	 // Change menu by days
	 if (hour <= 16){
		 $('.brunch').show();
		 $('.pizza, .dinner, .desserts').hide();
	 } else {
		  $('.brunch').hide();
			$('.pizza, .dinner, .desserts').show();
	 }
   // day 5 to show in presentation on Friday
	 if (day == 4 && hour >= 16 || day == 5){
		 $('.pizzaDeal, .pizza').show();
		 $('.popContainer').removeClass('display');
	 } else {
		 $('.pizzaDeal').hide();
	 }
	 if ((day == 1 || 3) && hour >= 16){
		 $('.twoMains').show();
	 } else {
		 $('.twoMains').hide();
	 }

});
