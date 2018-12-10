// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Shamelessly taken from librarium-sqlite
$(document).ready(function() {
	// We can basically use this code on any circle-section as
	// the attributes are mostly the same. Checks are done in showBio()
	$(".yis-circlesect").on("click","li", function(event){
		event.preventDefault();
		name = $(this).attr('data-name');
		char = $(this).attr('data-charname');
		img = $(this).attr('data-fullimg');
		bio = $(this).attr('data-bio');
		showBio(name, char, img, bio);
	});
});

function showBio(name, char, img, bio) {
	var n,c,i,b,fn;
	n = name;
	c = char;
	i = img;
	b = bio;

	fn = "<b>" + n + "</b>";

	if(c) { fn = fn + "<br />" + c; }

	$('#YIS-BioFullImg').attr('src', '/images/profiles/' + i);
	$('#YIS-BioName').html(fn);
	$('#YIS-BioInfo').html(b);
	$('#YIS-BioPane').fadeIn();
}