$(document).ready(function(){

	$(document).on('click', '.add', function(){
		$(this).find('.originalText').hide();
		$(this).append("<span class='removeButton'>Remove<span>");

		// function WITHOUT ()'s, then timeout, then values to give the function
		setTimeout(changeback, 3000, $(this));
	});

	 function changeback(test){
		test.find('.removeButton').remove();
	 	test.find('.originalText').show();
	 }
});





















// EXTRA CREDIT....
// replace with this:


// $(document).on('click', '.add', function(){
// 	var timeout = 5;
// 	$(this).toggleClass('add remove');
// 	$(this).find('.originalText').hide();
// 	$(this).append("<span class='removeButton'>Remove  "+timeout+"<span>");
//
// 	for (var i=timeout;i>0;i--){
// 		setTimeout(fancyChangeback, i*1000, [$(this), timeout-i]);
// 	};
// });
//
//
// function fancyChangeback(input){
//  var test = input[0];
//  var i = input[1];
//
//  if (i != 0){
//     test.find(".removeButton").text("Remove "+i);
// } else {
//     test.find('.removeButton').remove();
//     test.find('.originalText').show();
// };
// };
// });
