// INTERFACE //

	$(document).ready(function(){

	  $(".btn").click(function(){
	  	//alert('ok');
	  	var id = $(this).attr('data-id');

	  	// alert(id);
		$(this).parents().find("#"+id).fadeToggle();
	  });
	});


	var docHeight = $(window).height();
	var docWidth = docHeight * 2.56;
	// var imgWidth = $('.fond').width();
	$('.fond').css("height" , docHeight);
	$('#wrapper').css("width" , docHeight * 2.56);

	$('.cont1').css("top" , docHeight * 0.22).css("left" , docWidth * 0.21);
	$('.cont2').css("top" , docHeight * 0.12).css("left" , docWidth * 0.45);
	$('.cont3').css("top" , docHeight * 0.24).css("left" , docWidth * 0.53);
	$('.cont4').css("top" , docHeight * 0.26).css("left" , docWidth * 0.725);
	$('.cont5').css("top" , docHeight * 0.085).css("left" , docWidth * 0.8);
	$('.cont6').css("top" , docHeight * 0.58).css("left" , docWidth * 0.875);



// MENU //
	var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
		showLeft = document.getElementById( 'showLeft' ),
		hideLeft = document.getElementById( 'hideLeft' ),
		body = document.body;

	showLeft.onclick = function() {
		classie.toggle( this, 'active' );
		classie.toggle( menuLeft, 'cbp-spmenu-open' );
		disableOther( 'showLeft' );
	};

	hideLeft.onclick = function() {
		classie.toggle( menuLeft, 'cbp-spmenu-open' );
	};

	function disableOther( button ) {
		if( button === 'hideLeft' ) {
			classie.toggle( menuLeft, 'cbp-spmenu-open' );
		}
	}

//LOADER//