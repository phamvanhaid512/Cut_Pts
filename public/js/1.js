$(function() {
	
	// xu ly cho nut .nut click vao 
	$('.nut').click(function(event) {
		 
		 //xử lý class cho noidung
		 $('.noidung').addClass('noidunghienra');

		 // xu ly class cho .momo
		 $('.momo').addClass('momodira');
	});

	//jquery cho nut close 
	$('.nutdong, .momo').click(function(event) {
 		 //xử lý class cho noidung
		 $('.noidung').removeClass('noidunghienra');

		 // xu ly class cho .momo
		 $('.momo').removeClass('momodira');

 	});

	 
});
$(function() {
	//cho tat ca noi dung thu lai 
	$('.ndmotkhoi').slideUp();

	// click vao the h3 
	$('.motkhoi h3').click(function(event) {
		//$('.ndmotkhoi').slideUp();
		console.log('Da chay duoc hieu ung click roi ')
		$(this).next().slideToggle();
		$(this).toggleClass('xanh')
	});
});

 