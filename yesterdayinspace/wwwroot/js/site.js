// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

const local = "/";
const remote = "https://yis.lga.nz:40443/rdb/";

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
        getEntity(id, local);
        $('#YIS-BioPane').fadeIn();
    });
});

function getEntity(id, location) {

    var url = location + 'GetCC';

    var query = {id: id};
    console.log(query);
    
    $.getJSON(url, query)
        .done(function(json) {
            $.each( json, function( key, val ) {
                // Pull data from the JSON into shorter variables
                console.log("Got item listing ->"); console.log(json);
                var name = json["name"];
				var role = json["role"];
				var altrole = json["altRole"];
                var img = json["bioImg"];
				var bio = json["bioText"];
				
				var s1t = json["social1Type"];
				var s1u = json["social1URL"];
				var s1d = json["social1Display"];
				var s2t = json["social2Type"];
				var s2u = json["social2URL"];
				var s2d = json["social2Display"];
				var s3t = json["social3Type"];
				var s3u = json["social3URL"];
				var s3d = json["social3Display"];
				var s4t = json["social4Type"];
				var s4u = json["social4URL"];
				var s4d = json["social4Display"];
				var s5t = json["social5Type"];
				var s5u = json["social5URL"];
				var s5d = json["social5Display"];
                console.log(name);

                fn = "<b>" + name + "</b>";

				if(role) { fn = fn + "<br />" + role; }
				if(altrole) { fn = fn + "<br />" + altrole; }

				var social = "";
				if(s1t != "none" && s1t != null) { social+= "<li><a href='" + s1u + "'>" + sicon(s1t) + s1d + "</a></li>" }
				if(s2t != "none" && s2t != null) { social+= "<li><a href='" + s2u + "'>" + sicon(s2t) + s2d + "</a></li>" }
				if(s3t != "none" && s3t != null) { social+= "<li><a href='" + s3u + "'>" + sicon(s3t) + s3d + "</a></li>" }
				if(s4t != "none" && s4t != null) { social+= "<li><a href='" + s4u + "'>" + sicon(s4t) + s4d + "</a></li>" }
				if(s5t != "none" && s5t != null) { social+= "<li><a href='" + s5u + "'>" + sicon(s5t) + s5d + "</a></li>" }

                $('#YIS-BioFullImg').attr('src', img);
                $('#YIS-BioName').html(fn);
				$('#YIS-BioInfoText').html(bio);
				$('#YIS-BioInfoSocial').html(social);
            });
		})
		.fail(function(json) {
            getEntity(id, local);
		});
}

function sicon(type) {
	var svg;
	switch (type) {
		case 'facebook':
			svg = '<svg viewBox="0 0 257.71679 257.71876" style="width: 20px; height: 20px; vertical-align: middle; fill: currentColor; margin-right: 5px;" xmlns="http://www.w3.org/2000/svg"><use xlink:href="/images/bio_facebook.svg#Blue_1_"></use></svg>';
			break;

		case 'instagram':
			svg = '<svg viewBox="0 0 95.999002 96" style="width: 20px; height: 20px; vertical-align: middle; fill: currentColor; margin-right: 5px;" xmlns="http://www.w3.org/2000/svg"><use xlink:href="/images/bio_instagram.svg#path4177"></use></svg>';
			break;

		case 'twitter':
			svg = '<svg viewBox="0 0 250 250" style="width: 20px; height: 20px; vertical-align: middle; fill: currentColor; margin-right: 5px;" xmlns="http://www.w3.org/2000/svg"><use xlink:href="/images/bio_twitter.svg#path10"></use></svg>';
			break;

		case 'starnow':
			svg = '<svg viewBox="0 0 100 100" style="width: 20px; height: 20px; vertical-align: middle; fill: currentColor; margin-right: 5px;" xmlns="http://www.w3.org/2000/svg"><use xlink:href="/images/bio_starnow.svg#path22"></use></svg>';
			break;

		case 'tumblr':
			svg = '<svg viewBox="0 0 160.00001 160" style="width: 20px; height: 20px; vertical-align: middle; fill: currentColor; margin-right: 5px;" xmlns="http://www.w3.org/2000/svg"><use xlink:href="/images/bio_tumblr.svg#path78"></use></svg>';
			break;

		case 'wellingtonista':
			svg = '<svg viewBox="0 0 52.916665 52.916668" style="width: 20px; height: 20px; vertical-align: middle; fill: currentColor; margin-right: 5px;" xmlns="http://www.w3.org/2000/svg"><use xlink:href="/images/bio_wellingtonista.svg#layer1"></use></svg>';
			break;

		case 'linkedin':
			svg = '<svg viewBox="0 0 36 36" style="width: 20px; height: 20px; vertical-align: middle; fill: currentColor; margin-right: 5px;" xmlns="http://www.w3.org/2000/svg"><use xlink:href="/images/bio_linkedin.svg#path26"></use></svg>';
			break;

		case 'behance':
			svg = '<svg viewBox="0 0 599.99999 600" style="width: 20px; height: 20px; vertical-align: middle; fill: currentColor; margin-right: 5px;" xmlns="http://www.w3.org/2000/svg"><use xlink:href="/images/bio_behance.svg#rect23"></use></svg>';
			break;

		case 'github':
			svg = '<svg viewBox="0 0 599.99999 600" style="width: 20px; height: 20px; vertical-align: middle; fill: currentColor; margin-right: 5px;" xmlns="http://www.w3.org/2000/svg"><use xlink:href="/images/bio_behance.svg#rect23"></use></svg>';
			break;
	
		default:
			break;
	}
	return svg;
}

