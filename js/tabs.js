//Javascript Document

$(document).ready(function () {


	$('.tabs').load('tab1.html');

	
	$('.tab1 a').on('click',function (e) {
		
		$('.tabs').hide();

			$('.tabs').load('tab1.html', function(){
				
            $(this).slideDown(2000);
        });


			
	});
	
	
	$('.tab2 a').on('click',function (e) {
		
		$('.tabs').hide();
		
		$('.tabs').load('tab2.html', function(){
            $(this).slideDown(2000);
        });

	});
	
	
	$('.tab3 a').on('click',function (e) {
		
		$('.tabs').hide();
		$('.tabs').load('tab3.html', function(){
            $(this).slideDown(2000);
        });
		

	});
	
	
	$('.tab4 a').on('click',function (e) {
		$('.tabs').hide();
		$('.tabs').load('tab4.html', function(){
            $(this).slideDown(2000);
        });
		

	});
	
});