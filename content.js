$(document).ready(function(){
	$('.signup').submit(function(event) {
		event.preventDefault();
		$('.can, .field, .rubbish, label, .trash, .reset').addClass('dump');
		
		var comment = $('.rubbish').val();
		$(".field").append("<p class='fullword' data-splitting='chars'>" + comment + "</p>");
		Splitting();
		var wordSize = $(".fullword").width();
		$("body").get(0).style.setProperty("--fieldWidth", wordSize + 'px');
		$('.fullword').css({
			'transform' : 'translateX(' + 400 + 'px) skewX(' + (20) + 'deg)'
		});
		$(".char").addClass("sliding");
	});
});

$(".rubbish").on({
	keydown: function(e) {
		if (e.which === 32)
		return false;
	},
	change: function() {
		this.value = this.value.replace(/\s/g, "");
	}
});

$(".reset").click(function(){
	$(".dump").removeClass("dump");
	$( ".fullword" ).remove();
	$(".signup")[0].reset();
})
