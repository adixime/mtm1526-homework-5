//Javascript Document
$(document).ready(function () {
	
	var tab1Content;
  
    $('.tabs').load('tab1.html', function (data) {
  	  tab1Content = data;

  	});
  
    $('.tab1 a').on('click',function (e) {
        $('.tabs').hide();
    
   		if (tab1Content) {
        	$('.tabs').html(tab1Content).slideDown(2000);
    	} else {
      	$('.tabs').load('tab1.html', function (data) {
        	$(this).slideDown(2000);
        	tab1Content = data;
         }); 
    }
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

