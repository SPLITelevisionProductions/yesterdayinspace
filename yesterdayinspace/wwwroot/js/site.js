// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Shamelessly taken from librarium-sqlite
$(document).ready(function() {
    // We can basically use this code on any circle-section as
    // the attributes are mostly the same. Checks are done in showBio()
    $(".yis-circlesect").on("click","li", function(event){
        event.preventDefault();
        //name = $(this).attr('data-name');
        //char = $(this).attr('data-charname');
        //img = $(this).attr('data-fullimg');
        //bio = $(this).attr('data-bio');
        //showBio(name, char, img, bio);
        var id = $(this).attr('data-id');
        console.log(id);
        getEntity(id);
        $('#YIS-BioPane').fadeIn();
    });
});

function getEntity(id) {
    var query = {id: id};
    console.log(query);
    
    $.getJSON('/GetEntity', query)
        .done(function(json) {
            $.each( json, function( key, val ) {
                // Pull data from the JSON into shorter variables
                console.log("Got item listing ->"); console.log(json);
                var name = json[key]["name"];
				var role = json[key]["role"];
				var altrole = json[key]["altrole"];
                var img = json[key]["image"];
                var bio = json[key]["bio"];
                console.log(name);

                fn = "<b>" + name + "</b>";

				if(role) { fn = fn + "<br />" + role; }
				if(altrole) { fn = fn + "<br />" + altrole; }

                $('#YIS-BioFullImg').attr('src', img);
                $('#YIS-BioName').html(fn);
                $('#YIS-BioInfo').html(bio);
            });
        });
}