//ALL PLAYER
$('#play').on('click', function(e) {
	e.preventDefault();
	$("#player")[0].src += "?autoplay=1";
	$('#player').show();
	$('#video-cover').hide();
	$('#play').hide();
})
//MAN PLAYER
$('#play-m').on('click', function(e) {
	e.preventDefault();
	$("#player-m")[0].src += "?autoplay=1";
	$('#player-m').show();
	$('#video-cover-m').hide();
	$('#play-m').hide();
})
//WOMAN PLAYER
$('#play-w').on('click', function(e) {
	e.preventDefault();
	$("#player-w")[0].src += "?autoplay=1";
	$('#player-w').show();
	$('#video-cover-w').hide();
	$('#play-w').hide();
})
//CHILDREN PLAYER
$('#play-c').on('click', function(e) {
	e.preventDefault();
	$("#player-c")[0].src += "?autoplay=1";
	$('#player-c').show();
	$('#video-cover-c').hide();
	$('#play-c').hide();
})
//news-hesader-block
$('#play-news').on('click', function(e) {
	e.preventDefault();
	$("#player-news")[0].src += "?autoplay=1";
	$('#player-news').show();
	$('#video-cover-news').hide();
	$('#play-news').hide();
})