function listCC(location) {

    var url = location + 'GetEntity';

    var query = {};
    
    $.getJSON(url, query)
        .done(function(json) {
            $.each( json, function( key, val ) {
                // Pull data from the JSON into shorter variables
                console.log("Got item listing ->"); console.log(json);
                var name = json[key]["name"];
				var role = json[key]["role"];
				var altrole = json[key]["altrole"];
                var img = json[key]["bioimg"];
                var bio = json[key]["bio"];
                console.log(name);

                fn = "<b>" + name + "</b>";

				if(role) { fn = fn + "<br />" + role; }
				if(altrole) { fn = fn + "<br />" + altrole; }

                $('#YIS-BioFullImg').attr('src', img);
                $('#YIS-BioName').html(fn);
                $('#YIS-BioInfo').html(bio);
            });
		})
		.fail(function(json) {
            getEntity(id, local);
		});
}

function getAbout(location) {

    var url = location + 'GetAP';

    var query = {view: 1};
    
    $.getJSON(url, query)
        .done(function(json) {
            $.each( json, function( key, val ) {
                // Pull data from the JSON into shorter variables
                console.log("Got item listing ->"); console.log(json);
                var content = json["content"] + "<hr />";

                $('.body-content').html(content);
            });
		})
		.fail(function(json) {
            getAbout(local);
		});

    
}

function getHome(location) {

	var url = location + 'GetHome';

	console.log("Getting List");
    var query = {
        list: true
    };

    $.getJSON(url, query)
        .done(function(json) {
			console.log("Got item listing ->"); console.log(json);
			var itemsPromo = [];
			var itemsTop = [];
			var itemsNotice = [];
			$.each( json, function( key, val ) {
				// Pull data from the JSON into shorter variables
				var id = json[key]["id"];
				var ti = json[key]["title"];
				var cp = json[key]["caption"];
				var sc = json[key]["section"];
				var so = json[key]["social"];
				var ur = json[key]["url"];
				var th = json[key]["thumb"];

				var loc = "window.location='" + ur + "'";

				switch (sc) {
					case 'promo':
						item = '<li onclick="' + loc + '" class="hp-promo" title="' + cp + '">' +
							"<div class='promo-img' style='background-image: url(" + th + ")'></div>" +
							"<div class='promo-li'>" + sicon(so) +
							"<span>" + ti + "</span>" +
							"<span>›</span>" +
							"</div></li>";
						itemsPromo.push(item);
						break;
			
					case 'top':
						item = '<li onclick="' + loc + '" title="' + cp + '">' +
							sicon(so) +
							"<span>" + ti + "</span>" +
							"<span>›</span>" +
							"</li>";
						itemsTop.push(item);
						break;
			
					case 'notice':
						item = '<li onclick="' + loc + '" title="' + cp + '">' +
							sicon(so) +
							"<span>" + ti + "</span>" +
							"<span>›</span>" +
							"</li>";
						itemsNotice.push(item);
						break;
				
					default:
						break;
				}

				console.log("Pushed item " + id);
			});
			
			$('#HP-Promos').html(itemsPromo.join( "" ));
			$('#HP-Top').html(itemsTop.join( "" ));
			$('#HP-Notices').html(itemsNotice.join( "" ));
			console.log("Printed items to page");
        })
        .fail(function(error) {
			console.log("Failed to retrieve list ->");
			console.log(error);
			console.log("Was returned by AJAX");
    });
}

function getGallery(location) {

    var url = location + 'GetGallery';

    var query = {};

    $.getJSON(url, query)
        .done(function(json) {
			var items = [];
            $.each( json, function( key, val ) {
                // Pull data from the JSON into shorter variables
                var thumburl = json[key]["thumbURL"];
				var url = json[key]["url"];
				var caption = json[key]["caption"];

				item = "<a href='" + url + "' data-fancybox='gallery' data-caption='" + caption + "' title='" + caption + "'>" +
						"<img src='" + thumburl + "' /></a>";

				items.push(item);
			});
			$('#Gallery').html(items.join( "" ));
		})
		.fail(function(json) {
            getGallery(id, local);
		});
}