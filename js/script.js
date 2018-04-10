$(document).ready(function(){
// $(document).on('click', '.remove', function(){
// 	console.log("test");
// });

	// $(".add").click(function(){
	// 	console.log($(this));
	// 	$(this).text("Remove");
	// 	$(this).toggleClass("add remove");
	//
	// 	// $(this).removeClass("add");
	// 	// $(this).addClass("remove");
	// });
	//
	//
	// $(".remove").click(function(){
	// 	console.log($(this));
	// 	$(this).text("Add Small $13");
	// 	$(this).toggleClass("add remove");
	// 	// $(this).removeClass("remove");
	// 	// $(this).addClass("add");
	// });

	// $('.yellowButton').click(function(){
	// 	$(this).toggleClass('add remove');
	// });
	// $('.add').click(function(){
	// 	$(this).append('<span class="removeButton">remove</span>')
	// })

	$(document).on('click', '.add', function(){
		$(this).toggleClass('add remove');
		$(this).find('.originalText').hide();
		$(this).append("<span class='removeButton'>Remove<span>");
		// var timeout = setTimeout(function(){
		//
		// })
		// setTimeout(changeback, 3000);
	});

	// function changeback(test){
	// 	test.find('.originalText').show();
	// 	test.find('.removeButton').remove();
	// }
	// var hide_after_fadeout = function(){
	//   $('.removeButton').css("display", "none");
	//   $('.originalText').css("opacity", "1");
	// };


	$(document).on('click', '.remove', function(){
		$(this).toggleClass('add remove');
		$(this).find('.originalText').show();
		$(this).find('.removeButton').remove();
	});



});
