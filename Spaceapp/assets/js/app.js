/*Starting Javascript Coding*/
$(document).ready(function(){
	$('li a').click(function(){
		alert("Just Clicked " + $(this).text() + " button.");
		$('li a').removeClass('current');
		$(this).addClass('current');
	});

	$('#hide-banner').click(function(){
		var $this = $(this);
		var txt = $(this).html();
		$( "#view_table" ).toggle( "slow", function() {
			if(txt == 'Hide'){
				$this.html('Show');
				$this.parent().css('border-top','1px solid #000');
			}else{
				$this.html('Hide');
				$this.parent().css('border-top','none');
			}
		});
	});
	
	// Form Validations
        $('form').validate();
});
