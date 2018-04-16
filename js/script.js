$(document).ready(function(){

	$(document).on('click', '.add', function(){
		$(this).find('.originalText').hide();
		$(this).append('<span class="removeButton">Remove<span>');

		setTimeout(changeback, 3000, $(this));
	});

	 function changeback(test){
		test.find('.removeButton').remove();
	 	test.find('.originalText').show();
	 }

	 var date = new Date();
	 var day = date.getDay();
	 var hour = date.getHours();

	 if (hour < 16){
		 $('.brunch').show();
	 } else {
		  $('.brunch').hide();
	 }

	 if (hour >= 16){
		 $('.pizza, .dinner, .desserts').show();
	 } else {
		  $('.pizza, .dinner, .desserts').hide();
	 }

	 if (day == 4 && hour >= 16 || day == 1){
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

	 $('.close').click(function(){
 		$('.popContainer, .popDError').addClass('display');
 	});

});
