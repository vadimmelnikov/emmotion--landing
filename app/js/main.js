// js jquery
$(document).ready(function() {

	$('.slider').slick({
		dots: false,
		infinite: true,
		speed: 300,
		arrows: true,
		slidesToShow: 1,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					dots: true,
				}
			}
		]
	});
	var url = $("#youtube").attr("src");
	$('.video__button').bind('click', function (e) {

		// Prevents the default action to be triggered.
		e.preventDefault();

		// Triggering bPopup when click event is fired
		$('#popup').bPopup({
			opacity: 0.8,
			transitionClose: 'slideUp',
			onOpen: function() {
				$("#youtube").attr("src", url)
			},
			onClose: function() {
				$("#youtube").attr("src", "")
			}

		});

	});

});
