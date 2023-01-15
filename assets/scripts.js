console.log("Desarrollado por DaniJim#0001. El mayor negrata de la zona <3")
played_sound = false
position = ''

function removeClass() {
	$("#main").removeClass();
	$("#wrapper").removeClass();
}

window.addEventListener('message', function(event) {
	var sound = new Audio('sound.mp3');
	sound.volume = 0.1;

	if (event.data.action == 'open') {
		position = event.data.position;
		message = event.data.message;
		$('#message').html(message);
		$('#ui').css('right', '1%');
		$('#ui').addClass('showright');
		$('#ui').removeClass('hideright');
		$('#wrapper').addClass('content');
		if (played_sound == false) {
			sound.play();
			played_sound = true;
		}

	} else if (event.data.action == 'close') {
			$('#ui').removeClass('showright');
			$('#ui').addClass('hideright');
	}

	played_sound = false;
})

