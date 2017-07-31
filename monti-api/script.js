/* Request a GIF from GIPHY API, and append to HTML element*/
function fetchGif() {
	$('#search').text('Get those Migos');

	$.ajax(
	{
		// GETS an array of 25 GIF objects that match 
		// the search term "otter" (along with two other, non-important objects)

    	url: "https://api.giphy.com/v1/gifs/search?q="+ "Migos"
    		+ "&api_key=0e5367bc85a8457188e4abc1ea7f7a1e",

    	success: function(results){

    		// Select a random number from 0 to 25
    		var randomIndex = Math.floor(Math.random() * 25);

    		// Use that random number to get a random GIF object
        	var gifObject = results.data[randomIndex];

			// Get URL of original unaltered GIF
        	var gifURL = gifObject.images.original.url;

        	// Remove existing element with ID #gif (the first time there is none)
        	$('#gif').remove();

        	// Append new img element (with id #gif)
        	$("#gifSection").append("<img id='gif' src='" + gifURL + "''>");

    	} // End of function that we want to be executed 
    	  // when data is succesfully retrieved

	} 	// End of object that was passed into jQuery's ajax() function call

	); 	// End of ajax() function call

} 		// End of definition for the fetchGif() function



// {
//    "data":
//    [
//        {
//            "type": "gif",
//            "id": "bzXZhOHJZqxi",
//            "slug": "musicchoice-dab-dabbing-bzXZhOHJZqxi",
//            "url": "https://giphy.com/gifs/musicchoice-dab-dabbing-bzXZhOHJZqxi",
//            "bitly_gif_url": "http://gph.is/2oYtoZA",
//            "bitly_url": "http://gph.is/2oYtoZA",
//            "embed_url": "https://giphy.com/embed/bzXZhOHJZqxi",
//            "username": "musicchoice",
//            "source": "musicchoice.com",
//            "rating": "g",
//            "content_url": "",
//            "source_tld": "",
//            "source_post_url": "musicchoice.com",
//            "is_indexable": 0,
//            "import_datetime": "2017-04-21 13:12:37",
//            "trending_datetime": "2017-04-21 17:00:02",
//            "user":
//            {
//                "avatar_url": "https://media.giphy.com/avatars/musicchoice/7P9tsEPixERs.jpg",
//                "banner_url": "https://media.giphy.com/headers/musicchoice/y2pKPXTyfo1p.jpg",
//                "profile_url": "https://giphy.com/musicchoice/",
//                "username": "musicchoice",
//                "display_name": "Music Choice",
//                "twitter": "@musicchoice"
//            },
//            "images":
//            {
//                "fixed_height_still":
//                {
//                    "url": "https://media3.giphy.com/media/bzXZhOHJZqxi/200_s.gif",
//                    "width": "356",
//                    "height": "200",
//                    "size": "48602"
//                },
//                "original_still":
//                {
//                    "url": "https://media3.giphy.com/media/bzXZhOHJZqxi/giphy_s.gif",
//                    "width": "480",
//                    "height": "270",
//                    "size": "87661"
//                },
//                "fixed_width":
//                {
//                    "url": "https://media3.giphy.com/media/bzXZhOHJZqxi/200w.gif",
//                    "width": "200",
//                    "height": "113",
//                    "size": "562014",
//                    "mp4": "https://media3.giphy.com/media/bzXZhOHJZqxi/200w.mp4",
//                    "mp4_size": "106132",
//                    "webp": "https://media3.giphy.com/media/bzXZhOHJZqxi/200w.webp",
//                    "webp_size": "300570"
//                },
//                "fixed_height_small_still":
//                {
//                    "url": "https://media3.giphy.com/media/bzXZhOHJZqxi/100_s.gif",
//                    "width": "178",
//                    "height": "100",
//                    "size": "14484"
//                },
//                "fixed_height_downsampled":
//                {
//                    "url": "https://media3.giphy.com/media/bzXZhOHJZqxi/200_d.gif",
//                    "width": "356",
//                    "height": "200",
//                    "size": "280954",
//                    "webp": "https://media3.giphy.com/media/bzXZhOHJZqxi/200_d.webp",
//                    "webp_size": "93744"
//                },
//                "preview":
//                {
//                    "width": "244",
//                    "height": "136",
//                    "mp4": "https://media3.giphy.com/media/bzXZhOHJZqxi/giphy-preview.mp4",
//                    "mp4_size": "36508"
//                },
//                "fixed_height_small":
//                {
//                    "url": "https://media3.giphy.com/media/bzXZhOHJZqxi/100.gif",
//                    "width": "178",
//                    "height": "100",
//                    "size": "474680",
//                    "mp4": "https://media3.giphy.com/media/bzXZhOHJZqxi/100.mp4",
//                    "mp4_size": "91062",
//                    "webp": "https://media3.giphy.com/media/bzXZhOHJZqxi/100.webp",
//                    "webp_size": "253348"
//                },
//                "downsized_still":
//                {
//                    "url": "https://media3.giphy.com/media/bzXZhOHJZqxi/giphy-downsized_s.gif",
//                    "width": "250",
//                    "height": "140",
//                    "size": "25721"
//                },
//                "downsized":
//                {
//                    "url": "https://media3.giphy.com/media/bzXZhOHJZqxi/giphy-downsized.gif",
//                    "width": "250",
//                    "height": "140",
//                    "size": "860134"
//                },
//                "downsized_large":
//                {
//                    "url": "https://media3.giphy.com/media/bzXZhOHJZqxi/giphy.gif",
//                    "width": "480",
//                    "height": "270",
//                    "size": "3262183"
//                },
//                "fixed_width_small_still":
//                {
//                    "url": "https://media3.giphy.com/media/bzXZhOHJZqxi/100w_s.gif",
//                    "width": "100",
//                    "height": "57",
//                    "size": "5967"
//                },
//                "preview_webp":
//                {
//                    "url": "https://media3.giphy.com/media/bzXZhOHJZqxi/giphy-preview.webp",
//                    "width": "156",
//                    "height": "88",
//                    "size": "48984"
//                },
//                "fixed_width_still":
//                {
//                    "url": "https://media3.giphy.com/media/bzXZhOHJZqxi/200w_s.gif",
//                    "width": "200",
//                    "height": "113",
//                    "size": "17697"
//                },
//                "fixed_width_small":
//                {
//                    "url": "https://media3.giphy.com/media/bzXZhOHJZqxi/100w.gif",
//                    "width": "100",
//                    "height": "57",
//                    "size": "156710",
//                    "mp4": "https://media3.giphy.com/media/bzXZhOHJZqxi/100w.mp4",
//                    "mp4_size": "37966",
//                    "webp": "https://media3.giphy.com/media/bzXZhOHJZqxi/100w.webp",
//                    "webp_size": "110206"
//                },
//                "downsized_small":
//                {
//                    "width": "256",
//                    "height": "144",
//                    "mp4": "https://media3.giphy.com/media/bzXZhOHJZqxi/giphy-downsized-small.mp4",
//                    "mp4_size": "87439"
//                },
//                "fixed_width_downsampled":
//                {
//                    "url": "https://media3.giphy.com/media/bzXZhOHJZqxi/200w_d.gif",
//                    "width": "200",
//                    "height": "113",
//                    "size": "95645",
//                    "webp": "https://media3.giphy.com/media/bzXZhOHJZqxi/200w_d.webp",
//                    "webp_size": "40166"
//                },
//                "downsized_medium":
//                {
//                    "url": "https://media3.giphy.com/media/bzXZhOHJZqxi/giphy.gif",
//                    "width": "480",
//                    "height": "270",
//                    "size": "3262183"
//                },
//                "original":
//                {
//                    "url": "https://media3.giphy.com/media/bzXZhOHJZqxi/giphy.gif",
//                    "width": "480",
//                    "height": "270",
//                    "size": "3262183",
//                    "frames": "45",
//                    "mp4": "https://media3.giphy.com/media/bzXZhOHJZqxi/giphy.mp4",
//                    "mp4_size": "692244",
//                    "webp": "https://media3.giphy.com/media/bzXZhOHJZqxi/giphy.webp",
//                    "webp_size": "1222570",
//                    "hash": "288cb8498bf42220bdd88e2b6527ef09"
//                },
//                "fixed_height":
//                {
//                    "url": "https://media3.giphy.com/media/bzXZhOHJZqxi/200.gif",
//                    "width": "356",
//                    "height": "200",
//                    "size": "1760436",
//                    "mp4": "https://media3.giphy.com/media/bzXZhOHJZqxi/200.mp4",
//                    "mp4_size": "292260",
//                    "webp": "https://media3.giphy.com/media/bzXZhOHJZqxi/200.webp",
//                    "webp_size": "696880"
//                },
//                "looping":
//                {
//                    "mp4": "https://media3.giphy.com/media/bzXZhOHJZqxi/giphy-loop.mp4",
//                    "mp4_size": "3493767"
//                },
//                "original_mp4":
//                {
//                    "width": "480",
//                    "height": "270",
//                    "mp4": "https://media3.giphy.com/media/bzXZhOHJZqxi/giphy.mp4",
//                    "mp4_size": "692244"
//                },
//                "preview_gif":
//                {
//                    "url": "https://media3.giphy.com/media/bzXZhOHJZqxi/giphy-preview.gif",
//                    "width": "137",
//                    "height": "77",
//                    "size": "49404"
//                }
//            }
//        },
//        {
//            "type": "gif",
//            "id": "3oeSAXVKRl3pyk6vwQ",
//            "slug": "dj-khaled-migos-quavo-3oeSAXVKRl3pyk6vwQ",
//            "url": "https://giphy.com/gifs/dj-khaled-migos-quavo-3oeSAXVKRl3pyk6vwQ",
//            "bitly_gif_url": "http://gph.is/2psK5ek",
//            "bitly_url": "http://gph.is/2psK5ek",
//            "embed_url": "https://giphy.com/embed/3oeSAXVKRl3pyk6vwQ",
//            "username": "",
//            "source": "https://www.youtube.com/watch?v=weeI1G46q0o",
//            "rating": "g",
//            "content_url": "",
//            "source_tld": "www.youtube.com",
//            "source_post_url": "https://www.youtube.com/watch?v=weeI1G46q0o",
//            "is_indexable": 0,
//            "import_datetime": "2017-05-09 20:00:19",
//            "trending_datetime": "2017-05-10 05:00:01",
//            "images":
//            {
//                "fixed_height_still":
//                {
//                    "url": "https://media1.giphy.com/media/3oeSAXVKRl3pyk6vwQ/200_s.gif",
//                    "width": "480",
//                    "height": "200",
//                    "size": "63307"
//                },
//                "original_still":
//                {
//                    "url": "https://media1.giphy.com/media/3oeSAXVKRl3pyk6vwQ/giphy_s.gif",
//                    "width": "480",
//                    "height": "200",
//                    "size": "63307"
//                },
//                "fixed_width":
//                {
//                    "url": "https://media1.giphy.com/media/3oeSAXVKRl3pyk6vwQ/200w.gif",
//                    "width": "200",
//                    "height": "84",
//                    "size": "324408",
//                    "mp4": "https://media1.giphy.com/media/3oeSAXVKRl3pyk6vwQ/200w.mp4",
//                    "mp4_size": "57677",
//                    "webp": "https://media1.giphy.com/media/3oeSAXVKRl3pyk6vwQ/200w.webp",
//                    "webp_size": "185750"
//                },
//                "fixed_height_small_still":
//                {
//                    "url": "https://media1.giphy.com/media/3oeSAXVKRl3pyk6vwQ/100_s.gif",
//                    "width": "240",
//                    "height": "100",
//                    "size": "17759"
//                },
//                "fixed_height_downsampled":
//                {
//                    "url": "https://media1.giphy.com/media/3oeSAXVKRl3pyk6vwQ/200_d.gif",
//                    "width": "480",
//                    "height": "200",
//                    "size": "393736",
//                    "webp": "https://media1.giphy.com/media/3oeSAXVKRl3pyk6vwQ/200_d.webp",
//                    "webp_size": "164410"
//                },
//                "preview":
//                {
//                    "width": "186",
//                    "height": "76",
//                    "mp4": "https://media1.giphy.com/media/3oeSAXVKRl3pyk6vwQ/giphy-preview.mp4",
//                    "mp4_size": "45204"
//                },
//                "fixed_height_small":
//                {
//                    "url": "https://media1.giphy.com/media/3oeSAXVKRl3pyk6vwQ/100.gif",
//                    "width": "240",
//                    "height": "100",
//                    "size": "433136",
//                    "mp4": "https://media1.giphy.com/media/3oeSAXVKRl3pyk6vwQ/100.mp4",
//                    "mp4_size": "70998",
//                    "webp": "https://media1.giphy.com/media/3oeSAXVKRl3pyk6vwQ/100.webp",
//                    "webp_size": "240052"
//                },
//                "downsized_still":
//                {
//                    "url": "https://media1.giphy.com/media/3oeSAXVKRl3pyk6vwQ/giphy-downsized_s.gif",
//                    "width": "480",
//                    "height": "200",
//                    "size": "63307"
//                },
//                "downsized":
//                {
//                    "url": "https://media1.giphy.com/media/3oeSAXVKRl3pyk6vwQ/giphy-downsized.gif",
//                    "width": "480",
//                    "height": "200",
//                    "size": "1662877"
//                },
//                "downsized_large":
//                {
//                    "url": "https://media1.giphy.com/media/3oeSAXVKRl3pyk6vwQ/giphy.gif",
//                    "width": "480",
//                    "height": "200",
//                    "size": "1662877"
//                },
//                "fixed_width_small_still":
//                {
//                    "url": "https://media1.giphy.com/media/3oeSAXVKRl3pyk6vwQ/100w_s.gif",
//                    "width": "100",
//                    "height": "42",
//                    "size": "4543"
//                },
//                "fixed_width_still":
//                {
//                    "url": "https://media1.giphy.com/media/3oeSAXVKRl3pyk6vwQ/200w_s.gif",
//                    "width": "200",
//                    "height": "84",
//                    "size": "13877"
//                },
//                "fixed_width_small":
//                {
//                    "url": "https://media1.giphy.com/media/3oeSAXVKRl3pyk6vwQ/100w.gif",
//                    "width": "100",
//                    "height": "42",
//                    "size": "83601",
//                    "mp4": "https://media1.giphy.com/media/3oeSAXVKRl3pyk6vwQ/100w.mp4",
//                    "mp4_size": "18289",
//                    "webp": "https://media1.giphy.com/media/3oeSAXVKRl3pyk6vwQ/100w.webp",
//                    "webp_size": "61446"
//                },
//                "downsized_small":
//                {
//                    "width": "432",
//                    "height": "180",
//                    "mp4": "https://media1.giphy.com/media/3oeSAXVKRl3pyk6vwQ/giphy-downsized-small.mp4",
//                    "mp4_size": "151327"
//                },
//                "fixed_width_downsampled":
//                {
//                    "url": "https://media1.giphy.com/media/3oeSAXVKRl3pyk6vwQ/200w_d.gif",
//                    "width": "200",
//                    "height": "84",
//                    "size": "82636",
//                    "webp": "https://media1.giphy.com/media/3oeSAXVKRl3pyk6vwQ/200w_d.webp",
//                    "webp_size": "40816"
//                },
//                "downsized_medium":
//                {
//                    "url": "https://media1.giphy.com/media/3oeSAXVKRl3pyk6vwQ/giphy.gif",
//                    "width": "480",
//                    "height": "200",
//                    "size": "1662877"
//                },
//                "original":
//                {
//                    "url": "https://media1.giphy.com/media/3oeSAXVKRl3pyk6vwQ/giphy.gif",
//                    "width": "480",
//                    "height": "200",
//                    "size": "1662877",
//                    "frames": "27",
//                    "mp4": "https://media1.giphy.com/media/3oeSAXVKRl3pyk6vwQ/giphy.mp4",
//                    "mp4_size": "207641",
//                    "webp": "https://media1.giphy.com/media/3oeSAXVKRl3pyk6vwQ/giphy.webp",
//                    "webp_size": "740846",
//                    "hash": "55bdf8dd0c526bf9dce625ec6fb5c8be"
//                },
//                "fixed_height":
//                {
//                    "url": "https://media1.giphy.com/media/3oeSAXVKRl3pyk6vwQ/200.gif",
//                    "width": "480",
//                    "height": "200",
//                    "size": "1662877",
//                    "mp4": "https://media1.giphy.com/media/3oeSAXVKRl3pyk6vwQ/200.mp4",
//                    "mp4_size": "180698",
//                    "webp": "https://media1.giphy.com/media/3oeSAXVKRl3pyk6vwQ/200.webp",
//                    "webp_size": "740846"
//                },
//                "hd":
//                {
//                    "width": "1284",
//                    "height": "534",
//                    "mp4": "https://media1.giphy.com/media/3oeSAXVKRl3pyk6vwQ/giphy-hd.mp4",
//                    "mp4_size": "676809"
//                },
//                "looping":
//                {
//                    "mp4": "https://media1.giphy.com/media/3oeSAXVKRl3pyk6vwQ/giphy-loop.mp4",
//                    "mp4_size": "1472670"
//                },
//                "original_mp4":
//                {
//                    "width": "480",
//                    "height": "200",
//                    "mp4": "https://media1.giphy.com/media/3oeSAXVKRl3pyk6vwQ/giphy.mp4",
//                    "mp4_size": "207641"
//                }
//            }
//        },
//        {
//            "type": "gif",
//            "id": "9Ma22CCxAaimk",
//            "slug": "musicchoice-migos-quavo-9Ma22CCxAaimk",
//            "url": "https://giphy.com/gifs/musicchoice-migos-quavo-9Ma22CCxAaimk",
//            "bitly_gif_url": "http://gph.is/2oReVjC",
//            "bitly_url": "http://gph.is/2oReVjC",
//            "embed_url": "https://giphy.com/embed/9Ma22CCxAaimk",
//            "username": "musicchoice",
//            "source": "musicchoice.com",
//            "rating": "g",
//            "content_url": "",
//            "user":
//            {
//                "avatar_url": "https://media4.giphy.com/avatars/musicchoice/7P9tsEPixERs.jpg",
//                "banner_url": "https://media4.giphy.com/headers/musicchoice/y2pKPXTyfo1p.jpg",
//                "profile_url": "https://giphy.com/musicchoice/",
//                "username": "musicchoice",
//                "display_name": "Music Choice",
//                "twitter": "@musicchoice"
//            },
//            "source_tld": "",
//            "source_post_url": "musicchoice.com",
//            "is_indexable": 0,
//            "import_datetime": "2017-04-21 13:05:47",
//            "trending_datetime": "0000-00-00 00:00:00",
//            "images":
//            {
//                "fixed_height":
//                {
//                    "url": "https://media3.giphy.com/media/9Ma22CCxAaimk/200.gif",
//                    "width": "356",
//                    "height": "200",
//                    "size": "1233952",
//                    "mp4": "https://media3.giphy.com/media/9Ma22CCxAaimk/200.mp4",
//                    "mp4_size": "214713",
//                    "webp": "https://media3.giphy.com/media/9Ma22CCxAaimk/200.webp",
//                    "webp_size": "419488"
//                },
//                "fixed_height_still":
//                {
//                    "url": "https://media3.giphy.com/media/9Ma22CCxAaimk/200_s.gif",
//                    "width": "356",
//                    "height": "200",
//                    "size": "49359"
//                },
//                "fixed_height_downsampled":
//                {
//                    "url": "https://media3.giphy.com/media/9Ma22CCxAaimk/200_d.gif",
//                    "width": "356",
//                    "height": "200",
//                    "size": "289912",
//                    "webp": "https://media3.giphy.com/media/9Ma22CCxAaimk/200_d.webp",
//                    "webp_size": "89844"
//                },
//                "fixed_width":
//                {
//                    "url": "https://media3.giphy.com/media/9Ma22CCxAaimk/200w.gif",
//                    "width": "200",
//                    "height": "113",
//                    "size": "406879",
//                    "mp4": "https://media3.giphy.com/media/9Ma22CCxAaimk/200w.mp4",
//                    "mp4_size": "81275",
//                    "webp": "https://media3.giphy.com/media/9Ma22CCxAaimk/200w.webp",
//                    "webp_size": "181216"
//                },
//                "fixed_width_still":
//                {
//                    "url": "https://media3.giphy.com/media/9Ma22CCxAaimk/200w_s.gif",
//                    "width": "200",
//                    "height": "113",
//                    "size": "17793"
//                },
//                "fixed_width_downsampled":
//                {
//                    "url": "https://media3.giphy.com/media/9Ma22CCxAaimk/200w_d.gif",
//                    "width": "200",
//                    "height": "113",
//                    "size": "101116",
//                    "webp": "https://media3.giphy.com/media/9Ma22CCxAaimk/200w_d.webp",
//                    "webp_size": "38668"
//                },
//                "fixed_height_small":
//                {
//                    "url": "https://media3.giphy.com/media/9Ma22CCxAaimk/100.gif",
//                    "width": "178",
//                    "height": "100",
//                    "size": "336321",
//                    "mp4": "https://media3.giphy.com/media/9Ma22CCxAaimk/100.mp4",
//                    "mp4_size": "71196",
//                    "webp": "https://media3.giphy.com/media/9Ma22CCxAaimk/100.webp",
//                    "webp_size": "152788"
//                },
//                "fixed_height_small_still":
//                {
//                    "url": "https://media3.giphy.com/media/9Ma22CCxAaimk/100_s.gif",
//                    "width": "178",
//                    "height": "100",
//                    "size": "14710"
//                },
//                "fixed_width_small":
//                {
//                    "url": "https://media3.giphy.com/media/9Ma22CCxAaimk/100w.gif",
//                    "width": "100",
//                    "height": "57",
//                    "size": "114072",
//                    "mp4": "https://media3.giphy.com/media/9Ma22CCxAaimk/100w.mp4",
//                    "mp4_size": "30229",
//                    "webp": "https://media3.giphy.com/media/9Ma22CCxAaimk/100w.webp",
//                    "webp_size": "67218"
//                },
//                "fixed_width_small_still":
//                {
//                    "url": "https://media3.giphy.com/media/9Ma22CCxAaimk/100w_s.gif",
//                    "width": "100",
//                    "height": "57",
//                    "size": "6063"
//                },
//                "downsized":
//                {
//                    "url": "https://media3.giphy.com/media/9Ma22CCxAaimk/giphy-downsized.gif",
//                    "width": "250",
//                    "height": "140",
//                    "size": "618177"
//                },
//                "downsized_still":
//                {
//                    "url": "https://media3.giphy.com/media/9Ma22CCxAaimk/giphy-downsized_s.gif",
//                    "width": "250",
//                    "height": "140",
//                    "size": "25967"
//                },
//                "downsized_large":
//                {
//                    "url": "https://media3.giphy.com/media/9Ma22CCxAaimk/giphy.gif",
//                    "width": "480",
//                    "height": "270",
//                    "size": "2244878"
//                },
//                "downsized_medium":
//                {
//                    "url": "https://media3.giphy.com/media/9Ma22CCxAaimk/giphy.gif",
//                    "width": "480",
//                    "height": "270",
//                    "size": "2244878"
//                },
//                "original":
//                {
//                    "url": "https://media3.giphy.com/media/9Ma22CCxAaimk/giphy.gif",
//                    "width": "480",
//                    "height": "270",
//                    "size": "2244878",
//                    "frames": "28",
//                    "mp4": "https://media4.giphy.com/media/9Ma22CCxAaimk/giphy.mp4",
//                    "mp4_size": "467250",
//                    "webp": "https://media3.giphy.com/media/9Ma22CCxAaimk/giphy.webp",
//                    "webp_size": "735740",
//                    "hash": "092300b6f20b87b6fd4bc94e3b50f4a1"
//                },
//                "original_still":
//                {
//                    "url": "https://media3.giphy.com/media/9Ma22CCxAaimk/giphy_s.gif",
//                    "width": "480",
//                    "height": "270",
//                    "size": "87600"
//                },
//                "looping":
//                {
//                    "mp4": "https://media3.giphy.com/media/9Ma22CCxAaimk/giphy-loop.mp4",
//                    "mp4_size": "3671254"
//                },
//                "original_mp4":
//                {
//                    "mp4": "https://media3.giphy.com/media/9Ma22CCxAaimk/giphy.mp4",
//                    "mp4_size": "467250",
//                    "width": "480",
//                    "height": "270"
//                },
//                "preview":
//                {
//                    "mp4": "https://media3.giphy.com/media/9Ma22CCxAaimk/giphy-preview.mp4",
//                    "mp4_size": "43029",
//                    "width": "192",
//                    "height": "108"
//                },
//                "downsized_small":
//                {
//                    "mp4": "https://media3.giphy.com/media/9Ma22CCxAaimk/giphy-downsized-small.mp4",
//                    "mp4_size": "88930",
//                    "width": "312",
//                    "height": "176"
//                },
//                "preview_gif":
//                {
//                    "url": "https://media3.giphy.com/media/9Ma22CCxAaimk/giphy-preview.gif",
//                    "width": "119",
//                    "height": "67",
//                    "size": "47841"
//                },
//                "preview_webp":
//                {
//                    "url": "https://media3.giphy.com/media/9Ma22CCxAaimk/giphy-preview.webp",
//                    "width": "160",
//                    "height": "90",
//                    "size": "49334"
//                }
//            }
//        },
//        {
//            "type": "gif",
//            "id": "3oKIPbTpHCoqiRR7VK",
//            "slug": "2chainz-2-chainz-migos-3oKIPbTpHCoqiRR7VK",
//            "url": "https://giphy.com/gifs/2chainz-2-chainz-migos-3oKIPbTpHCoqiRR7VK",
//            "bitly_gif_url": "",
//            "bitly_url": "",
//            "embed_url": "https://giphy.com/embed/3oKIPbTpHCoqiRR7VK",
//            "username": "2chainz",
//            "source": "http://smarturl.it/BlueCheeseVid ",
//            "rating": "g",
//            "content_url": "",
//            "source_tld": "smarturl.it",
//            "source_post_url": "http://smarturl.it/BlueCheeseVid ",
//            "is_indexable": 0,
//            "import_datetime": "2017-06-16 23:50:37",
//            "trending_datetime": "0001-12-30 00:00:00",
//            "user":
//            {
//                "avatar_url": "https://media.giphy.com/avatars/2chainz/bowOfehzLVkz.jpg",
//                "banner_url": "",
//                "profile_url": "https://giphy.com/2chainz/",
//                "username": "2chainz",
//                "display_name": "2 Chainz",
//                "twitter": "@2chainz"
//            },
//            "images":
//            {
//                "fixed_height_still":
//                {
//                    "url": "https://media3.giphy.com/media/3oKIPbTpHCoqiRR7VK/200_s.gif",
//                    "width": "352",
//                    "height": "200",
//                    "size": "26774"
//                },
//                "original_still":
//                {
//                    "url": "https://media3.giphy.com/media/3oKIPbTpHCoqiRR7VK/giphy_s.gif",
//                    "width": "480",
//                    "height": "273",
//                    "size": "51086"
//                },
//                "fixed_width":
//                {
//                    "url": "https://media3.giphy.com/media/3oKIPbTpHCoqiRR7VK/200w.gif",
//                    "width": "200",
//                    "height": "114",
//                    "size": "378605",
//                    "mp4": "https://media3.giphy.com/media/3oKIPbTpHCoqiRR7VK/200w.mp4",
//                    "mp4_size": "79574",
//                    "webp": "https://media3.giphy.com/media/3oKIPbTpHCoqiRR7VK/200w.webp",
//                    "webp_size": "116958"
//                },
//                "fixed_height_small_still":
//                {
//                    "url": "https://media3.giphy.com/media/3oKIPbTpHCoqiRR7VK/100_s.gif",
//                    "width": "176",
//                    "height": "100",
//                    "size": "7883"
//                },
//                "fixed_height_downsampled":
//                {
//                    "url": "https://media3.giphy.com/media/3oKIPbTpHCoqiRR7VK/200_d.gif",
//                    "width": "352",
//                    "height": "200",
//                    "size": "171454",
//                    "webp": "https://media3.giphy.com/media/3oKIPbTpHCoqiRR7VK/200_d.webp",
//                    "webp_size": "45448"
//                },
//                "preview":
//                {
//                    "width": "278",
//                    "height": "158",
//                    "mp4": "https://media3.giphy.com/media/3oKIPbTpHCoqiRR7VK/giphy-preview.mp4",
//                    "mp4_size": "42888"
//                },
//                "fixed_height_small":
//                {
//                    "url": "https://media3.giphy.com/media/3oKIPbTpHCoqiRR7VK/100.gif",
//                    "width": "176",
//                    "height": "100",
//                    "size": "306896",
//                    "mp4": "https://media3.giphy.com/media/3oKIPbTpHCoqiRR7VK/100.mp4",
//                    "mp4_size": "62112",
//                    "webp": "https://media3.giphy.com/media/3oKIPbTpHCoqiRR7VK/100.webp",
//                    "webp_size": "97862"
//                },
//                "downsized_still":
//                {
//                    "url": "https://media3.giphy.com/media/3oKIPbTpHCoqiRR7VK/giphy-downsized_s.gif",
//                    "width": "250",
//                    "height": "142",
//                    "size": "13939"
//                },
//                "downsized":
//                {
//                    "url": "https://media3.giphy.com/media/3oKIPbTpHCoqiRR7VK/giphy-downsized.gif",
//                    "width": "250",
//                    "height": "142",
//                    "size": "558058"
//                },
//                "downsized_large":
//                {
//                    "url": "https://media3.giphy.com/media/3oKIPbTpHCoqiRR7VK/giphy.gif",
//                    "width": "480",
//                    "height": "273",
//                    "size": "2154473"
//                },
//                "fixed_width_small_still":
//                {
//                    "url": "https://media3.giphy.com/media/3oKIPbTpHCoqiRR7VK/100w_s.gif",
//                    "width": "100",
//                    "height": "57",
//                    "size": "3256"
//                },
//                "preview_webp":
//                {
//                    "url": "https://media3.giphy.com/media/3oKIPbTpHCoqiRR7VK/giphy-preview.webp",
//                    "width": "243",
//                    "height": "138",
//                    "size": "49860"
//                },
//                "fixed_width_still":
//                {
//                    "url": "https://media3.giphy.com/media/3oKIPbTpHCoqiRR7VK/200w_s.gif",
//                    "width": "200",
//                    "height": "114",
//                    "size": "9538"
//                },
//                "fixed_width_small":
//                {
//                    "url": "https://media3.giphy.com/media/3oKIPbTpHCoqiRR7VK/100w.gif",
//                    "width": "100",
//                    "height": "57",
//                    "size": "126001",
//                    "mp4": "https://media3.giphy.com/media/3oKIPbTpHCoqiRR7VK/100w.mp4",
//                    "mp4_size": "29879",
//                    "webp": "https://media3.giphy.com/media/3oKIPbTpHCoqiRR7VK/100w.webp",
//                    "webp_size": "47966"
//                },
//                "downsized_small":
//                {
//                    "width": "384",
//                    "height": "218",
//                    "mp4": "https://media3.giphy.com/media/3oKIPbTpHCoqiRR7VK/giphy-downsized-small.mp4",
//                    "mp4_size": "109855"
//                },
//                "fixed_width_downsampled":
//                {
//                    "url": "https://media3.giphy.com/media/3oKIPbTpHCoqiRR7VK/200w_d.gif",
//                    "width": "200",
//                    "height": "114",
//                    "size": "59413",
//                    "webp": "https://media3.giphy.com/media/3oKIPbTpHCoqiRR7VK/200w_d.webp",
//                    "webp_size": "20678"
//                },
//                "downsized_medium":
//                {
//                    "url": "https://media3.giphy.com/media/3oKIPbTpHCoqiRR7VK/giphy.gif",
//                    "width": "480",
//                    "height": "273",
//                    "size": "2154473"
//                },
//                "original":
//                {
//                    "url": "https://media3.giphy.com/media/3oKIPbTpHCoqiRR7VK/giphy.gif",
//                    "width": "480",
//                    "height": "273",
//                    "size": "2154473",
//                    "frames": "33",
//                    "mp4": "https://media3.giphy.com/media/3oKIPbTpHCoqiRR7VK/giphy.mp4",
//                    "mp4_size": "348594",
//                    "webp": "https://media3.giphy.com/media/3oKIPbTpHCoqiRR7VK/giphy.webp",
//                    "webp_size": "428866",
//                    "hash": "3c951c2622baf3e74f73ade13717b258"
//                },
//                "fixed_height":
//                {
//                    "url": "https://media3.giphy.com/media/3oKIPbTpHCoqiRR7VK/200.gif",
//                    "width": "352",
//                    "height": "200",
//                    "size": "1056367",
//                    "mp4": "https://media3.giphy.com/media/3oKIPbTpHCoqiRR7VK/200.mp4",
//                    "mp4_size": "176943",
//                    "webp": "https://media3.giphy.com/media/3oKIPbTpHCoqiRR7VK/200.webp",
//                    "webp_size": "244294"
//                },
//                "hd":
//                {
//                    "width": "1408",
//                    "height": "798",
//                    "mp4": "https://media3.giphy.com/media/3oKIPbTpHCoqiRR7VK/giphy-hd.mp4",
//                    "mp4_size": "1900546"
//                },
//                "looping":
//                {
//                    "mp4": "https://media3.giphy.com/media/3oKIPbTpHCoqiRR7VK/giphy-loop.mp4",
//                    "mp4_size": "2317746"
//                },
//                "original_mp4":
//                {
//                    "width": "480",
//                    "height": "272",
//                    "mp4": "https://media3.giphy.com/media/3oKIPbTpHCoqiRR7VK/giphy.mp4",
//                    "mp4_size": "348594"
//                },
//                "preview_gif":
//                {
//                    "url": "https://media3.giphy.com/media/3oKIPbTpHCoqiRR7VK/giphy-preview.gif",
//                    "width": "151",
//                    "height": "86",
//                    "size": "49978"
//                }
//            }
//        },
//        {
//            "type": "gif",
//            "id": "26FmR2Nb2ab9EANpK",
//            "slug": "2chainz-2-chainz-migos-26FmR2Nb2ab9EANpK",
//            "url": "https://giphy.com/gifs/2chainz-2-chainz-migos-26FmR2Nb2ab9EANpK",
//            "bitly_gif_url": "",
//            "bitly_url": "",
//            "embed_url": "https://giphy.com/embed/26FmR2Nb2ab9EANpK",
//            "username": "2chainz",
//            "source": "http://smarturl.it/BlueCheeseVid ",
//            "rating": "g",
//            "content_url": "",
//            "source_tld": "smarturl.it",
//            "source_post_url": "http://smarturl.it/BlueCheeseVid ",
//            "is_indexable": 0,
//            "import_datetime": "2017-06-16 23:50:48",
//            "trending_datetime": "0001-12-30 00:00:00",
//            "user":
//            {
//                "avatar_url": "https://media.giphy.com/avatars/2chainz/bowOfehzLVkz.jpg",
//                "banner_url": "",
//                "profile_url": "https://giphy.com/2chainz/",
//                "username": "2chainz",
//                "display_name": "2 Chainz",
//                "twitter": "@2chainz"
//            },
//            "images":
//            {
//                "fixed_height_still":
//                {
//                    "url": "https://media1.giphy.com/media/26FmR2Nb2ab9EANpK/200_s.gif",
//                    "width": "375",
//                    "height": "200",
//                    "size": "48629"
//                },
//                "original_still":
//                {
//                    "url": "https://media1.giphy.com/media/26FmR2Nb2ab9EANpK/giphy_s.gif",
//                    "width": "480",
//                    "height": "256",
//                    "size": "76800"
//                },
//                "fixed_width":
//                {
//                    "url": "https://media1.giphy.com/media/26FmR2Nb2ab9EANpK/200w.gif",
//                    "width": "200",
//                    "height": "107",
//                    "size": "305708",
//                    "mp4": "https://media1.giphy.com/media/26FmR2Nb2ab9EANpK/200w.mp4",
//                    "mp4_size": "62524",
//                    "webp": "https://media1.giphy.com/media/26FmR2Nb2ab9EANpK/200w.webp",
//                    "webp_size": "95888"
//                },
//                "fixed_height_small_still":
//                {
//                    "url": "https://media1.giphy.com/media/26FmR2Nb2ab9EANpK/100_s.gif",
//                    "width": "188",
//                    "height": "100",
//                    "size": "13910"
//                },
//                "fixed_height_downsampled":
//                {
//                    "url": "https://media1.giphy.com/media/26FmR2Nb2ab9EANpK/200_d.gif",
//                    "width": "375",
//                    "height": "200",
//                    "size": "289180",
//                    "webp": "https://media1.giphy.com/media/26FmR2Nb2ab9EANpK/200_d.webp",
//                    "webp_size": "81880"
//                },
//                "preview":
//                {
//                    "width": "195",
//                    "height": "104",
//                    "mp4": "https://media1.giphy.com/media/26FmR2Nb2ab9EANpK/giphy-preview.mp4",
//                    "mp4_size": "34995"
//                },
//                "fixed_height_small":
//                {
//                    "url": "https://media1.giphy.com/media/26FmR2Nb2ab9EANpK/100.gif",
//                    "width": "188",
//                    "height": "100",
//                    "size": "272178",
//                    "mp4": "https://media1.giphy.com/media/26FmR2Nb2ab9EANpK/100.mp4",
//                    "mp4_size": "92890",
//                    "webp": "https://media1.giphy.com/media/26FmR2Nb2ab9EANpK/100.webp",
//                    "webp_size": "85308"
//                },
//                "downsized_still":
//                {
//                    "url": "https://media1.giphy.com/media/26FmR2Nb2ab9EANpK/giphy-downsized_s.gif",
//                    "width": "480",
//                    "height": "256",
//                    "size": "76800"
//                },
//                "downsized":
//                {
//                    "url": "https://media1.giphy.com/media/26FmR2Nb2ab9EANpK/giphy-downsized.gif",
//                    "width": "480",
//                    "height": "256",
//                    "size": "1566274"
//                },
//                "downsized_large":
//                {
//                    "url": "https://media1.giphy.com/media/26FmR2Nb2ab9EANpK/giphy.gif",
//                    "width": "480",
//                    "height": "256",
//                    "size": "1566274"
//                },
//                "fixed_width_small_still":
//                {
//                    "url": "https://media1.giphy.com/media/26FmR2Nb2ab9EANpK/100w_s.gif",
//                    "width": "100",
//                    "height": "54",
//                    "size": "5108"
//                },
//                "preview_webp":
//                {
//                    "url": "https://media1.giphy.com/media/26FmR2Nb2ab9EANpK/giphy-preview.webp",
//                    "width": "180",
//                    "height": "96",
//                    "size": "47624"
//                },
//                "fixed_width_still":
//                {
//                    "url": "https://media1.giphy.com/media/26FmR2Nb2ab9EANpK/200w_s.gif",
//                    "width": "200",
//                    "height": "107",
//                    "size": "15775"
//                },
//                "fixed_width_small":
//                {
//                    "url": "https://media1.giphy.com/media/26FmR2Nb2ab9EANpK/100w.gif",
//                    "width": "100",
//                    "height": "54",
//                    "size": "97143",
//                    "mp4": "https://media1.giphy.com/media/26FmR2Nb2ab9EANpK/100w.mp4",
//                    "mp4_size": "22488",
//                    "webp": "https://media1.giphy.com/media/26FmR2Nb2ab9EANpK/100w.webp",
//                    "webp_size": "35944"
//                },
//                "downsized_small":
//                {
//                    "width": "397",
//                    "height": "212",
//                    "mp4": "https://media1.giphy.com/media/26FmR2Nb2ab9EANpK/giphy-downsized-small.mp4",
//                    "mp4_size": "101684"
//                },
//                "fixed_width_downsampled":
//                {
//                    "url": "https://media1.giphy.com/media/26FmR2Nb2ab9EANpK/200w_d.gif",
//                    "width": "200",
//                    "height": "107",
//                    "size": "89500",
//                    "webp": "https://media1.giphy.com/media/26FmR2Nb2ab9EANpK/200w_d.webp",
//                    "webp_size": "31476"
//                },
//                "downsized_medium":
//                {
//                    "url": "https://media1.giphy.com/media/26FmR2Nb2ab9EANpK/giphy.gif",
//                    "width": "480",
//                    "height": "256",
//                    "size": "1566274"
//                },
//                "original":
//                {
//                    "url": "https://media1.giphy.com/media/26FmR2Nb2ab9EANpK/giphy.gif",
//                    "width": "480",
//                    "height": "256",
//                    "size": "1566274",
//                    "frames": "19",
//                    "mp4": "https://media1.giphy.com/media/26FmR2Nb2ab9EANpK/giphy.mp4",
//                    "mp4_size": "288248",
//                    "webp": "https://media1.giphy.com/media/26FmR2Nb2ab9EANpK/giphy.webp",
//                    "webp_size": "383292",
//                    "hash": "c27ce0348434b0e6db212ee8114bd8da"
//                },
//                "fixed_height":
//                {
//                    "url": "https://media1.giphy.com/media/26FmR2Nb2ab9EANpK/200.gif",
//                    "width": "375",
//                    "height": "200",
//                    "size": "960305",
//                    "mp4": "https://media1.giphy.com/media/26FmR2Nb2ab9EANpK/200.mp4",
//                    "mp4_size": "166231",
//                    "webp": "https://media1.giphy.com/media/26FmR2Nb2ab9EANpK/200.webp",
//                    "webp_size": "240370"
//                },
//                "hd":
//                {
//                    "width": "1500",
//                    "height": "800",
//                    "mp4": "https://media1.giphy.com/media/26FmR2Nb2ab9EANpK/giphy-hd.mp4",
//                    "mp4_size": "2427227"
//                },
//                "looping":
//                {
//                    "mp4": "https://media1.giphy.com/media/26FmR2Nb2ab9EANpK/giphy-loop.mp4",
//                    "mp4_size": "3601957"
//                },
//                "original_mp4":
//                {
//                    "width": "480",
//                    "height": "256",
//                    "mp4": "https://media1.giphy.com/media/26FmR2Nb2ab9EANpK/giphy.mp4",
//                    "mp4_size": "288248"
//                },
//                "preview_gif":
//                {
//                    "url": "https://media1.giphy.com/media/26FmR2Nb2ab9EANpK/giphy-preview.gif",
//                    "width": "116",
//                    "height": "62",
//                    "size": "47506"
//                }
//            }
//        },
//        {
//            "type": "gif",
//            "id": "26lCO2s56wKwOCMwg",
//            "slug": "dj-khaled-migos-quavo-26lCO2s56wKwOCMwg",
//            "url": "https://giphy.com/gifs/dj-khaled-migos-quavo-26lCO2s56wKwOCMwg",
//            "bitly_gif_url": "http://gph.is/2phEmwE",
//            "bitly_url": "http://gph.is/2phEmwE",
//            "embed_url": "https://giphy.com/embed/26lCO2s56wKwOCMwg",
//            "username": "",
//            "source": "https://www.youtube.com/watch?v=weeI1G46q0o",
//            "rating": "g",
//            "content_url": "",
//            "source_tld": "www.youtube.com",
//            "source_post_url": "https://www.youtube.com/watch?v=weeI1G46q0o",
//            "is_indexable": 0,
//            "import_datetime": "2017-05-09 20:00:09",
//            "trending_datetime": "0000-00-00 00:00:00",
//            "images":
//            {
//                "fixed_height":
//                {
//                    "url": "https://media3.giphy.com/media/26lCO2s56wKwOCMwg/200.gif",
//                    "width": "480",
//                    "height": "200",
//                    "size": "613669",
//                    "mp4": "https://media3.giphy.com/media/26lCO2s56wKwOCMwg/200.mp4",
//                    "mp4_size": "131289",
//                    "webp": "https://media3.giphy.com/media/26lCO2s56wKwOCMwg/200.webp",
//                    "webp_size": "215980"
//                },
//                "fixed_height_still":
//                {
//                    "url": "https://media3.giphy.com/media/26lCO2s56wKwOCMwg/200_s.gif",
//                    "width": "480",
//                    "height": "200",
//                    "size": "55811"
//                },
//                "fixed_height_downsampled":
//                {
//                    "url": "https://media3.giphy.com/media/26lCO2s56wKwOCMwg/200_d.gif",
//                    "width": "480",
//                    "height": "200",
//                    "size": "329684",
//                    "webp": "https://media3.giphy.com/media/26lCO2s56wKwOCMwg/200_d.webp",
//                    "webp_size": "117964"
//                },
//                "fixed_width":
//                {
//                    "url": "https://media3.giphy.com/media/26lCO2s56wKwOCMwg/200w.gif",
//                    "width": "200",
//                    "height": "84",
//                    "size": "129641",
//                    "mp4": "https://media3.giphy.com/media/26lCO2s56wKwOCMwg/200w.mp4",
//                    "mp4_size": "42502",
//                    "webp": "https://media3.giphy.com/media/26lCO2s56wKwOCMwg/200w.webp",
//                    "webp_size": "57812"
//                },
//                "fixed_width_still":
//                {
//                    "url": "https://media3.giphy.com/media/26lCO2s56wKwOCMwg/200w_s.gif",
//                    "width": "200",
//                    "height": "84",
//                    "size": "13040"
//                },
//                "fixed_width_downsampled":
//                {
//                    "url": "https://media3.giphy.com/media/26lCO2s56wKwOCMwg/200w_d.gif",
//                    "width": "200",
//                    "height": "84",
//                    "size": "72007",
//                    "webp": "https://media3.giphy.com/media/26lCO2s56wKwOCMwg/200w_d.webp",
//                    "webp_size": "31676"
//                },
//                "fixed_height_small":
//                {
//                    "url": "https://media3.giphy.com/media/26lCO2s56wKwOCMwg/100.gif",
//                    "width": "240",
//                    "height": "100",
//                    "size": "164798",
//                    "mp4": "https://media3.giphy.com/media/26lCO2s56wKwOCMwg/100.mp4",
//                    "mp4_size": "52586",
//                    "webp": "https://media3.giphy.com/media/26lCO2s56wKwOCMwg/100.webp",
//                    "webp_size": "72138"
//                },
//                "fixed_height_small_still":
//                {
//                    "url": "https://media3.giphy.com/media/26lCO2s56wKwOCMwg/100_s.gif",
//                    "width": "240",
//                    "height": "100",
//                    "size": "16279"
//                },
//                "fixed_width_small":
//                {
//                    "url": "https://media3.giphy.com/media/26lCO2s56wKwOCMwg/100w.gif",
//                    "width": "100",
//                    "height": "42",
//                    "size": "35478",
//                    "mp4": "https://media3.giphy.com/media/26lCO2s56wKwOCMwg/100w.mp4",
//                    "mp4_size": "14560",
//                    "webp": "https://media3.giphy.com/media/26lCO2s56wKwOCMwg/100w.webp",
//                    "webp_size": "20380"
//                },
//                "fixed_width_small_still":
//                {
//                    "url": "https://media3.giphy.com/media/26lCO2s56wKwOCMwg/100w_s.gif",
//                    "width": "100",
//                    "height": "42",
//                    "size": "4298"
//                },
//                "downsized":
//                {
//                    "url": "https://media3.giphy.com/media/26lCO2s56wKwOCMwg/giphy-downsized.gif",
//                    "width": "480",
//                    "height": "200",
//                    "size": "613669"
//                },
//                "downsized_still":
//                {
//                    "url": "https://media3.giphy.com/media/26lCO2s56wKwOCMwg/giphy-downsized_s.gif",
//                    "width": "480",
//                    "height": "200",
//                    "size": "55811"
//                },
//                "downsized_large":
//                {
//                    "url": "https://media3.giphy.com/media/26lCO2s56wKwOCMwg/giphy.gif",
//                    "width": "480",
//                    "height": "200",
//                    "size": "613669"
//                },
//                "downsized_medium":
//                {
//                    "url": "https://media3.giphy.com/media/26lCO2s56wKwOCMwg/giphy.gif",
//                    "width": "480",
//                    "height": "200",
//                    "size": "613669"
//                },
//                "original":
//                {
//                    "url": "https://media3.giphy.com/media/26lCO2s56wKwOCMwg/giphy.gif",
//                    "width": "480",
//                    "height": "200",
//                    "size": "613669",
//                    "frames": "11",
//                    "mp4": "https://media1.giphy.com/media/26lCO2s56wKwOCMwg/giphy.mp4",
//                    "mp4_size": "137782",
//                    "webp": "https://media3.giphy.com/media/26lCO2s56wKwOCMwg/giphy.webp",
//                    "webp_size": "215980",
//                    "hash": "67eeac37320d7e15cc05b9b1e105b528"
//                },
//                "original_still":
//                {
//                    "url": "https://media3.giphy.com/media/26lCO2s56wKwOCMwg/giphy_s.gif",
//                    "width": "480",
//                    "height": "200",
//                    "size": "55811"
//                },
//                "looping":
//                {
//                    "mp4": "https://media3.giphy.com/media/26lCO2s56wKwOCMwg/giphy-loop.mp4",
//                    "mp4_size": "2773775"
//                },
//                "original_mp4":
//                {
//                    "mp4": "https://media3.giphy.com/media/26lCO2s56wKwOCMwg/giphy.mp4",
//                    "mp4_size": "137782",
//                    "width": "480",
//                    "height": "200"
//                },
//                "preview":
//                {
//                    "mp4": "https://media3.giphy.com/media/26lCO2s56wKwOCMwg/giphy-preview.mp4",
//                    "mp4_size": "34385",
//                    "width": "288",
//                    "height": "118"
//                },
//                "downsized_small":
//                {
//                    "mp4": "https://media3.giphy.com/media/26lCO2s56wKwOCMwg/giphy-downsized-small.mp4",
//                    "mp4_size": "137782",
//                    "width": "480",
//                    "height": "200"
//                },
//                "hd":
//                {
//                    "mp4": "https://media3.giphy.com/media/26lCO2s56wKwOCMwg/giphy-hd.mp4",
//                    "mp4_size": "503203",
//                    "width": "1284",
//                    "height": "534"
//                },
//                "preview_gif":
//                {
//                    "url": "https://media3.giphy.com/media/26lCO2s56wKwOCMwg/giphy-preview.gif",
//                    "width": "161",
//                    "height": "67",
//                    "size": "48363"
//                },
//                "preview_webp":
//                {
//                    "url": "https://media3.giphy.com/media/26lCO2s56wKwOCMwg/giphy-preview.webp",
//                    "width": "228",
//                    "height": "95",
//                    "size": "48600"
//                }
//            }
//        },
//        {
//            "type": "gif",
//            "id": "3oKIPjcfG5BXOfajS0",
//            "slug": "lilyachty-migos-lil-yachty-3oKIPjcfG5BXOfajS0",
//            "url": "https://giphy.com/gifs/lilyachty-migos-lil-yachty-3oKIPjcfG5BXOfajS0",
//            "bitly_gif_url": "http://gph.is/2oEL91X",
//            "bitly_url": "http://gph.is/2oEL91X",
//            "embed_url": "https://giphy.com/embed/3oKIPjcfG5BXOfajS0",
//            "username": "lilyachty",
//            "source": "",
//            "rating": "g",
//            "content_url": "",
//            "source_tld": "",
//            "source_post_url": "",
//            "is_indexable": 0,
//            "import_datetime": "2017-04-13 22:20:58",
//            "trending_datetime": "0001-12-30 00:00:00",
//            "user":
//            {
//                "avatar_url": "https://media.giphy.com/avatars/lilyachty/o2dlxptV6970.jpg",
//                "banner_url": "https://media.giphy.com/headers/lilyachty/9bIH3sWJcERI.jpg",
//                "profile_url": "https://giphy.com/lilyachty/",
//                "username": "lilyachty",
//                "display_name": "Lil Yachty",
//                "twitter": "@lilyachty"
//            },
//            "images":
//            {
//                "fixed_height_still":
//                {
//                    "url": "https://media1.giphy.com/media/3oKIPjcfG5BXOfajS0/200_s.gif",
//                    "width": "356",
//                    "height": "200",
//                    "size": "17886"
//                },
//                "original_still":
//                {
//                    "url": "https://media1.giphy.com/media/3oKIPjcfG5BXOfajS0/giphy_s.gif",
//                    "width": "480",
//                    "height": "270",
//                    "size": "39890"
//                },
//                "fixed_width":
//                {
//                    "url": "https://media1.giphy.com/media/3oKIPjcfG5BXOfajS0/200w.gif",
//                    "width": "200",
//                    "height": "113",
//                    "size": "1106337",
//                    "mp4": "https://media1.giphy.com/media/3oKIPjcfG5BXOfajS0/200w.mp4",
//                    "mp4_size": "161013",
//                    "webp": "https://media1.giphy.com/media/3oKIPjcfG5BXOfajS0/200w.webp",
//                    "webp_size": "261482"
//                },
//                "fixed_height_small_still":
//                {
//                    "url": "https://media1.giphy.com/media/3oKIPjcfG5BXOfajS0/100_s.gif",
//                    "width": "178",
//                    "height": "100",
//                    "size": "3994"
//                },
//                "fixed_height_downsampled":
//                {
//                    "url": "https://media1.giphy.com/media/3oKIPjcfG5BXOfajS0/200_d.gif",
//                    "width": "356",
//                    "height": "200",
//                    "size": "156482",
//                    "webp": "https://media1.giphy.com/media/3oKIPjcfG5BXOfajS0/200_d.webp",
//                    "webp_size": "26214"
//                },
//                "preview":
//                {
//                    "width": "292",
//                    "height": "164",
//                    "mp4": "https://media1.giphy.com/media/3oKIPjcfG5BXOfajS0/giphy-preview.mp4",
//                    "mp4_size": "44371"
//                },
//                "fixed_height_small":
//                {
//                    "url": "https://media1.giphy.com/media/3oKIPjcfG5BXOfajS0/100.gif",
//                    "width": "178",
//                    "height": "100",
//                    "size": "907161",
//                    "mp4": "https://media1.giphy.com/media/3oKIPjcfG5BXOfajS0/100.mp4",
//                    "mp4_size": "141278",
//                    "webp": "https://media1.giphy.com/media/3oKIPjcfG5BXOfajS0/100.webp",
//                    "webp_size": "225678"
//                },
//                "downsized_still":
//                {
//                    "url": "https://media1.giphy.com/media/3oKIPjcfG5BXOfajS0/giphy-downsized_s.gif",
//                    "width": "250",
//                    "height": "140",
//                    "size": "16859"
//                },
//                "downsized":
//                {
//                    "url": "https://media1.giphy.com/media/3oKIPjcfG5BXOfajS0/giphy-downsized.gif",
//                    "width": "250",
//                    "height": "140",
//                    "size": "1123175"
//                },
//                "downsized_large":
//                {
//                    "url": "https://media1.giphy.com/media/3oKIPjcfG5BXOfajS0/giphy.gif",
//                    "width": "480",
//                    "height": "270",
//                    "size": "5610068"
//                },
//                "fixed_width_small_still":
//                {
//                    "url": "https://media1.giphy.com/media/3oKIPjcfG5BXOfajS0/100w_s.gif",
//                    "width": "100",
//                    "height": "57",
//                    "size": "1606"
//                },
//                "preview_webp":
//                {
//                    "url": "https://media1.giphy.com/media/3oKIPjcfG5BXOfajS0/giphy-preview.webp",
//                    "width": "423",
//                    "height": "238",
//                    "size": "48742"
//                },
//                "fixed_width_still":
//                {
//                    "url": "https://media1.giphy.com/media/3oKIPjcfG5BXOfajS0/200w_s.gif",
//                    "width": "200",
//                    "height": "113",
//                    "size": "4846"
//                },
//                "fixed_width_small":
//                {
//                    "url": "https://media1.giphy.com/media/3oKIPjcfG5BXOfajS0/100w.gif",
//                    "width": "100",
//                    "height": "57",
//                    "size": "370939",
//                    "mp4": "https://media1.giphy.com/media/3oKIPjcfG5BXOfajS0/100w.mp4",
//                    "mp4_size": "48975",
//                    "webp": "https://media1.giphy.com/media/3oKIPjcfG5BXOfajS0/100w.webp",
//                    "webp_size": "110400"
//                },
//                "downsized_small":
//                {
//                    "width": "256",
//                    "height": "144",
//                    "mp4": "https://media1.giphy.com/media/3oKIPjcfG5BXOfajS0/giphy-downsized-small.mp4",
//                    "mp4_size": "142442"
//                },
//                "fixed_width_downsampled":
//                {
//                    "url": "https://media1.giphy.com/media/3oKIPjcfG5BXOfajS0/200w_d.gif",
//                    "width": "200",
//                    "height": "113",
//                    "size": "51638",
//                    "webp": "https://media1.giphy.com/media/3oKIPjcfG5BXOfajS0/200w_d.webp",
//                    "webp_size": "12214"
//                },
//                "downsized_medium":
//                {
//                    "url": "https://media1.giphy.com/media/3oKIPjcfG5BXOfajS0/giphy-downsized-medium.gif",
//                    "width": "480",
//                    "height": "270",
//                    "size": "4026376"
//                },
//                "original":
//                {
//                    "url": "https://media1.giphy.com/media/3oKIPjcfG5BXOfajS0/giphy.gif",
//                    "width": "480",
//                    "height": "270",
//                    "size": "5610068",
//                    "frames": "100",
//                    "mp4": "https://media1.giphy.com/media/3oKIPjcfG5BXOfajS0/giphy.mp4",
//                    "mp4_size": "686188",
//                    "webp": "https://media1.giphy.com/media/3oKIPjcfG5BXOfajS0/giphy.webp",
//                    "webp_size": "884564",
//                    "hash": "f9cb623eb78e2eb1a8bd1b94cf4112a0"
//                },
//                "fixed_height":
//                {
//                    "url": "https://media1.giphy.com/media/3oKIPjcfG5BXOfajS0/200.gif",
//                    "width": "356",
//                    "height": "200",
//                    "size": "3085252",
//                    "mp4": "https://media1.giphy.com/media/3oKIPjcfG5BXOfajS0/200.mp4",
//                    "mp4_size": "377581",
//                    "webp": "https://media1.giphy.com/media/3oKIPjcfG5BXOfajS0/200.webp",
//                    "webp_size": "525970"
//                },
//                "hd":
//                {
//                    "width": "1920",
//                    "height": "1080",
//                    "mp4": "https://media1.giphy.com/media/3oKIPjcfG5BXOfajS0/giphy-hd.mp4",
//                    "mp4_size": "17918662"
//                },
//                "looping":
//                {
//                    "mp4": "https://media1.giphy.com/media/3oKIPjcfG5BXOfajS0/giphy-loop.mp4",
//                    "mp4_size": "2550599"
//                },
//                "original_mp4":
//                {
//                    "width": "480",
//                    "height": "270",
//                    "mp4": "https://media1.giphy.com/media/3oKIPjcfG5BXOfajS0/giphy.mp4",
//                    "mp4_size": "686188"
//                },
//                "preview_gif":
//                {
//                    "url": "https://media1.giphy.com/media/3oKIPjcfG5BXOfajS0/giphy-preview.gif",
//                    "width": "156",
//                    "height": "88",
//                    "size": "49996"
//                }
//            }
//        },
//        {
//            "type": "gif",
//            "id": "xUA7aVNURZmx9uZhrq",
//            "slug": "tvonetv-song-xUA7aVNURZmx9uZhrq",
//            "url": "https://giphy.com/gifs/tvonetv-song-xUA7aVNURZmx9uZhrq",
//            "bitly_gif_url": "http://gph.is/2tQtcja",
//            "bitly_url": "http://gph.is/2tQtcja",
//            "embed_url": "https://giphy.com/embed/xUA7aVNURZmx9uZhrq",
//            "username": "tvonetv",
//            "source": "https://tvone.tv/video/unsung-live-marvin-sapp-has-a-powerful-message-for-you/",
//            "rating": "g",
//            "content_url": "",
//            "source_tld": "tvone.tv",
//            "source_post_url": "https://tvone.tv/video/unsung-live-marvin-sapp-has-a-powerful-message-for-you/",
//            "is_indexable": 0,
//            "import_datetime": "2017-07-14 14:24:26",
//            "trending_datetime": "0001-12-30 00:00:00",
//            "user":
//            {
//                "avatar_url": "https://media.giphy.com/avatars/tvonetv/35aRs1myz63V.jpg",
//                "banner_url": "https://media.giphy.com/headers/tvonetv/Ne9k5QKVsFDM.jpg",
//                "profile_url": "https://giphy.com/tvonetv/",
//                "username": "tvonetv",
//                "display_name": "TV One",
//                "twitter": "@tvonetv"
//            },
//            "images":
//            {
//                "fixed_height_still":
//                {
//                    "url": "https://media3.giphy.com/media/xUA7aVNURZmx9uZhrq/200_s.gif",
//                    "width": "352",
//                    "height": "200",
//                    "size": "36671"
//                },
//                "original_still":
//                {
//                    "url": "https://media3.giphy.com/media/xUA7aVNURZmx9uZhrq/giphy_s.gif",
//                    "width": "480",
//                    "height": "274",
//                    "size": "60455"
//                },
//                "fixed_width":
//                {
//                    "url": "https://media3.giphy.com/media/xUA7aVNURZmx9uZhrq/200w.gif",
//                    "width": "200",
//                    "height": "114",
//                    "size": "261740",
//                    "mp4": "https://media3.giphy.com/media/xUA7aVNURZmx9uZhrq/200w.mp4",
//                    "mp4_size": "26397",
//                    "webp": "https://media3.giphy.com/media/xUA7aVNURZmx9uZhrq/200w.webp",
//                    "webp_size": "105816"
//                },
//                "fixed_height_small_still":
//                {
//                    "url": "https://media3.giphy.com/media/xUA7aVNURZmx9uZhrq/100_s.gif",
//                    "width": "176",
//                    "height": "100",
//                    "size": "12724"
//                },
//                "fixed_height_downsampled":
//                {
//                    "url": "https://media3.giphy.com/media/xUA7aVNURZmx9uZhrq/200_d.gif",
//                    "width": "352",
//                    "height": "200",
//                    "size": "208154",
//                    "webp": "https://media3.giphy.com/media/xUA7aVNURZmx9uZhrq/200_d.webp",
//                    "webp_size": "43062"
//                },
//                "preview":
//                {
//                    "width": "313",
//                    "height": "178",
//                    "mp4": "https://media3.giphy.com/media/xUA7aVNURZmx9uZhrq/giphy-preview.mp4",
//                    "mp4_size": "29310"
//                },
//                "fixed_height_small":
//                {
//                    "url": "https://media3.giphy.com/media/xUA7aVNURZmx9uZhrq/100.gif",
//                    "width": "176",
//                    "height": "100",
//                    "size": "220647",
//                    "mp4": "https://media3.giphy.com/media/xUA7aVNURZmx9uZhrq/100.mp4",
//                    "mp4_size": "53658",
//                    "webp": "https://media3.giphy.com/media/xUA7aVNURZmx9uZhrq/100.webp",
//                    "webp_size": "91430"
//                },
//                "downsized_still":
//                {
//                    "url": "https://media3.giphy.com/media/xUA7aVNURZmx9uZhrq/giphy-downsized_s.gif",
//                    "width": "480",
//                    "height": "274",
//                    "size": "60455"
//                },
//                "downsized":
//                {
//                    "url": "https://media3.giphy.com/media/xUA7aVNURZmx9uZhrq/giphy-downsized.gif",
//                    "width": "480",
//                    "height": "274",
//                    "size": "1267666"
//                },
//                "downsized_large":
//                {
//                    "url": "https://media3.giphy.com/media/xUA7aVNURZmx9uZhrq/giphy.gif",
//                    "width": "480",
//                    "height": "274",
//                    "size": "1267666"
//                },
//                "fixed_width_small_still":
//                {
//                    "url": "https://media3.giphy.com/media/xUA7aVNURZmx9uZhrq/100w_s.gif",
//                    "width": "100",
//                    "height": "57",
//                    "size": "5554"
//                },
//                "preview_webp":
//                {
//                    "url": "https://media3.giphy.com/media/xUA7aVNURZmx9uZhrq/giphy-preview.webp",
//                    "width": "254",
//                    "height": "145",
//                    "size": "48934"
//                },
//                "fixed_width_still":
//                {
//                    "url": "https://media3.giphy.com/media/xUA7aVNURZmx9uZhrq/200w_s.gif",
//                    "width": "200",
//                    "height": "114",
//                    "size": "14815"
//                },
//                "fixed_width_small":
//                {
//                    "url": "https://media3.giphy.com/media/xUA7aVNURZmx9uZhrq/100w.gif",
//                    "width": "100",
//                    "height": "57",
//                    "size": "80037",
//                    "mp4": "https://media3.giphy.com/media/xUA7aVNURZmx9uZhrq/100w.mp4",
//                    "mp4_size": "10561",
//                    "webp": "https://media3.giphy.com/media/xUA7aVNURZmx9uZhrq/100w.webp",
//                    "webp_size": "45406"
//                },
//                "downsized_small":
//                {
//                    "width": "479",
//                    "height": "272",
//                    "mp4": "https://media3.giphy.com/media/xUA7aVNURZmx9uZhrq/giphy-downsized-small.mp4",
//                    "mp4_size": "114233"
//                },
//                "fixed_width_downsampled":
//                {
//                    "url": "https://media3.giphy.com/media/xUA7aVNURZmx9uZhrq/200w_d.gif",
//                    "width": "200",
//                    "height": "114",
//                    "size": "78032",
//                    "webp": "https://media3.giphy.com/media/xUA7aVNURZmx9uZhrq/200w_d.webp",
//                    "webp_size": "22178"
//                },
//                "downsized_medium":
//                {
//                    "url": "https://media3.giphy.com/media/xUA7aVNURZmx9uZhrq/giphy.gif",
//                    "width": "480",
//                    "height": "274",
//                    "size": "1267666"
//                },
//                "original":
//                {
//                    "url": "https://media3.giphy.com/media/xUA7aVNURZmx9uZhrq/giphy.gif",
//                    "width": "480",
//                    "height": "274",
//                    "size": "1267666",
//                    "frames": "31",
//                    "mp4": "https://media3.giphy.com/media/xUA7aVNURZmx9uZhrq/giphy.mp4",
//                    "mp4_size": "114233",
//                    "webp": "https://media3.giphy.com/media/xUA7aVNURZmx9uZhrq/giphy.webp",
//                    "webp_size": "283800",
//                    "hash": "58f0dc123daca2535e57b6952dfff358"
//                },
//                "fixed_height":
//                {
//                    "url": "https://media3.giphy.com/media/xUA7aVNURZmx9uZhrq/200.gif",
//                    "width": "352",
//                    "height": "200",
//                    "size": "720362",
//                    "mp4": "https://media3.giphy.com/media/xUA7aVNURZmx9uZhrq/200.mp4",
//                    "mp4_size": "89820",
//                    "webp": "https://media3.giphy.com/media/xUA7aVNURZmx9uZhrq/200.webp",
//                    "webp_size": "201638"
//                },
//                "looping":
//                {
//                    "mp4": "https://media3.giphy.com/media/xUA7aVNURZmx9uZhrq/giphy-loop.mp4",
//                    "mp4_size": "746866"
//                },
//                "original_mp4":
//                {
//                    "width": "479",
//                    "height": "272",
//                    "mp4": "https://media3.giphy.com/media/xUA7aVNURZmx9uZhrq/giphy.mp4",
//                    "mp4_size": "114233"
//                },
//                "preview_gif":
//                {
//                    "url": "https://media3.giphy.com/media/xUA7aVNURZmx9uZhrq/giphy-preview.gif",
//                    "width": "149",
//                    "height": "85",
//                    "size": "49143"
//                }
//            }
//        },
//        {
//            "type": "gif",
//            "id": "l1ugfsX3uKtXTwfuM",
//            "slug": "lil-wayne-crew-chance-the-rapper-l1ugfsX3uKtXTwfuM",
//            "url": "https://giphy.com/gifs/lil-wayne-crew-chance-the-rapper-l1ugfsX3uKtXTwfuM",
//            "bitly_gif_url": "http://gph.is/2phA88e",
//            "bitly_url": "http://gph.is/2phA88e",
//            "embed_url": "https://giphy.com/embed/l1ugfsX3uKtXTwfuM",
//            "username": "",
//            "source": "https://www.youtube.com/watch?v=weeI1G46q0o",
//            "rating": "g",
//            "content_url": "",
//            "source_tld": "www.youtube.com",
//            "source_post_url": "https://www.youtube.com/watch?v=weeI1G46q0o",
//            "is_indexable": 0,
//            "import_datetime": "2017-05-09 19:59:49",
//            "trending_datetime": "0001-12-30 00:00:00",
//            "images":
//            {
//                "fixed_height_still":
//                {
//                    "url": "https://media0.giphy.com/media/l1ugfsX3uKtXTwfuM/200_s.gif",
//                    "width": "480",
//                    "height": "200",
//                    "size": "60094"
//                },
//                "original_still":
//                {
//                    "url": "https://media0.giphy.com/media/l1ugfsX3uKtXTwfuM/giphy_s.gif",
//                    "width": "480",
//                    "height": "200",
//                    "size": "60094"
//                },
//                "fixed_width":
//                {
//                    "url": "https://media0.giphy.com/media/l1ugfsX3uKtXTwfuM/200w.gif",
//                    "width": "200",
//                    "height": "84",
//                    "size": "273763",
//                    "mp4": "https://media0.giphy.com/media/l1ugfsX3uKtXTwfuM/200w.mp4",
//                    "mp4_size": "55489",
//                    "webp": "https://media0.giphy.com/media/l1ugfsX3uKtXTwfuM/200w.webp",
//                    "webp_size": "143446"
//                },
//                "fixed_height_small_still":
//                {
//                    "url": "https://media0.giphy.com/media/l1ugfsX3uKtXTwfuM/100_s.gif",
//                    "width": "240",
//                    "height": "100",
//                    "size": "17322"
//                },
//                "fixed_height_downsampled":
//                {
//                    "url": "https://media0.giphy.com/media/l1ugfsX3uKtXTwfuM/200_d.gif",
//                    "width": "480",
//                    "height": "200",
//                    "size": "388318",
//                    "webp": "https://media0.giphy.com/media/l1ugfsX3uKtXTwfuM/200_d.webp",
//                    "webp_size": "168062"
//                },
//                "preview":
//                {
//                    "width": "160",
//                    "height": "66",
//                    "mp4": "https://media0.giphy.com/media/l1ugfsX3uKtXTwfuM/giphy-preview.mp4",
//                    "mp4_size": "41195"
//                },
//                "fixed_height_small":
//                {
//                    "url": "https://media0.giphy.com/media/l1ugfsX3uKtXTwfuM/100.gif",
//                    "width": "240",
//                    "height": "100",
//                    "size": "354079",
//                    "mp4": "https://media0.giphy.com/media/l1ugfsX3uKtXTwfuM/100.mp4",
//                    "mp4_size": "66587",
//                    "webp": "https://media0.giphy.com/media/l1ugfsX3uKtXTwfuM/100.webp",
//                    "webp_size": "181492"
//                },
//                "downsized_still":
//                {
//                    "url": "https://media0.giphy.com/media/l1ugfsX3uKtXTwfuM/giphy-downsized_s.gif",
//                    "width": "480",
//                    "height": "200",
//                    "size": "60094"
//                },
//                "downsized":
//                {
//                    "url": "https://media0.giphy.com/media/l1ugfsX3uKtXTwfuM/giphy-downsized.gif",
//                    "width": "480",
//                    "height": "200",
//                    "size": "1320319"
//                },
//                "downsized_large":
//                {
//                    "url": "https://media0.giphy.com/media/l1ugfsX3uKtXTwfuM/giphy.gif",
//                    "width": "480",
//                    "height": "200",
//                    "size": "1320319"
//                },
//                "fixed_width_small_still":
//                {
//                    "url": "https://media0.giphy.com/media/l1ugfsX3uKtXTwfuM/100w_s.gif",
//                    "width": "100",
//                    "height": "42",
//                    "size": "4450"
//                },
//                "fixed_width_still":
//                {
//                    "url": "https://media0.giphy.com/media/l1ugfsX3uKtXTwfuM/200w_s.gif",
//                    "width": "200",
//                    "height": "84",
//                    "size": "13635"
//                },
//                "fixed_width_small":
//                {
//                    "url": "https://media0.giphy.com/media/l1ugfsX3uKtXTwfuM/100w.gif",
//                    "width": "100",
//                    "height": "42",
//                    "size": "76125",
//                    "mp4": "https://media0.giphy.com/media/l1ugfsX3uKtXTwfuM/100w.mp4",
//                    "mp4_size": "19711",
//                    "webp": "https://media0.giphy.com/media/l1ugfsX3uKtXTwfuM/100w.webp",
//                    "webp_size": "49252"
//                },
//                "downsized_small":
//                {
//                    "width": "480",
//                    "height": "200",
//                    "mp4": "https://media0.giphy.com/media/l1ugfsX3uKtXTwfuM/giphy-downsized-small.mp4",
//                    "mp4_size": "176962"
//                },
//                "fixed_width_downsampled":
//                {
//                    "url": "https://media0.giphy.com/media/l1ugfsX3uKtXTwfuM/200w_d.gif",
//                    "width": "200",
//                    "height": "84",
//                    "size": "84002",
//                    "webp": "https://media0.giphy.com/media/l1ugfsX3uKtXTwfuM/200w_d.webp",
//                    "webp_size": "42906"
//                },
//                "downsized_medium":
//                {
//                    "url": "https://media0.giphy.com/media/l1ugfsX3uKtXTwfuM/giphy.gif",
//                    "width": "480",
//                    "height": "200",
//                    "size": "1320319"
//                },
//                "original":
//                {
//                    "url": "https://media0.giphy.com/media/l1ugfsX3uKtXTwfuM/giphy.gif",
//                    "width": "480",
//                    "height": "200",
//                    "size": "1320319",
//                    "frames": "20",
//                    "mp4": "https://media0.giphy.com/media/l1ugfsX3uKtXTwfuM/giphy.mp4",
//                    "mp4_size": "176962",
//                    "webp": "https://media0.giphy.com/media/l1ugfsX3uKtXTwfuM/giphy.webp",
//                    "webp_size": "561270",
//                    "hash": "c42a49874225616eaf22c32f480d5010"
//                },
//                "fixed_height":
//                {
//                    "url": "https://media0.giphy.com/media/l1ugfsX3uKtXTwfuM/200.gif",
//                    "width": "480",
//                    "height": "200",
//                    "size": "1320319",
//                    "mp4": "https://media0.giphy.com/media/l1ugfsX3uKtXTwfuM/200.mp4",
//                    "mp4_size": "157415",
//                    "webp": "https://media0.giphy.com/media/l1ugfsX3uKtXTwfuM/200.webp",
//                    "webp_size": "561270"
//                },
//                "hd":
//                {
//                    "width": "1284",
//                    "height": "534",
//                    "mp4": "https://media0.giphy.com/media/l1ugfsX3uKtXTwfuM/giphy-hd.mp4",
//                    "mp4_size": "623852"
//                },
//                "looping":
//                {
//                    "mp4": "https://media0.giphy.com/media/l1ugfsX3uKtXTwfuM/giphy-loop.mp4",
//                    "mp4_size": "1731251"
//                },
//                "original_mp4":
//                {
//                    "width": "480",
//                    "height": "200",
//                    "mp4": "https://media0.giphy.com/media/l1ugfsX3uKtXTwfuM/giphy.mp4",
//                    "mp4_size": "176962"
//                }
//            }
//        },
//        {
//            "type": "gif",
//            "id": "3oeSATMbVhRXxZMRrO",
//            "slug": "dj-khaled-chance-the-rapper-migos-3oeSATMbVhRXxZMRrO",
//            "url": "https://giphy.com/gifs/dj-khaled-chance-the-rapper-migos-3oeSATMbVhRXxZMRrO",
//            "bitly_gif_url": "http://gph.is/2pszP5M",
//            "bitly_url": "http://gph.is/2pszP5M",
//            "embed_url": "https://giphy.com/embed/3oeSATMbVhRXxZMRrO",
//            "username": "",
//            "source": "https://www.youtube.com/watch?v=weeI1G46q0o",
//            "rating": "g",
//            "content_url": "",
//            "source_tld": "www.youtube.com",
//            "source_post_url": "https://www.youtube.com/watch?v=weeI1G46q0o",
//            "is_indexable": 0,
//            "import_datetime": "2017-05-09 19:58:39",
//            "trending_datetime": "0001-12-30 00:00:00",
//            "images":
//            {
//                "fixed_height_still":
//                {
//                    "url": "https://media1.giphy.com/media/3oeSATMbVhRXxZMRrO/200_s.gif",
//                    "width": "480",
//                    "height": "200",
//                    "size": "59243"
//                },
//                "original_still":
//                {
//                    "url": "https://media1.giphy.com/media/3oeSATMbVhRXxZMRrO/giphy_s.gif",
//                    "width": "480",
//                    "height": "200",
//                    "size": "59243"
//                },
//                "fixed_width":
//                {
//                    "url": "https://media1.giphy.com/media/3oeSATMbVhRXxZMRrO/200w.gif",
//                    "width": "200",
//                    "height": "84",
//                    "size": "119697",
//                    "mp4": "https://media1.giphy.com/media/3oeSATMbVhRXxZMRrO/200w.mp4",
//                    "mp4_size": "37600",
//                    "webp": "https://media1.giphy.com/media/3oeSATMbVhRXxZMRrO/200w.webp",
//                    "webp_size": "56774"
//                },
//                "fixed_height_small_still":
//                {
//                    "url": "https://media1.giphy.com/media/3oeSATMbVhRXxZMRrO/100_s.gif",
//                    "width": "240",
//                    "height": "100",
//                    "size": "17645"
//                },
//                "fixed_height_downsampled":
//                {
//                    "url": "https://media1.giphy.com/media/3oeSATMbVhRXxZMRrO/200_d.gif",
//                    "width": "480",
//                    "height": "200",
//                    "size": "369719",
//                    "webp": "https://media1.giphy.com/media/3oeSATMbVhRXxZMRrO/200_d.webp",
//                    "webp_size": "146094"
//                },
//                "preview":
//                {
//                    "width": "290",
//                    "height": "120",
//                    "mp4": "https://media1.giphy.com/media/3oeSATMbVhRXxZMRrO/giphy-preview.mp4",
//                    "mp4_size": "33672"
//                },
//                "fixed_height_small":
//                {
//                    "url": "https://media1.giphy.com/media/3oeSATMbVhRXxZMRrO/100.gif",
//                    "width": "240",
//                    "height": "100",
//                    "size": "156702",
//                    "mp4": "https://media1.giphy.com/media/3oeSATMbVhRXxZMRrO/100.mp4",
//                    "mp4_size": "47201",
//                    "webp": "https://media1.giphy.com/media/3oeSATMbVhRXxZMRrO/100.webp",
//                    "webp_size": "72652"
//                },
//                "downsized_still":
//                {
//                    "url": "https://media1.giphy.com/media/3oeSATMbVhRXxZMRrO/giphy-downsized_s.gif",
//                    "width": "480",
//                    "height": "200",
//                    "size": "59243"
//                },
//                "downsized":
//                {
//                    "url": "https://media1.giphy.com/media/3oeSATMbVhRXxZMRrO/giphy-downsized.gif",
//                    "width": "480",
//                    "height": "200",
//                    "size": "572243"
//                },
//                "downsized_large":
//                {
//                    "url": "https://media1.giphy.com/media/3oeSATMbVhRXxZMRrO/giphy.gif",
//                    "width": "480",
//                    "height": "200",
//                    "size": "572243"
//                },
//                "fixed_width_small_still":
//                {
//                    "url": "https://media1.giphy.com/media/3oeSATMbVhRXxZMRrO/100w_s.gif",
//                    "width": "100",
//                    "height": "42",
//                    "size": "4501"
//                },
//                "preview_webp":
//                {
//                    "url": "https://media1.giphy.com/media/3oeSATMbVhRXxZMRrO/giphy-preview.webp",
//                    "width": "238",
//                    "height": "99",
//                    "size": "49602"
//                },
//                "fixed_width_still":
//                {
//                    "url": "https://media1.giphy.com/media/3oeSATMbVhRXxZMRrO/200w_s.gif",
//                    "width": "200",
//                    "height": "84",
//                    "size": "13678"
//                },
//                "fixed_width_small":
//                {
//                    "url": "https://media1.giphy.com/media/3oeSATMbVhRXxZMRrO/100w.gif",
//                    "width": "100",
//                    "height": "42",
//                    "size": "33510",
//                    "mp4": "https://media1.giphy.com/media/3oeSATMbVhRXxZMRrO/100w.mp4",
//                    "mp4_size": "12409",
//                    "webp": "https://media1.giphy.com/media/3oeSATMbVhRXxZMRrO/100w.webp",
//                    "webp_size": "18706"
//                },
//                "downsized_small":
//                {
//                    "width": "480",
//                    "height": "200",
//                    "mp4": "https://media1.giphy.com/media/3oeSATMbVhRXxZMRrO/giphy-downsized-small.mp4",
//                    "mp4_size": "135434"
//                },
//                "fixed_width_downsampled":
//                {
//                    "url": "https://media1.giphy.com/media/3oeSATMbVhRXxZMRrO/200w_d.gif",
//                    "width": "200",
//                    "height": "84",
//                    "size": "80028",
//                    "webp": "https://media1.giphy.com/media/3oeSATMbVhRXxZMRrO/200w_d.webp",
//                    "webp_size": "37462"
//                },
//                "downsized_medium":
//                {
//                    "url": "https://media1.giphy.com/media/3oeSATMbVhRXxZMRrO/giphy.gif",
//                    "width": "480",
//                    "height": "200",
//                    "size": "572243"
//                },
//                "original":
//                {
//                    "url": "https://media1.giphy.com/media/3oeSATMbVhRXxZMRrO/giphy.gif",
//                    "width": "480",
//                    "height": "200",
//                    "size": "572243",
//                    "frames": "9",
//                    "mp4": "https://media1.giphy.com/media/3oeSATMbVhRXxZMRrO/giphy.mp4",
//                    "mp4_size": "135434",
//                    "webp": "https://media1.giphy.com/media/3oeSATMbVhRXxZMRrO/giphy.webp",
//                    "webp_size": "221890",
//                    "hash": "ef206dbeaaea08ed0dfb0264ace3b107"
//                },
//                "fixed_height":
//                {
//                    "url": "https://media1.giphy.com/media/3oeSATMbVhRXxZMRrO/200.gif",
//                    "width": "480",
//                    "height": "200",
//                    "size": "572243",
//                    "mp4": "https://media1.giphy.com/media/3oeSATMbVhRXxZMRrO/200.mp4",
//                    "mp4_size": "127876",
//                    "webp": "https://media1.giphy.com/media/3oeSATMbVhRXxZMRrO/200.webp",
//                    "webp_size": "221890"
//                },
//                "hd":
//                {
//                    "width": "1284",
//                    "height": "534",
//                    "mp4": "https://media1.giphy.com/media/3oeSATMbVhRXxZMRrO/giphy-hd.mp4",
//                    "mp4_size": "490559"
//                },
//                "looping":
//                {
//                    "mp4": "https://media1.giphy.com/media/3oeSATMbVhRXxZMRrO/giphy-loop.mp4",
//                    "mp4_size": "3525316"
//                },
//                "original_mp4":
//                {
//                    "width": "480",
//                    "height": "200",
//                    "mp4": "https://media1.giphy.com/media/3oeSATMbVhRXxZMRrO/giphy.mp4",
//                    "mp4_size": "135434"
//                },
//                "preview_gif":
//                {
//                    "url": "https://media1.giphy.com/media/3oeSATMbVhRXxZMRrO/giphy-preview.gif",
//                    "width": "175",
//                    "height": "73",
//                    "size": "48149"
//                }
//            }
//        },
//        {
//            "type": "gif",
//            "id": "l4FGodbEKWUeIgBRm",
//            "slug": "2chainz-2-chainz-migos-l4FGodbEKWUeIgBRm",
//            "url": "https://giphy.com/gifs/2chainz-2-chainz-migos-l4FGodbEKWUeIgBRm",
//            "bitly_gif_url": "",
//            "bitly_url": "",
//            "embed_url": "https://giphy.com/embed/l4FGodbEKWUeIgBRm",
//            "username": "2chainz",
//            "source": "http://smarturl.it/BlueCheeseVid ",
//            "rating": "g",
//            "content_url": "",
//            "source_tld": "smarturl.it",
//            "source_post_url": "http://smarturl.it/BlueCheeseVid ",
//            "is_indexable": 0,
//            "import_datetime": "2017-06-16 23:50:29",
//            "trending_datetime": "0001-12-30 00:00:00",
//            "user":
//            {
//                "avatar_url": "https://media.giphy.com/avatars/2chainz/bowOfehzLVkz.jpg",
//                "banner_url": "",
//                "profile_url": "https://giphy.com/2chainz/",
//                "username": "2chainz",
//                "display_name": "2 Chainz",
//                "twitter": "@2chainz"
//            },
//            "images":
//            {
//                "fixed_height_still":
//                {
//                    "url": "https://media3.giphy.com/media/l4FGodbEKWUeIgBRm/200_s.gif",
//                    "width": "300",
//                    "height": "200",
//                    "size": "42706"
//                },
//                "original_still":
//                {
//                    "url": "https://media3.giphy.com/media/l4FGodbEKWUeIgBRm/giphy_s.gif",
//                    "width": "480",
//                    "height": "320",
//                    "size": "104220"
//                },
//                "fixed_width":
//                {
//                    "url": "https://media3.giphy.com/media/l4FGodbEKWUeIgBRm/200w.gif",
//                    "width": "200",
//                    "height": "133",
//                    "size": "348655",
//                    "mp4": "https://media3.giphy.com/media/l4FGodbEKWUeIgBRm/200w.mp4",
//                    "mp4_size": "84331",
//                    "webp": "https://media3.giphy.com/media/l4FGodbEKWUeIgBRm/200w.webp",
//                    "webp_size": "124270"
//                },
//                "fixed_height_small_still":
//                {
//                    "url": "https://media3.giphy.com/media/l4FGodbEKWUeIgBRm/100_s.gif",
//                    "width": "150",
//                    "height": "100",
//                    "size": "12928"
//                },
//                "fixed_height_downsampled":
//                {
//                    "url": "https://media3.giphy.com/media/l4FGodbEKWUeIgBRm/200_d.gif",
//                    "width": "300",
//                    "height": "200",
//                    "size": "238427",
//                    "webp": "https://media3.giphy.com/media/l4FGodbEKWUeIgBRm/200_d.webp",
//                    "webp_size": "111642"
//                },
//                "preview":
//                {
//                    "width": "192",
//                    "height": "128",
//                    "mp4": "https://media3.giphy.com/media/l4FGodbEKWUeIgBRm/giphy-preview.mp4",
//                    "mp4_size": "45981"
//                },
//                "fixed_height_small":
//                {
//                    "url": "https://media3.giphy.com/media/l4FGodbEKWUeIgBRm/100.gif",
//                    "width": "150",
//                    "height": "100",
//                    "size": "216244",
//                    "mp4": "https://media3.giphy.com/media/l4FGodbEKWUeIgBRm/100.mp4",
//                    "mp4_size": "53783",
//                    "webp": "https://media3.giphy.com/media/l4FGodbEKWUeIgBRm/100.webp",
//                    "webp_size": "82226"
//                },
//                "downsized_still":
//                {
//                    "url": "https://media3.giphy.com/media/l4FGodbEKWUeIgBRm/giphy-downsized_s.gif",
//                    "width": "480",
//                    "height": "320",
//                    "size": "104220"
//                },
//                "downsized":
//                {
//                    "url": "https://media3.giphy.com/media/l4FGodbEKWUeIgBRm/giphy-downsized.gif",
//                    "width": "480",
//                    "height": "320",
//                    "size": "1766225"
//                },
//                "downsized_large":
//                {
//                    "url": "https://media3.giphy.com/media/l4FGodbEKWUeIgBRm/giphy.gif",
//                    "width": "480",
//                    "height": "320",
//                    "size": "1766225"
//                },
//                "fixed_width_small_still":
//                {
//                    "url": "https://media3.giphy.com/media/l4FGodbEKWUeIgBRm/100w_s.gif",
//                    "width": "100",
//                    "height": "67",
//                    "size": "6689"
//                },
//                "preview_webp":
//                {
//                    "url": "https://media3.giphy.com/media/l4FGodbEKWUeIgBRm/giphy-preview.webp",
//                    "width": "144",
//                    "height": "96",
//                    "size": "48080"
//                },
//                "fixed_width_still":
//                {
//                    "url": "https://media3.giphy.com/media/l4FGodbEKWUeIgBRm/200w_s.gif",
//                    "width": "200",
//                    "height": "133",
//                    "size": "20743"
//                },
//                "fixed_width_small":
//                {
//                    "url": "https://media3.giphy.com/media/l4FGodbEKWUeIgBRm/100w.gif",
//                    "width": "100",
//                    "height": "67",
//                    "size": "110217",
//                    "mp4": "https://media3.giphy.com/media/l4FGodbEKWUeIgBRm/100w.mp4",
//                    "mp4_size": "28424",
//                    "webp": "https://media3.giphy.com/media/l4FGodbEKWUeIgBRm/100w.webp",
//                    "webp_size": "42920"
//                },
//                "downsized_small":
//                {
//                    "width": "330",
//                    "height": "220",
//                    "mp4": "https://media3.giphy.com/media/l4FGodbEKWUeIgBRm/giphy-downsized-small.mp4",
//                    "mp4_size": "104646"
//                },
//                "fixed_width_downsampled":
//                {
//                    "url": "https://media3.giphy.com/media/l4FGodbEKWUeIgBRm/200w_d.gif",
//                    "width": "200",
//                    "height": "133",
//                    "size": "110859",
//                    "webp": "https://media3.giphy.com/media/l4FGodbEKWUeIgBRm/200w_d.webp",
//                    "webp_size": "56694"
//                },
//                "downsized_medium":
//                {
//                    "url": "https://media3.giphy.com/media/l4FGodbEKWUeIgBRm/giphy.gif",
//                    "width": "480",
//                    "height": "320",
//                    "size": "1766225"
//                },
//                "original":
//                {
//                    "url": "https://media3.giphy.com/media/l4FGodbEKWUeIgBRm/giphy.gif",
//                    "width": "480",
//                    "height": "320",
//                    "size": "1766225",
//                    "frames": "16",
//                    "mp4": "https://media3.giphy.com/media/l4FGodbEKWUeIgBRm/giphy.mp4",
//                    "mp4_size": "417276",
//                    "webp": "https://media3.giphy.com/media/l4FGodbEKWUeIgBRm/giphy.webp",
//                    "webp_size": "522406",
//                    "hash": "bd7d76feea0c23885abdd7404391abbf"
//                },
//                "fixed_height":
//                {
//                    "url": "https://media3.giphy.com/media/l4FGodbEKWUeIgBRm/200.gif",
//                    "width": "300",
//                    "height": "200",
//                    "size": "724021",
//                    "mp4": "https://media3.giphy.com/media/l4FGodbEKWUeIgBRm/200.mp4",
//                    "mp4_size": "151825",
//                    "webp": "https://media3.giphy.com/media/l4FGodbEKWUeIgBRm/200.webp",
//                    "webp_size": "229586"
//                },
//                "hd":
//                {
//                    "width": "1200",
//                    "height": "800",
//                    "mp4": "https://media3.giphy.com/media/l4FGodbEKWUeIgBRm/giphy-hd.mp4",
//                    "mp4_size": "3455571"
//                },
//                "looping":
//                {
//                    "mp4": "https://media3.giphy.com/media/l4FGodbEKWUeIgBRm/giphy-loop.mp4",
//                    "mp4_size": "5593093"
//                },
//                "original_mp4":
//                {
//                    "width": "480",
//                    "height": "320",
//                    "mp4": "https://media3.giphy.com/media/l4FGodbEKWUeIgBRm/giphy.mp4",
//                    "mp4_size": "417276"
//                },
//                "preview_gif":
//                {
//                    "url": "https://media3.giphy.com/media/l4FGodbEKWUeIgBRm/giphy-preview.gif",
//                    "width": "114",
//                    "height": "76",
//                    "size": "48334"
//                }
//            }
//        },
//        {
//            "type": "gif",
//            "id": "ZzORsCYr9sLNm",
//            "slug": "mrw-work-shuffle-ZzORsCYr9sLNm",
//            "url": "https://giphy.com/gifs/mrw-work-shuffle-ZzORsCYr9sLNm",
//            "bitly_gif_url": "http://gph.is/2la5GdY",
//            "bitly_url": "http://gph.is/2la5GdY",
//            "embed_url": "https://giphy.com/embed/ZzORsCYr9sLNm",
//            "username": "",
//            "source": "https://www.reddit.com/r/reactiongifs/comments/5sddpg/mrw_i_go_to_work_and_the_first_song_on_shuffle_is/",
//            "rating": "g",
//            "content_url": "",
//            "source_tld": "www.reddit.com",
//            "source_post_url": "https://www.reddit.com/r/reactiongifs/comments/5sddpg/mrw_i_go_to_work_and_the_first_song_on_shuffle_is/",
//            "is_indexable": 0,
//            "import_datetime": "2017-02-06 09:58:39",
//            "trending_datetime": "0001-12-30 00:00:00",
//            "images":
//            {
//                "fixed_height_still":
//                {
//                    "url": "https://media0.giphy.com/media/ZzORsCYr9sLNm/200_s.gif",
//                    "width": "355",
//                    "height": "200",
//                    "size": "38043"
//                },
//                "original_still":
//                {
//                    "url": "https://media0.giphy.com/media/ZzORsCYr9sLNm/giphy_s.gif",
//                    "width": "350",
//                    "height": "197",
//                    "size": "38266"
//                },
//                "fixed_width":
//                {
//                    "url": "https://media0.giphy.com/media/ZzORsCYr9sLNm/200w.gif",
//                    "width": "200",
//                    "height": "113",
//                    "size": "737166",
//                    "mp4": "https://media0.giphy.com/media/ZzORsCYr9sLNm/200w.mp4",
//                    "mp4_size": "45258",
//                    "webp": "https://media0.giphy.com/media/ZzORsCYr9sLNm/200w.webp",
//                    "webp_size": "241322"
//                },
//                "fixed_height_small_still":
//                {
//                    "url": "https://media0.giphy.com/media/ZzORsCYr9sLNm/100_s.gif",
//                    "width": "178",
//                    "height": "100",
//                    "size": "12096"
//                },
//                "fixed_height_downsampled":
//                {
//                    "url": "https://media0.giphy.com/media/ZzORsCYr9sLNm/200_d.gif",
//                    "width": "355",
//                    "height": "200",
//                    "size": "239259",
//                    "webp": "https://media0.giphy.com/media/ZzORsCYr9sLNm/200_d.webp",
//                    "webp_size": "57694"
//                },
//                "preview":
//                {
//                    "width": "350",
//                    "height": "196",
//                    "mp4": "https://media0.giphy.com/media/ZzORsCYr9sLNm/giphy-preview.mp4",
//                    "mp4_size": "43799"
//                },
//                "fixed_height_small":
//                {
//                    "url": "https://media0.giphy.com/media/ZzORsCYr9sLNm/100.gif",
//                    "width": "178",
//                    "height": "100",
//                    "size": "594298",
//                    "mp4": "https://media0.giphy.com/media/ZzORsCYr9sLNm/100.mp4",
//                    "mp4_size": "39237",
//                    "webp": "https://media0.giphy.com/media/ZzORsCYr9sLNm/100.webp",
//                    "webp_size": "200980"
//                },
//                "downsized_still":
//                {
//                    "url": "https://media0.giphy.com/media/ZzORsCYr9sLNm/giphy-downsized_s.gif",
//                    "width": "250",
//                    "height": "140",
//                    "size": "21074"
//                },
//                "downsized":
//                {
//                    "url": "https://media0.giphy.com/media/ZzORsCYr9sLNm/giphy-downsized.gif",
//                    "width": "250",
//                    "height": "140",
//                    "size": "1100961"
//                },
//                "downsized_large":
//                {
//                    "url": "https://media0.giphy.com/media/ZzORsCYr9sLNm/giphy.gif",
//                    "width": "350",
//                    "height": "197",
//                    "size": "2079426"
//                },
//                "fixed_width_small_still":
//                {
//                    "url": "https://media0.giphy.com/media/ZzORsCYr9sLNm/100w_s.gif",
//                    "width": "100",
//                    "height": "57",
//                    "size": "5296"
//                },
//                "preview_webp":
//                {
//                    "url": "https://media0.giphy.com/media/ZzORsCYr9sLNm/giphy-preview.webp",
//                    "width": "222",
//                    "height": "125",
//                    "size": "49226"
//                },
//                "fixed_width_still":
//                {
//                    "url": "https://media0.giphy.com/media/ZzORsCYr9sLNm/200w_s.gif",
//                    "width": "200",
//                    "height": "113",
//                    "size": "14634"
//                },
//                "fixed_width_small":
//                {
//                    "url": "https://media0.giphy.com/media/ZzORsCYr9sLNm/100w.gif",
//                    "width": "100",
//                    "height": "57",
//                    "size": "223589",
//                    "mp4": "https://media0.giphy.com/media/ZzORsCYr9sLNm/100w.mp4",
//                    "mp4_size": "18647",
//                    "webp": "https://media0.giphy.com/media/ZzORsCYr9sLNm/100w.webp",
//                    "webp_size": "97156"
//                },
//                "downsized_small":
//                {
//                    "width": "350",
//                    "height": "196",
//                    "mp4": "https://media0.giphy.com/media/ZzORsCYr9sLNm/giphy-downsized-small.mp4",
//                    "mp4_size": "141494"
//                },
//                "fixed_width_downsampled":
//                {
//                    "url": "https://media0.giphy.com/media/ZzORsCYr9sLNm/200w_d.gif",
//                    "width": "200",
//                    "height": "113",
//                    "size": "87300",
//                    "webp": "https://media0.giphy.com/media/ZzORsCYr9sLNm/200w_d.webp",
//                    "webp_size": "25228"
//                },
//                "downsized_medium":
//                {
//                    "url": "https://media0.giphy.com/media/ZzORsCYr9sLNm/giphy.gif",
//                    "width": "350",
//                    "height": "197",
//                    "size": "2079426"
//                },
//                "original":
//                {
//                    "url": "https://media0.giphy.com/media/ZzORsCYr9sLNm/giphy.gif",
//                    "width": "350",
//                    "height": "197",
//                    "size": "2079426",
//                    "frames": "57",
//                    "mp4": "https://media0.giphy.com/media/ZzORsCYr9sLNm/giphy.mp4",
//                    "mp4_size": "198998",
//                    "webp": "https://media0.giphy.com/media/ZzORsCYr9sLNm/giphy.webp",
//                    "webp_size": "611078",
//                    "hash": "470a0979c6bc167ef0bb3fd8ad71e0d1"
//                },
//                "fixed_height":
//                {
//                    "url": "https://media0.giphy.com/media/ZzORsCYr9sLNm/200.gif",
//                    "width": "355",
//                    "height": "200",
//                    "size": "2049607",
//                    "mp4": "https://media0.giphy.com/media/ZzORsCYr9sLNm/200.mp4",
//                    "mp4_size": "110096",
//                    "webp": "https://media0.giphy.com/media/ZzORsCYr9sLNm/200.webp",
//                    "webp_size": "557158"
//                },
//                "looping":
//                {
//                    "mp4": "https://media0.giphy.com/media/ZzORsCYr9sLNm/giphy-loop.mp4",
//                    "mp4_size": "615815"
//                },
//                "original_mp4":
//                {
//                    "width": "480",
//                    "height": "270",
//                    "mp4": "https://media0.giphy.com/media/ZzORsCYr9sLNm/giphy.mp4",
//                    "mp4_size": "198998"
//                },
//                "preview_gif":
//                {
//                    "url": "https://media0.giphy.com/media/ZzORsCYr9sLNm/giphy-preview.gif",
//                    "width": "128",
//                    "height": "72",
//                    "size": "48228"
//                }
//            }
//        },
//        {
//            "type": "gif",
//            "id": "xUPGcCyZ9fLerpJosg",
//            "slug": "lilyachty-lit-migos-xUPGcCyZ9fLerpJosg",
//            "url": "https://giphy.com/gifs/lilyachty-lit-migos-xUPGcCyZ9fLerpJosg",
//            "bitly_gif_url": "http://gph.is/2oENIRs",
//            "bitly_url": "http://gph.is/2oENIRs",
//            "embed_url": "https://giphy.com/embed/xUPGcCyZ9fLerpJosg",
//            "username": "lilyachty",
//            "source": "",
//            "rating": "g",
//            "content_url": "",
//            "source_tld": "",
//            "source_post_url": "",
//            "is_indexable": 0,
//            "import_datetime": "2017-04-13 22:50:14",
//            "trending_datetime": "0001-12-30 00:00:00",
//            "user":
//            {
//                "avatar_url": "https://media.giphy.com/avatars/lilyachty/o2dlxptV6970.jpg",
//                "banner_url": "https://media.giphy.com/headers/lilyachty/9bIH3sWJcERI.jpg",
//                "profile_url": "https://giphy.com/lilyachty/",
//                "username": "lilyachty",
//                "display_name": "Lil Yachty",
//                "twitter": "@lilyachty"
//            },
//            "images":
//            {
//                "fixed_height_still":
//                {
//                    "url": "https://media1.giphy.com/media/xUPGcCyZ9fLerpJosg/200_s.gif",
//                    "width": "356",
//                    "height": "200",
//                    "size": "30309"
//                },
//                "original_still":
//                {
//                    "url": "https://media1.giphy.com/media/xUPGcCyZ9fLerpJosg/giphy_s.gif",
//                    "width": "358",
//                    "height": "201",
//                    "size": "27811"
//                },
//                "fixed_width":
//                {
//                    "url": "https://media1.giphy.com/media/xUPGcCyZ9fLerpJosg/200w.gif",
//                    "width": "200",
//                    "height": "112",
//                    "size": "2631561",
//                    "mp4": "https://media1.giphy.com/media/xUPGcCyZ9fLerpJosg/200w.mp4",
//                    "mp4_size": "523662",
//                    "webp": "https://media1.giphy.com/media/xUPGcCyZ9fLerpJosg/200w.webp",
//                    "webp_size": "954606"
//                },
//                "fixed_height_small_still":
//                {
//                    "url": "https://media1.giphy.com/media/xUPGcCyZ9fLerpJosg/100_s.gif",
//                    "width": "178",
//                    "height": "100",
//                    "size": "9489"
//                },
//                "fixed_height_downsampled":
//                {
//                    "url": "https://media1.giphy.com/media/xUPGcCyZ9fLerpJosg/200_d.gif",
//                    "width": "356",
//                    "height": "200",
//                    "size": "156003",
//                    "webp": "https://media1.giphy.com/media/xUPGcCyZ9fLerpJosg/200_d.webp",
//                    "webp_size": "47606"
//                },
//                "preview":
//                {
//                    "width": "260",
//                    "height": "144",
//                    "mp4": "https://media1.giphy.com/media/xUPGcCyZ9fLerpJosg/giphy-preview.mp4",
//                    "mp4_size": "43803"
//                },
//                "fixed_height_small":
//                {
//                    "url": "https://media1.giphy.com/media/xUPGcCyZ9fLerpJosg/100.gif",
//                    "width": "178",
//                    "height": "100",
//                    "size": "2205502",
//                    "mp4": "https://media1.giphy.com/media/xUPGcCyZ9fLerpJosg/100.mp4",
//                    "mp4_size": "463826",
//                    "webp": "https://media1.giphy.com/media/xUPGcCyZ9fLerpJosg/100.webp",
//                    "webp_size": "834486"
//                },
//                "downsized_still":
//                {
//                    "url": "https://media1.giphy.com/media/xUPGcCyZ9fLerpJosg/giphy-downsized_s.gif",
//                    "width": "358",
//                    "height": "201",
//                    "size": "27733"
//                },
//                "downsized":
//                {
//                    "url": "https://media1.giphy.com/media/xUPGcCyZ9fLerpJosg/giphy-downsized.gif",
//                    "width": "358",
//                    "height": "201",
//                    "size": "1396954"
//                },
//                "downsized_large":
//                {
//                    "url": "https://media1.giphy.com/media/xUPGcCyZ9fLerpJosg/giphy.gif",
//                    "width": "358",
//                    "height": "201",
//                    "size": "6277004"
//                },
//                "fixed_width_small_still":
//                {
//                    "url": "https://media1.giphy.com/media/xUPGcCyZ9fLerpJosg/100w_s.gif",
//                    "width": "100",
//                    "height": "56",
//                    "size": "3879"
//                },
//                "preview_webp":
//                {
//                    "url": "https://media1.giphy.com/media/xUPGcCyZ9fLerpJosg/giphy-preview.webp",
//                    "width": "224",
//                    "height": "126",
//                    "size": "47530"
//                },
//                "fixed_width_still":
//                {
//                    "url": "https://media1.giphy.com/media/xUPGcCyZ9fLerpJosg/200w_s.gif",
//                    "width": "200",
//                    "height": "112",
//                    "size": "11628"
//                },
//                "fixed_width_small":
//                {
//                    "url": "https://media1.giphy.com/media/xUPGcCyZ9fLerpJosg/100w.gif",
//                    "width": "100",
//                    "height": "56",
//                    "size": "913353",
//                    "mp4": "https://media1.giphy.com/media/xUPGcCyZ9fLerpJosg/100w.mp4",
//                    "mp4_size": "43156",
//                    "webp": "https://media1.giphy.com/media/xUPGcCyZ9fLerpJosg/100w.webp",
//                    "webp_size": "389272"
//                },
//                "downsized_small":
//                {
//                    "width": "146",
//                    "height": "82",
//                    "mp4": "https://media1.giphy.com/media/xUPGcCyZ9fLerpJosg/giphy-downsized-small.mp4",
//                    "mp4_size": "176609"
//                },
//                "fixed_width_downsampled":
//                {
//                    "url": "https://media1.giphy.com/media/xUPGcCyZ9fLerpJosg/200w_d.gif",
//                    "width": "200",
//                    "height": "112",
//                    "size": "57909",
//                    "webp": "https://media1.giphy.com/media/xUPGcCyZ9fLerpJosg/200w_d.webp",
//                    "webp_size": "23634"
//                },
//                "downsized_medium":
//                {
//                    "url": "https://media1.giphy.com/media/xUPGcCyZ9fLerpJosg/giphy-downsized-medium.gif",
//                    "width": "358",
//                    "height": "201",
//                    "size": "1876681"
//                },
//                "original":
//                {
//                    "url": "https://media1.giphy.com/media/xUPGcCyZ9fLerpJosg/giphy.gif",
//                    "width": "358",
//                    "height": "201",
//                    "size": "6277004",
//                    "frames": "250",
//                    "mp4": "https://media1.giphy.com/media/xUPGcCyZ9fLerpJosg/giphy.mp4",
//                    "mp4_size": "1719114",
//                    "webp": "https://media1.giphy.com/media/xUPGcCyZ9fLerpJosg/giphy.webp",
//                    "webp_size": "2065992",
//                    "hash": "970d0c6f8fce70ee07de1523d5b243d3"
//                },
//                "fixed_height":
//                {
//                    "url": "https://media1.giphy.com/media/xUPGcCyZ9fLerpJosg/200.gif",
//                    "width": "356",
//                    "height": "200",
//                    "size": "6831313",
//                    "mp4": "https://media1.giphy.com/media/xUPGcCyZ9fLerpJosg/200.mp4",
//                    "mp4_size": "1149215",
//                    "webp": "https://media1.giphy.com/media/xUPGcCyZ9fLerpJosg/200.webp",
//                    "webp_size": "1832870"
//                },
//                "looping":
//                {
//                    "mp4": "https://media1.giphy.com/media/xUPGcCyZ9fLerpJosg/giphy-loop.mp4",
//                    "mp4_size": "1967440"
//                },
//                "original_mp4":
//                {
//                    "width": "480",
//                    "height": "268",
//                    "mp4": "https://media1.giphy.com/media/xUPGcCyZ9fLerpJosg/giphy.mp4",
//                    "mp4_size": "1719114"
//                },
//                "preview_gif":
//                {
//                    "url": "https://media1.giphy.com/media/xUPGcCyZ9fLerpJosg/giphy-preview.gif",
//                    "width": "134",
//                    "height": "75",
//                    "size": "48638"
//                }
//            }
//        },
//        {
//            "type": "gif",
//            "id": "3oeSB612tYqN4Rr2UM",
//            "slug": "dj-khaled-migos-quavo-3oeSB612tYqN4Rr2UM",
//            "url": "https://giphy.com/gifs/dj-khaled-migos-quavo-3oeSB612tYqN4Rr2UM",
//            "bitly_gif_url": "http://gph.is/2phFn89",
//            "bitly_url": "http://gph.is/2phFn89",
//            "embed_url": "https://giphy.com/embed/3oeSB612tYqN4Rr2UM",
//            "username": "",
//            "source": "https://www.youtube.com/watch?v=weeI1G46q0o",
//            "rating": "g",
//            "content_url": "",
//            "source_tld": "www.youtube.com",
//            "source_post_url": "https://www.youtube.com/watch?v=weeI1G46q0o",
//            "is_indexable": 0,
//            "import_datetime": "2017-05-09 19:59:59",
//            "trending_datetime": "0000-00-00 00:00:00",
//            "images":
//            {
//                "fixed_height":
//                {
//                    "url": "https://media2.giphy.com/media/3oeSB612tYqN4Rr2UM/200.gif",
//                    "width": "480",
//                    "height": "200",
//                    "size": "513560",
//                    "mp4": "https://media2.giphy.com/media/3oeSB612tYqN4Rr2UM/200.mp4",
//                    "mp4_size": "55121",
//                    "webp": "https://media2.giphy.com/media/3oeSB612tYqN4Rr2UM/200.webp",
//                    "webp_size": "190546"
//                },
//                "fixed_height_still":
//                {
//                    "url": "https://media2.giphy.com/media/3oeSB612tYqN4Rr2UM/200_s.gif",
//                    "width": "480",
//                    "height": "200",
//                    "size": "64013"
//                },
//                "fixed_height_downsampled":
//                {
//                    "url": "https://media2.giphy.com/media/3oeSB612tYqN4Rr2UM/200_d.gif",
//                    "width": "480",
//                    "height": "200",
//                    "size": "381775",
//                    "webp": "https://media2.giphy.com/media/3oeSB612tYqN4Rr2UM/200_d.webp",
//                    "webp_size": "143046"
//                },
//                "fixed_width":
//                {
//                    "url": "https://media2.giphy.com/media/3oeSB612tYqN4Rr2UM/200w.gif",
//                    "width": "200",
//                    "height": "84",
//                    "size": "105780",
//                    "mp4": "https://media2.giphy.com/media/3oeSB612tYqN4Rr2UM/200w.mp4",
//                    "mp4_size": "18178",
//                    "webp": "https://media2.giphy.com/media/3oeSB612tYqN4Rr2UM/200w.webp",
//                    "webp_size": "50696"
//                },
//                "fixed_width_still":
//                {
//                    "url": "https://media2.giphy.com/media/3oeSB612tYqN4Rr2UM/200w_s.gif",
//                    "width": "200",
//                    "height": "84",
//                    "size": "14234"
//                },
//                "fixed_width_downsampled":
//                {
//                    "url": "https://media2.giphy.com/media/3oeSB612tYqN4Rr2UM/200w_d.gif",
//                    "width": "200",
//                    "height": "84",
//                    "size": "80889",
//                    "webp": "https://media2.giphy.com/media/3oeSB612tYqN4Rr2UM/200w_d.webp",
//                    "webp_size": "37968"
//                },
//                "fixed_height_small":
//                {
//                    "url": "https://media2.giphy.com/media/3oeSB612tYqN4Rr2UM/100.gif",
//                    "width": "240",
//                    "height": "100",
//                    "size": "139849",
//                    "mp4": "https://media2.giphy.com/media/3oeSB612tYqN4Rr2UM/100.mp4",
//                    "mp4_size": "22083",
//                    "webp": "https://media2.giphy.com/media/3oeSB612tYqN4Rr2UM/100.webp",
//                    "webp_size": "64638"
//                },
//                "fixed_height_small_still":
//                {
//                    "url": "https://media2.giphy.com/media/3oeSB612tYqN4Rr2UM/100_s.gif",
//                    "width": "240",
//                    "height": "100",
//                    "size": "18578"
//                },
//                "fixed_width_small":
//                {
//                    "url": "https://media2.giphy.com/media/3oeSB612tYqN4Rr2UM/100w.gif",
//                    "width": "100",
//                    "height": "42",
//                    "size": "28915",
//                    "mp4": "https://media2.giphy.com/media/3oeSB612tYqN4Rr2UM/100w.mp4",
//                    "mp4_size": "6762",
//                    "webp": "https://media2.giphy.com/media/3oeSB612tYqN4Rr2UM/100w.webp",
//                    "webp_size": "17162"
//                },
//                "fixed_width_small_still":
//                {
//                    "url": "https://media2.giphy.com/media/3oeSB612tYqN4Rr2UM/100w_s.gif",
//                    "width": "100",
//                    "height": "42",
//                    "size": "4633"
//                },
//                "downsized":
//                {
//                    "url": "https://media2.giphy.com/media/3oeSB612tYqN4Rr2UM/giphy-downsized.gif",
//                    "width": "480",
//                    "height": "200",
//                    "size": "513560"
//                },
//                "downsized_still":
//                {
//                    "url": "https://media2.giphy.com/media/3oeSB612tYqN4Rr2UM/giphy-downsized_s.gif",
//                    "width": "480",
//                    "height": "200",
//                    "size": "64013"
//                },
//                "downsized_large":
//                {
//                    "url": "https://media2.giphy.com/media/3oeSB612tYqN4Rr2UM/giphy.gif",
//                    "width": "480",
//                    "height": "200",
//                    "size": "513560"
//                },
//                "downsized_medium":
//                {
//                    "url": "https://media2.giphy.com/media/3oeSB612tYqN4Rr2UM/giphy.gif",
//                    "width": "480",
//                    "height": "200",
//                    "size": "513560"
//                },
//                "original":
//                {
//                    "url": "https://media2.giphy.com/media/3oeSB612tYqN4Rr2UM/giphy.gif",
//                    "width": "480",
//                    "height": "200",
//                    "size": "513560",
//                    "frames": "8",
//                    "mp4": "https://media2.giphy.com/media/3oeSB612tYqN4Rr2UM/giphy.mp4",
//                    "mp4_size": "61082",
//                    "webp": "https://media2.giphy.com/media/3oeSB612tYqN4Rr2UM/giphy.webp",
//                    "webp_size": "190546",
//                    "hash": "ecae06c31462668475ddeb58f4ffcba4"
//                },
//                "original_still":
//                {
//                    "url": "https://media2.giphy.com/media/3oeSB612tYqN4Rr2UM/giphy_s.gif",
//                    "width": "480",
//                    "height": "200",
//                    "size": "64013"
//                },
//                "looping":
//                {
//                    "mp4": "https://media2.giphy.com/media/3oeSB612tYqN4Rr2UM/giphy-loop.mp4",
//                    "mp4_size": "1603278"
//                },
//                "original_mp4":
//                {
//                    "mp4": "https://media2.giphy.com/media/3oeSB612tYqN4Rr2UM/giphy.mp4",
//                    "mp4_size": "61082",
//                    "width": "480",
//                    "height": "200"
//                },
//                "preview":
//                {
//                    "mp4": "https://media2.giphy.com/media/3oeSB612tYqN4Rr2UM/giphy-preview.mp4",
//                    "mp4_size": "44867",
//                    "width": "432",
//                    "height": "180"
//                },
//                "downsized_small":
//                {
//                    "mp4": "https://media2.giphy.com/media/3oeSB612tYqN4Rr2UM/giphy-downsized-small.mp4",
//                    "mp4_size": "61082",
//                    "width": "480",
//                    "height": "200"
//                },
//                "hd":
//                {
//                    "mp4": "https://media2.giphy.com/media/3oeSB612tYqN4Rr2UM/giphy-hd.mp4",
//                    "mp4_size": "200970",
//                    "width": "1284",
//                    "height": "534"
//                }
//            }
//        },
//        {
//            "type": "gif",
//            "id": "xUPGcGIh2hi39rzCOk",
//            "slug": "lilyachty-scary-migos-xUPGcGIh2hi39rzCOk",
//            "url": "https://giphy.com/gifs/lilyachty-scary-migos-xUPGcGIh2hi39rzCOk",
//            "bitly_gif_url": "http://gph.is/2pzgfFn",
//            "bitly_url": "http://gph.is/2pzgfFn",
//            "embed_url": "https://giphy.com/embed/xUPGcGIh2hi39rzCOk",
//            "username": "lilyachty",
//            "source": "",
//            "rating": "g",
//            "content_url": "",
//            "source_tld": "",
//            "source_post_url": "",
//            "is_indexable": 0,
//            "import_datetime": "2017-04-13 22:52:31",
//            "trending_datetime": "0001-12-30 00:00:00",
//            "user":
//            {
//                "avatar_url": "https://media.giphy.com/avatars/lilyachty/o2dlxptV6970.jpg",
//                "banner_url": "https://media.giphy.com/headers/lilyachty/9bIH3sWJcERI.jpg",
//                "profile_url": "https://giphy.com/lilyachty/",
//                "username": "lilyachty",
//                "display_name": "Lil Yachty",
//                "twitter": "@lilyachty"
//            },
//            "images":
//            {
//                "fixed_height_still":
//                {
//                    "url": "https://media3.giphy.com/media/xUPGcGIh2hi39rzCOk/200_s.gif",
//                    "width": "356",
//                    "height": "200",
//                    "size": "20221"
//                },
//                "original_still":
//                {
//                    "url": "https://media3.giphy.com/media/xUPGcGIh2hi39rzCOk/giphy_s.gif",
//                    "width": "249",
//                    "height": "140",
//                    "size": "9711"
//                },
//                "fixed_width":
//                {
//                    "url": "https://media3.giphy.com/media/xUPGcGIh2hi39rzCOk/200w.gif",
//                    "width": "200",
//                    "height": "112",
//                    "size": "1444953",
//                    "mp4": "https://media3.giphy.com/media/xUPGcGIh2hi39rzCOk/200w.mp4",
//                    "mp4_size": "195472",
//                    "webp": "https://media3.giphy.com/media/xUPGcGIh2hi39rzCOk/200w.webp",
//                    "webp_size": "400030"
//                },
//                "fixed_height_small_still":
//                {
//                    "url": "https://media3.giphy.com/media/xUPGcGIh2hi39rzCOk/100_s.gif",
//                    "width": "178",
//                    "height": "100",
//                    "size": "7165"
//                },
//                "fixed_height_downsampled":
//                {
//                    "url": "https://media3.giphy.com/media/xUPGcGIh2hi39rzCOk/200_d.gif",
//                    "width": "356",
//                    "height": "200",
//                    "size": "122762",
//                    "webp": "https://media3.giphy.com/media/xUPGcGIh2hi39rzCOk/200_d.webp",
//                    "webp_size": "39194"
//                },
//                "preview":
//                {
//                    "width": "248",
//                    "height": "140",
//                    "mp4": "https://media3.giphy.com/media/xUPGcGIh2hi39rzCOk/giphy-preview.mp4",
//                    "mp4_size": "45019"
//                },
//                "fixed_height_small":
//                {
//                    "url": "https://media3.giphy.com/media/xUPGcGIh2hi39rzCOk/100.gif",
//                    "width": "178",
//                    "height": "100",
//                    "size": "1193428",
//                    "mp4": "https://media3.giphy.com/media/xUPGcGIh2hi39rzCOk/100.mp4",
//                    "mp4_size": "171241",
//                    "webp": "https://media3.giphy.com/media/xUPGcGIh2hi39rzCOk/100.webp",
//                    "webp_size": "356028"
//                },
//                "downsized_still":
//                {
//                    "url": "https://media3.giphy.com/media/xUPGcGIh2hi39rzCOk/giphy-downsized_s.gif",
//                    "width": "249",
//                    "height": "140",
//                    "size": "8249"
//                },
//                "downsized":
//                {
//                    "url": "https://media3.giphy.com/media/xUPGcGIh2hi39rzCOk/giphy-downsized.gif",
//                    "width": "249",
//                    "height": "140",
//                    "size": "706548"
//                },
//                "downsized_large":
//                {
//                    "url": "https://media3.giphy.com/media/xUPGcGIh2hi39rzCOk/giphy.gif",
//                    "width": "249",
//                    "height": "140",
//                    "size": "2059177"
//                },
//                "fixed_width_small_still":
//                {
//                    "url": "https://media3.giphy.com/media/xUPGcGIh2hi39rzCOk/100w_s.gif",
//                    "width": "100",
//                    "height": "56",
//                    "size": "3284"
//                },
//                "preview_webp":
//                {
//                    "url": "https://media3.giphy.com/media/xUPGcGIh2hi39rzCOk/giphy-preview.webp",
//                    "width": "244",
//                    "height": "137",
//                    "size": "49784"
//                },
//                "fixed_width_still":
//                {
//                    "url": "https://media3.giphy.com/media/xUPGcGIh2hi39rzCOk/200w_s.gif",
//                    "width": "200",
//                    "height": "112",
//                    "size": "8312"
//                },
//                "fixed_width_small":
//                {
//                    "url": "https://media3.giphy.com/media/xUPGcGIh2hi39rzCOk/100w.gif",
//                    "width": "100",
//                    "height": "56",
//                    "size": "484333",
//                    "mp4": "https://media3.giphy.com/media/xUPGcGIh2hi39rzCOk/100w.mp4",
//                    "mp4_size": "46061",
//                    "webp": "https://media3.giphy.com/media/xUPGcGIh2hi39rzCOk/100w.webp",
//                    "webp_size": "168044"
//                },
//                "downsized_small":
//                {
//                    "width": "198",
//                    "height": "112",
//                    "mp4": "https://media3.giphy.com/media/xUPGcGIh2hi39rzCOk/giphy-downsized-small.mp4",
//                    "mp4_size": "119495"
//                },
//                "fixed_width_downsampled":
//                {
//                    "url": "https://media3.giphy.com/media/xUPGcGIh2hi39rzCOk/200w_d.gif",
//                    "width": "200",
//                    "height": "112",
//                    "size": "46993",
//                    "webp": "https://media3.giphy.com/media/xUPGcGIh2hi39rzCOk/200w_d.webp",
//                    "webp_size": "16566"
//                },
//                "downsized_medium":
//                {
//                    "url": "https://media3.giphy.com/media/xUPGcGIh2hi39rzCOk/giphy.gif",
//                    "width": "249",
//                    "height": "140",
//                    "size": "2059177"
//                },
//                "original":
//                {
//                    "url": "https://media3.giphy.com/media/xUPGcGIh2hi39rzCOk/giphy.gif",
//                    "width": "249",
//                    "height": "140",
//                    "size": "2059177",
//                    "frames": "151",
//                    "mp4": "https://media3.giphy.com/media/xUPGcGIh2hi39rzCOk/giphy.mp4",
//                    "mp4_size": "765149",
//                    "webp": "https://media3.giphy.com/media/xUPGcGIh2hi39rzCOk/giphy.webp",
//                    "webp_size": "601866",
//                    "hash": "d1b9373882000ca4e07e2e458439dd9d"
//                },
//                "fixed_height":
//                {
//                    "url": "https://media3.giphy.com/media/xUPGcGIh2hi39rzCOk/200.gif",
//                    "width": "356",
//                    "height": "200",
//                    "size": "3739944",
//                    "mp4": "https://media3.giphy.com/media/xUPGcGIh2hi39rzCOk/200.mp4",
//                    "mp4_size": "453480",
//                    "webp": "https://media3.giphy.com/media/xUPGcGIh2hi39rzCOk/200.webp",
//                    "webp_size": "871004"
//                },
//                "looping":
//                {
//                    "mp4": "https://media3.giphy.com/media/xUPGcGIh2hi39rzCOk/giphy-loop.mp4",
//                    "mp4_size": "1532219"
//                },
//                "original_mp4":
//                {
//                    "width": "480",
//                    "height": "268",
//                    "mp4": "https://media3.giphy.com/media/xUPGcGIh2hi39rzCOk/giphy.mp4",
//                    "mp4_size": "765149"
//                },
//                "preview_gif":
//                {
//                    "url": "https://media3.giphy.com/media/xUPGcGIh2hi39rzCOk/giphy-preview.gif",
//                    "width": "128",
//                    "height": "72",
//                    "size": "49311"
//                }
//            }
//        },
//        {
//            "type": "gif",
//            "id": "l4FGIBYOOmU9Ch3Gg",
//            "slug": "2chainz-2-chainz-migos-l4FGIBYOOmU9Ch3Gg",
//            "url": "https://giphy.com/gifs/2chainz-2-chainz-migos-l4FGIBYOOmU9Ch3Gg",
//            "bitly_gif_url": "",
//            "bitly_url": "",
//            "embed_url": "https://giphy.com/embed/l4FGIBYOOmU9Ch3Gg",
//            "username": "2chainz",
//            "source": "http://smarturl.it/BlueCheeseVid ",
//            "rating": "g",
//            "content_url": "",
//            "source_tld": "smarturl.it",
//            "source_post_url": "http://smarturl.it/BlueCheeseVid ",
//            "is_indexable": 0,
//            "import_datetime": "2017-06-16 23:50:01",
//            "trending_datetime": "0001-12-30 00:00:00",
//            "user":
//            {
//                "avatar_url": "https://media.giphy.com/avatars/2chainz/bowOfehzLVkz.jpg",
//                "banner_url": "",
//                "profile_url": "https://giphy.com/2chainz/",
//                "username": "2chainz",
//                "display_name": "2 Chainz",
//                "twitter": "@2chainz"
//            },
//            "images":
//            {
//                "fixed_height_still":
//                {
//                    "url": "https://media0.giphy.com/media/l4FGIBYOOmU9Ch3Gg/200_s.gif",
//                    "width": "313",
//                    "height": "200",
//                    "size": "20458"
//                },
//                "original_still":
//                {
//                    "url": "https://media0.giphy.com/media/l4FGIBYOOmU9Ch3Gg/giphy_s.gif",
//                    "width": "480",
//                    "height": "307",
//                    "size": "38121"
//                },
//                "fixed_width":
//                {
//                    "url": "https://media0.giphy.com/media/l4FGIBYOOmU9Ch3Gg/200w.gif",
//                    "width": "200",
//                    "height": "128",
//                    "size": "681929",
//                    "mp4": "https://media0.giphy.com/media/l4FGIBYOOmU9Ch3Gg/200w.mp4",
//                    "mp4_size": "112786",
//                    "webp": "https://media0.giphy.com/media/l4FGIBYOOmU9Ch3Gg/200w.webp",
//                    "webp_size": "218278"
//                },
//                "fixed_height_small_still":
//                {
//                    "url": "https://media0.giphy.com/media/l4FGIBYOOmU9Ch3Gg/100_s.gif",
//                    "width": "157",
//                    "height": "100",
//                    "size": "5585"
//                },
//                "fixed_height_downsampled":
//                {
//                    "url": "https://media0.giphy.com/media/l4FGIBYOOmU9Ch3Gg/200_d.gif",
//                    "width": "313",
//                    "height": "200",
//                    "size": "233750",
//                    "webp": "https://media0.giphy.com/media/l4FGIBYOOmU9Ch3Gg/200_d.webp",
//                    "webp_size": "102414"
//                },
//                "preview":
//                {
//                    "width": "150",
//                    "height": "96",
//                    "mp4": "https://media0.giphy.com/media/l4FGIBYOOmU9Ch3Gg/giphy-preview.mp4",
//                    "mp4_size": "42730"
//                },
//                "fixed_height_small":
//                {
//                    "url": "https://media0.giphy.com/media/l4FGIBYOOmU9Ch3Gg/100.gif",
//                    "width": "157",
//                    "height": "100",
//                    "size": "442753",
//                    "mp4": "https://media0.giphy.com/media/l4FGIBYOOmU9Ch3Gg/100.mp4",
//                    "mp4_size": "128803",
//                    "webp": "https://media0.giphy.com/media/l4FGIBYOOmU9Ch3Gg/100.webp",
//                    "webp_size": "146618"
//                },
//                "downsized_still":
//                {
//                    "url": "https://media0.giphy.com/media/l4FGIBYOOmU9Ch3Gg/giphy-downsized_s.gif",
//                    "width": "250",
//                    "height": "159",
//                    "size": "13290"
//                },
//                "downsized":
//                {
//                    "url": "https://media0.giphy.com/media/l4FGIBYOOmU9Ch3Gg/giphy-downsized.gif",
//                    "width": "250",
//                    "height": "159",
//                    "size": "1012184"
//                },
//                "downsized_large":
//                {
//                    "url": "https://media0.giphy.com/media/l4FGIBYOOmU9Ch3Gg/giphy.gif",
//                    "width": "480",
//                    "height": "307",
//                    "size": "3451682"
//                },
//                "fixed_width_small_still":
//                {
//                    "url": "https://media0.giphy.com/media/l4FGIBYOOmU9Ch3Gg/100w_s.gif",
//                    "width": "100",
//                    "height": "64",
//                    "size": "2641"
//                },
//                "preview_webp":
//                {
//                    "url": "https://media0.giphy.com/media/l4FGIBYOOmU9Ch3Gg/giphy-preview.webp",
//                    "width": "161",
//                    "height": "103",
//                    "size": "48902"
//                },
//                "fixed_width_still":
//                {
//                    "url": "https://media0.giphy.com/media/l4FGIBYOOmU9Ch3Gg/200w_s.gif",
//                    "width": "200",
//                    "height": "128",
//                    "size": "8748"
//                },
//                "fixed_width_small":
//                {
//                    "url": "https://media0.giphy.com/media/l4FGIBYOOmU9Ch3Gg/100w.gif",
//                    "width": "100",
//                    "height": "64",
//                    "size": "210376",
//                    "mp4": "https://media0.giphy.com/media/l4FGIBYOOmU9Ch3Gg/100w.mp4",
//                    "mp4_size": "37151",
//                    "webp": "https://media0.giphy.com/media/l4FGIBYOOmU9Ch3Gg/100w.webp",
//                    "webp_size": "73132"
//                },
//                "downsized_small":
//                {
//                    "width": "269",
//                    "height": "172",
//                    "mp4": "https://media0.giphy.com/media/l4FGIBYOOmU9Ch3Gg/giphy-downsized-small.mp4",
//                    "mp4_size": "91146"
//                },
//                "fixed_width_downsampled":
//                {
//                    "url": "https://media0.giphy.com/media/l4FGIBYOOmU9Ch3Gg/200w_d.gif",
//                    "width": "200",
//                    "height": "128",
//                    "size": "103139",
//                    "webp": "https://media0.giphy.com/media/l4FGIBYOOmU9Ch3Gg/200w_d.webp",
//                    "webp_size": "46754"
//                },
//                "downsized_medium":
//                {
//                    "url": "https://media0.giphy.com/media/l4FGIBYOOmU9Ch3Gg/giphy.gif",
//                    "width": "480",
//                    "height": "307",
//                    "size": "3451682"
//                },
//                "original":
//                {
//                    "url": "https://media0.giphy.com/media/l4FGIBYOOmU9Ch3Gg/giphy.gif",
//                    "width": "480",
//                    "height": "307",
//                    "size": "3451682",
//                    "frames": "31",
//                    "mp4": "https://media0.giphy.com/media/l4FGIBYOOmU9Ch3Gg/giphy.mp4",
//                    "mp4_size": "759686",
//                    "webp": "https://media0.giphy.com/media/l4FGIBYOOmU9Ch3Gg/giphy.webp",
//                    "webp_size": "1081926",
//                    "hash": "831cf2a575f1ff528da2ddedbaa55b44"
//                },
//                "fixed_height":
//                {
//                    "url": "https://media0.giphy.com/media/l4FGIBYOOmU9Ch3Gg/200.gif",
//                    "width": "313",
//                    "height": "200",
//                    "size": "1540855",
//                    "mp4": "https://media0.giphy.com/media/l4FGIBYOOmU9Ch3Gg/200.mp4",
//                    "mp4_size": "239823",
//                    "webp": "https://media0.giphy.com/media/l4FGIBYOOmU9Ch3Gg/200.webp",
//                    "webp_size": "454734"
//                },
//                "hd":
//                {
//                    "width": "1250",
//                    "height": "800",
//                    "mp4": "https://media0.giphy.com/media/l4FGIBYOOmU9Ch3Gg/giphy-hd.mp4",
//                    "mp4_size": "7681816"
//                },
//                "looping":
//                {
//                    "mp4": "https://media0.giphy.com/media/l4FGIBYOOmU9Ch3Gg/giphy-loop.mp4",
//                    "mp4_size": "4883506"
//                },
//                "original_mp4":
//                {
//                    "width": "480",
//                    "height": "306",
//                    "mp4": "https://media0.giphy.com/media/l4FGIBYOOmU9Ch3Gg/giphy.mp4",
//                    "mp4_size": "759686"
//                },
//                "preview_gif":
//                {
//                    "url": "https://media0.giphy.com/media/l4FGIBYOOmU9Ch3Gg/giphy-preview.gif",
//                    "width": "120",
//                    "height": "77",
//                    "size": "48355"
//                }
//            }
//        },
//        {
//            "type": "gif",
//            "id": "eNI5Qg0j3Z2Bq",
//            "slug": "madeupmonkeyshit-power-puff-girls-migos-eNI5Qg0j3Z2Bq",
//            "url": "https://giphy.com/gifs/madeupmonkeyshit-power-puff-girls-migos-eNI5Qg0j3Z2Bq",
//            "bitly_gif_url": "http://gph.is/1sCh5mg",
//            "bitly_url": "http://gph.is/1sCh5mg",
//            "embed_url": "https://giphy.com/embed/eNI5Qg0j3Z2Bq",
//            "username": "",
//            "source": "http://ruinedchildhood.com/post/102121668234",
//            "rating": "g",
//            "content_url": "",
//            "source_tld": "ruinedchildhood.com",
//            "source_post_url": "http://ruinedchildhood.com/post/102121668234",
//            "is_indexable": 0,
//            "import_datetime": "2016-06-13 16:00:47",
//            "trending_datetime": "1970-01-01 00:00:00",
//            "images":
//            {
//                "fixed_height_still":
//                {
//                    "url": "https://media0.giphy.com/media/eNI5Qg0j3Z2Bq/200_s.gif",
//                    "width": "297",
//                    "height": "200"
//                },
//                "original_still":
//                {
//                    "url": "https://media0.giphy.com/media/eNI5Qg0j3Z2Bq/giphy_s.gif",
//                    "width": "400",
//                    "height": "269"
//                },
//                "fixed_width":
//                {
//                    "url": "https://media0.giphy.com/media/eNI5Qg0j3Z2Bq/200w.gif",
//                    "width": "200",
//                    "height": "135",
//                    "size": "217698",
//                    "mp4": "https://media0.giphy.com/media/eNI5Qg0j3Z2Bq/200w.mp4",
//                    "mp4_size": "54685",
//                    "webp": "https://media0.giphy.com/media/eNI5Qg0j3Z2Bq/200w.webp",
//                    "webp_size": "206124"
//                },
//                "fixed_height_small_still":
//                {
//                    "url": "https://media0.giphy.com/media/eNI5Qg0j3Z2Bq/100_s.gif",
//                    "width": "149",
//                    "height": "100"
//                },
//                "fixed_height_downsampled":
//                {
//                    "url": "https://media0.giphy.com/media/eNI5Qg0j3Z2Bq/200_d.gif",
//                    "width": "297",
//                    "height": "200",
//                    "size": "134928",
//                    "webp": "https://media0.giphy.com/media/eNI5Qg0j3Z2Bq/200_d.webp",
//                    "webp_size": "87680"
//                },
//                "preview":
//                {
//                    "width": "150",
//                    "height": "100",
//                    "mp4": "https://media0.giphy.com/media/eNI5Qg0j3Z2Bq/giphy-preview.mp4",
//                    "mp4_size": "47050"
//                },
//                "fixed_height_small":
//                {
//                    "url": "https://media0.giphy.com/media/eNI5Qg0j3Z2Bq/100.gif",
//                    "width": "149",
//                    "height": "100",
//                    "size": "134134",
//                    "mp4": "https://media0.giphy.com/media/eNI5Qg0j3Z2Bq/100.mp4",
//                    "mp4_size": "37800",
//                    "webp": "https://media0.giphy.com/media/eNI5Qg0j3Z2Bq/100.webp",
//                    "webp_size": "136266"
//                },
//                "downsized_still":
//                {
//                    "url": "https://media0.giphy.com/media/eNI5Qg0j3Z2Bq/giphy-downsized_s.gif",
//                    "width": "400",
//                    "height": "269",
//                    "size": "37737"
//                },
//                "downsized":
//                {
//                    "url": "https://media0.giphy.com/media/eNI5Qg0j3Z2Bq/giphy-downsized.gif",
//                    "width": "400",
//                    "height": "269",
//                    "size": "770320"
//                },
//                "downsized_large":
//                {
//                    "url": "https://media0.giphy.com/media/eNI5Qg0j3Z2Bq/giphy.gif",
//                    "width": "400",
//                    "height": "269",
//                    "size": "770320"
//                },
//                "fixed_width_small_still":
//                {
//                    "url": "https://media0.giphy.com/media/eNI5Qg0j3Z2Bq/100w_s.gif",
//                    "width": "100",
//                    "height": "67"
//                },
//                "preview_webp":
//                {
//                    "url": "https://media0.giphy.com/media/eNI5Qg0j3Z2Bq/giphy-preview.webp",
//                    "width": "140",
//                    "height": "94",
//                    "size": "49772"
//                },
//                "fixed_width_still":
//                {
//                    "url": "https://media0.giphy.com/media/eNI5Qg0j3Z2Bq/200w_s.gif",
//                    "width": "200",
//                    "height": "135"
//                },
//                "fixed_width_small":
//                {
//                    "url": "https://media0.giphy.com/media/eNI5Qg0j3Z2Bq/100w.gif",
//                    "width": "100",
//                    "height": "67",
//                    "size": "68091",
//                    "mp4": "https://media0.giphy.com/media/eNI5Qg0j3Z2Bq/100w.mp4",
//                    "mp4_size": "24225",
//                    "webp": "https://media0.giphy.com/media/eNI5Qg0j3Z2Bq/100w.webp",
//                    "webp_size": "79800"
//                },
//                "downsized_small":
//                {
//                    "width": "400",
//                    "height": "268",
//                    "mp4": "https://media0.giphy.com/media/eNI5Qg0j3Z2Bq/giphy-downsized-small.mp4",
//                    "mp4_size": "112805"
//                },
//                "fixed_width_downsampled":
//                {
//                    "url": "https://media0.giphy.com/media/eNI5Qg0j3Z2Bq/200w_d.gif",
//                    "width": "200",
//                    "height": "135",
//                    "size": "63464",
//                    "webp": "https://media0.giphy.com/media/eNI5Qg0j3Z2Bq/200w_d.webp",
//                    "webp_size": "51416"
//                },
//                "downsized_medium":
//                {
//                    "url": "https://media0.giphy.com/media/eNI5Qg0j3Z2Bq/giphy.gif",
//                    "width": "400",
//                    "height": "269",
//                    "size": "770320"
//                },
//                "original":
//                {
//                    "url": "https://media0.giphy.com/media/eNI5Qg0j3Z2Bq/giphy.gif",
//                    "width": "400",
//                    "height": "269",
//                    "size": "770320",
//                    "frames": "26",
//                    "mp4": "https://media0.giphy.com/media/eNI5Qg0j3Z2Bq/giphy.mp4",
//                    "mp4_size": "145944",
//                    "webp": "https://media0.giphy.com/media/eNI5Qg0j3Z2Bq/giphy.webp",
//                    "webp_size": "520392"
//                },
//                "fixed_height":
//                {
//                    "url": "https://media0.giphy.com/media/eNI5Qg0j3Z2Bq/200.gif",
//                    "width": "297",
//                    "height": "200",
//                    "size": "455690",
//                    "mp4": "https://media0.giphy.com/media/eNI5Qg0j3Z2Bq/200.mp4",
//                    "mp4_size": "83764",
//                    "webp": "https://media0.giphy.com/media/eNI5Qg0j3Z2Bq/200.webp",
//                    "webp_size": "346400"
//                },
//                "looping":
//                {
//                    "mp4": "https://media0.giphy.com/media/eNI5Qg0j3Z2Bq/giphy-loop.mp4",
//                    "mp4_size": "1918614"
//                },
//                "original_mp4":
//                {
//                    "width": "480",
//                    "height": "322",
//                    "mp4": "https://media0.giphy.com/media/eNI5Qg0j3Z2Bq/giphy.mp4",
//                    "mp4_size": "145944"
//                },
//                "preview_gif":
//                {
//                    "url": "https://media0.giphy.com/media/eNI5Qg0j3Z2Bq/giphy-preview.gif",
//                    "width": "134",
//                    "height": "90",
//                    "size": "48874"
//                }
//            }
//        },
//        {
//            "type": "gif",
//            "id": "Oos0esgRV0oI8",
//            "slug": "bad-dances-boujee-Oos0esgRV0oI8",
//            "url": "https://giphy.com/gifs/bad-dances-boujee-Oos0esgRV0oI8",
//            "bitly_gif_url": "http://gph.is/2kFhswV",
//            "bitly_url": "http://gph.is/2kFhswV",
//            "embed_url": "https://giphy.com/embed/Oos0esgRV0oI8",
//            "username": "",
//            "source": "https://www.reddit.com/r/whitepeoplegifs/comments/5v7ash/ellen_audience_dances_to_migos_bad_boujee/",
//            "rating": "g",
//            "content_url": "",
//            "source_tld": "www.reddit.com",
//            "source_post_url": "https://www.reddit.com/r/whitepeoplegifs/comments/5v7ash/ellen_audience_dances_to_migos_bad_boujee/",
//            "is_indexable": 0,
//            "import_datetime": "2017-02-20 21:32:19",
//            "trending_datetime": "0001-12-30 00:00:00",
//            "images":
//            {
//                "fixed_height_still":
//                {
//                    "url": "https://media3.giphy.com/media/Oos0esgRV0oI8/200_s.gif",
//                    "width": "356",
//                    "height": "200",
//                    "size": "51513"
//                },
//                "original_still":
//                {
//                    "url": "https://media3.giphy.com/media/Oos0esgRV0oI8/giphy_s.gif",
//                    "width": "445",
//                    "height": "250",
//                    "size": "78939"
//                },
//                "fixed_width":
//                {
//                    "url": "https://media3.giphy.com/media/Oos0esgRV0oI8/200w.gif",
//                    "width": "200",
//                    "height": "112",
//                    "size": "2566114",
//                    "mp4": "https://media3.giphy.com/media/Oos0esgRV0oI8/200w.mp4",
//                    "mp4_size": "268810",
//                    "webp": "https://media3.giphy.com/media/Oos0esgRV0oI8/200w.webp",
//                    "webp_size": "1003384"
//                },
//                "fixed_height_small_still":
//                {
//                    "url": "https://media3.giphy.com/media/Oos0esgRV0oI8/100_s.gif",
//                    "width": "178",
//                    "height": "100",
//                    "size": "14689"
//                },
//                "fixed_height_downsampled":
//                {
//                    "url": "https://media3.giphy.com/media/Oos0esgRV0oI8/200_d.gif",
//                    "width": "356",
//                    "height": "200",
//                    "size": "280601",
//                    "webp": "https://media3.giphy.com/media/Oos0esgRV0oI8/200_d.webp",
//                    "webp_size": "88166"
//                },
//                "preview":
//                {
//                    "width": "184",
//                    "height": "102",
//                    "mp4": "https://media3.giphy.com/media/Oos0esgRV0oI8/giphy-preview.mp4",
//                    "mp4_size": "41764"
//                },
//                "fixed_height_small":
//                {
//                    "url": "https://media3.giphy.com/media/Oos0esgRV0oI8/100.gif",
//                    "width": "178",
//                    "height": "100",
//                    "size": "2192870",
//                    "mp4": "https://media3.giphy.com/media/Oos0esgRV0oI8/100.mp4",
//                    "mp4_size": "235957",
//                    "webp": "https://media3.giphy.com/media/Oos0esgRV0oI8/100.webp",
//                    "webp_size": "882892"
//                },
//                "downsized_still":
//                {
//                    "url": "https://media3.giphy.com/media/Oos0esgRV0oI8/giphy-downsized_s.gif",
//                    "width": "250",
//                    "height": "140",
//                    "size": "27561"
//                },
//                "downsized":
//                {
//                    "url": "https://media3.giphy.com/media/Oos0esgRV0oI8/giphy-downsized.gif",
//                    "width": "250",
//                    "height": "140",
//                    "size": "1348198"
//                },
//                "downsized_large":
//                {
//                    "url": "https://media3.giphy.com/media/Oos0esgRV0oI8/giphy-downsized-large.gif",
//                    "width": "445",
//                    "height": "250",
//                    "size": "6017163"
//                },
//                "fixed_width_small_still":
//                {
//                    "url": "https://media3.giphy.com/media/Oos0esgRV0oI8/100w_s.gif",
//                    "width": "100",
//                    "height": "56",
//                    "size": "5946"
//                },
//                "preview_webp":
//                {
//                    "url": "https://media3.giphy.com/media/Oos0esgRV0oI8/giphy-preview.webp",
//                    "width": "153",
//                    "height": "86",
//                    "size": "49738"
//                },
//                "fixed_width_still":
//                {
//                    "url": "https://media3.giphy.com/media/Oos0esgRV0oI8/200w_s.gif",
//                    "width": "200",
//                    "height": "112",
//                    "size": "17008"
//                },
//                "fixed_width_small":
//                {
//                    "url": "https://media3.giphy.com/media/Oos0esgRV0oI8/100w.gif",
//                    "width": "100",
//                    "height": "56",
//                    "size": "784501",
//                    "mp4": "https://media3.giphy.com/media/Oos0esgRV0oI8/100w.mp4",
//                    "mp4_size": "40756",
//                    "webp": "https://media3.giphy.com/media/Oos0esgRV0oI8/100w.webp",
//                    "webp_size": "373164"
//                },
//                "downsized_small":
//                {
//                    "width": "149",
//                    "height": "84",
//                    "mp4": "https://media3.giphy.com/media/Oos0esgRV0oI8/giphy-downsized-small.mp4",
//                    "mp4_size": "170457"
//                },
//                "fixed_width_downsampled":
//                {
//                    "url": "https://media3.giphy.com/media/Oos0esgRV0oI8/200w_d.gif",
//                    "width": "200",
//                    "height": "112",
//                    "size": "92428",
//                    "webp": "https://media3.giphy.com/media/Oos0esgRV0oI8/200w_d.webp",
//                    "webp_size": "34426"
//                },
//                "downsized_medium":
//                {
//                    "url": "https://media3.giphy.com/media/Oos0esgRV0oI8/giphy-downsized-medium.gif",
//                    "width": "356",
//                    "height": "200",
//                    "size": "3600009"
//                },
//                "original":
//                {
//                    "url": "https://media3.giphy.com/media/Oos0esgRV0oI8/giphy.gif",
//                    "width": "445",
//                    "height": "250",
//                    "size": "12729551",
//                    "frames": "178",
//                    "mp4": "https://media3.giphy.com/media/Oos0esgRV0oI8/giphy.mp4",
//                    "mp4_size": "1134512",
//                    "webp": "https://media3.giphy.com/media/Oos0esgRV0oI8/giphy.webp",
//                    "webp_size": "4049026",
//                    "hash": "2d2c397539a8ad62e4a83aa91f8f1d48"
//                },
//                "fixed_height":
//                {
//                    "url": "https://media3.giphy.com/media/Oos0esgRV0oI8/200.gif",
//                    "width": "356",
//                    "height": "200",
//                    "size": "7951648",
//                    "mp4": "https://media3.giphy.com/media/Oos0esgRV0oI8/200.mp4",
//                    "mp4_size": "621281",
//                    "webp": "https://media3.giphy.com/media/Oos0esgRV0oI8/200.webp",
//                    "webp_size": "2571592"
//                },
//                "looping":
//                {
//                    "mp4": "https://media3.giphy.com/media/Oos0esgRV0oI8/giphy-loop.mp4",
//                    "mp4_size": "1178609"
//                },
//                "original_mp4":
//                {
//                    "width": "480",
//                    "height": "268",
//                    "mp4": "https://media3.giphy.com/media/Oos0esgRV0oI8/giphy.mp4",
//                    "mp4_size": "1134512"
//                },
//                "preview_gif":
//                {
//                    "url": "https://media3.giphy.com/media/Oos0esgRV0oI8/giphy-preview.gif",
//                    "width": "109",
//                    "height": "61",
//                    "size": "47649"
//                }
//            }
//        },
//        {
//            "type": "gif",
//            "id": "3oKIP5OoMnNr8XzhAI",
//            "slug": "2chainz-2-chainz-migos-3oKIP5OoMnNr8XzhAI",
//            "url": "https://giphy.com/gifs/2chainz-2-chainz-migos-3oKIP5OoMnNr8XzhAI",
//            "bitly_gif_url": "",
//            "bitly_url": "",
//            "embed_url": "https://giphy.com/embed/3oKIP5OoMnNr8XzhAI",
//            "username": "2chainz",
//            "source": "http://smarturl.it/BlueCheeseVid ",
//            "rating": "g",
//            "content_url": "",
//            "source_tld": "smarturl.it",
//            "source_post_url": "http://smarturl.it/BlueCheeseVid ",
//            "is_indexable": 0,
//            "import_datetime": "2017-06-16 23:50:13",
//            "trending_datetime": "0001-12-30 00:00:00",
//            "user":
//            {
//                "avatar_url": "https://media.giphy.com/avatars/2chainz/bowOfehzLVkz.jpg",
//                "banner_url": "",
//                "profile_url": "https://giphy.com/2chainz/",
//                "username": "2chainz",
//                "display_name": "2 Chainz",
//                "twitter": "@2chainz"
//            },
//            "images":
//            {
//                "fixed_height_still":
//                {
//                    "url": "https://media1.giphy.com/media/3oKIP5OoMnNr8XzhAI/200_s.gif",
//                    "width": "300",
//                    "height": "200",
//                    "size": "36365"
//                },
//                "original_still":
//                {
//                    "url": "https://media1.giphy.com/media/3oKIP5OoMnNr8XzhAI/giphy_s.gif",
//                    "width": "480",
//                    "height": "320",
//                    "size": "88414"
//                },
//                "fixed_width":
//                {
//                    "url": "https://media1.giphy.com/media/3oKIP5OoMnNr8XzhAI/200w.gif",
//                    "width": "200",
//                    "height": "133",
//                    "size": "279347",
//                    "mp4": "https://media1.giphy.com/media/3oKIP5OoMnNr8XzhAI/200w.mp4",
//                    "mp4_size": "62171",
//                    "webp": "https://media1.giphy.com/media/3oKIP5OoMnNr8XzhAI/200w.webp",
//                    "webp_size": "96904"
//                },
//                "fixed_height_small_still":
//                {
//                    "url": "https://media1.giphy.com/media/3oKIP5OoMnNr8XzhAI/100_s.gif",
//                    "width": "150",
//                    "height": "100",
//                    "size": "10697"
//                },
//                "fixed_height_downsampled":
//                {
//                    "url": "https://media1.giphy.com/media/3oKIP5OoMnNr8XzhAI/200_d.gif",
//                    "width": "300",
//                    "height": "200",
//                    "size": "234852",
//                    "webp": "https://media1.giphy.com/media/3oKIP5OoMnNr8XzhAI/200_d.webp",
//                    "webp_size": "74424"
//                },
//                "preview":
//                {
//                    "width": "192",
//                    "height": "128",
//                    "mp4": "https://media1.giphy.com/media/3oKIP5OoMnNr8XzhAI/giphy-preview.mp4",
//                    "mp4_size": "28532"
//                },
//                "fixed_height_small":
//                {
//                    "url": "https://media1.giphy.com/media/3oKIP5OoMnNr8XzhAI/100.gif",
//                    "width": "150",
//                    "height": "100",
//                    "size": "172457",
//                    "mp4": "https://media1.giphy.com/media/3oKIP5OoMnNr8XzhAI/100.mp4",
//                    "mp4_size": "37611",
//                    "webp": "https://media1.giphy.com/media/3oKIP5OoMnNr8XzhAI/100.webp",
//                    "webp_size": "62128"
//                },
//                "downsized_still":
//                {
//                    "url": "https://media1.giphy.com/media/3oKIP5OoMnNr8XzhAI/giphy-downsized_s.gif",
//                    "width": "480",
//                    "height": "320",
//                    "size": "88414"
//                },
//                "downsized":
//                {
//                    "url": "https://media1.giphy.com/media/3oKIP5OoMnNr8XzhAI/giphy-downsized.gif",
//                    "width": "480",
//                    "height": "320",
//                    "size": "1470035"
//                },
//                "downsized_large":
//                {
//                    "url": "https://media1.giphy.com/media/3oKIP5OoMnNr8XzhAI/giphy.gif",
//                    "width": "480",
//                    "height": "320",
//                    "size": "1470035"
//                },
//                "fixed_width_small_still":
//                {
//                    "url": "https://media1.giphy.com/media/3oKIP5OoMnNr8XzhAI/100w_s.gif",
//                    "width": "100",
//                    "height": "67",
//                    "size": "5573"
//                },
//                "preview_webp":
//                {
//                    "url": "https://media1.giphy.com/media/3oKIP5OoMnNr8XzhAI/giphy-preview.webp",
//                    "width": "164",
//                    "height": "109",
//                    "size": "49902"
//                },
//                "fixed_width_still":
//                {
//                    "url": "https://media1.giphy.com/media/3oKIP5OoMnNr8XzhAI/200w_s.gif",
//                    "width": "200",
//                    "height": "133",
//                    "size": "17113"
//                },
//                "fixed_width_small":
//                {
//                    "url": "https://media1.giphy.com/media/3oKIP5OoMnNr8XzhAI/100w.gif",
//                    "width": "100",
//                    "height": "67",
//                    "size": "89412",
//                    "mp4": "https://media1.giphy.com/media/3oKIP5OoMnNr8XzhAI/100w.mp4",
//                    "mp4_size": "20161",
//                    "webp": "https://media1.giphy.com/media/3oKIP5OoMnNr8XzhAI/100w.webp",
//                    "webp_size": "32322"
//                },
//                "downsized_small":
//                {
//                    "width": "381",
//                    "height": "254",
//                    "mp4": "https://media1.giphy.com/media/3oKIP5OoMnNr8XzhAI/giphy-downsized-small.mp4",
//                    "mp4_size": "90546"
//                },
//                "fixed_width_downsampled":
//                {
//                    "url": "https://media1.giphy.com/media/3oKIP5OoMnNr8XzhAI/200w_d.gif",
//                    "width": "200",
//                    "height": "133",
//                    "size": "108707",
//                    "webp": "https://media1.giphy.com/media/3oKIP5OoMnNr8XzhAI/200w_d.webp",
//                    "webp_size": "39308"
//                },
//                "downsized_medium":
//                {
//                    "url": "https://media1.giphy.com/media/3oKIP5OoMnNr8XzhAI/giphy.gif",
//                    "width": "480",
//                    "height": "320",
//                    "size": "1470035"
//                },
//                "original":
//                {
//                    "url": "https://media1.giphy.com/media/3oKIP5OoMnNr8XzhAI/giphy.gif",
//                    "width": "480",
//                    "height": "320",
//                    "size": "1470035",
//                    "frames": "15",
//                    "mp4": "https://media1.giphy.com/media/3oKIP5OoMnNr8XzhAI/giphy.mp4",
//                    "mp4_size": "313992",
//                    "webp": "https://media1.giphy.com/media/3oKIP5OoMnNr8XzhAI/giphy.webp",
//                    "webp_size": "423526",
//                    "hash": "d449b8eb65b7bd872f99c1add781dd5c"
//                },
//                "fixed_height":
//                {
//                    "url": "https://media1.giphy.com/media/3oKIP5OoMnNr8XzhAI/200.gif",
//                    "width": "300",
//                    "height": "200",
//                    "size": "595125",
//                    "mp4": "https://media1.giphy.com/media/3oKIP5OoMnNr8XzhAI/200.mp4",
//                    "mp4_size": "115568",
//                    "webp": "https://media1.giphy.com/media/3oKIP5OoMnNr8XzhAI/200.webp",
//                    "webp_size": "181534"
//                },
//                "hd":
//                {
//                    "width": "1200",
//                    "height": "800",
//                    "mp4": "https://media1.giphy.com/media/3oKIP5OoMnNr8XzhAI/giphy-hd.mp4",
//                    "mp4_size": "2135357"
//                },
//                "looping":
//                {
//                    "mp4": "https://media1.giphy.com/media/3oKIP5OoMnNr8XzhAI/giphy-loop.mp4",
//                    "mp4_size": "4509498"
//                },
//                "original_mp4":
//                {
//                    "width": "480",
//                    "height": "320",
//                    "mp4": "https://media1.giphy.com/media/3oKIP5OoMnNr8XzhAI/giphy.mp4",
//                    "mp4_size": "313992"
//                },
//                "preview_gif":
//                {
//                    "url": "https://media1.giphy.com/media/3oKIP5OoMnNr8XzhAI/giphy-preview.gif",
//                    "width": "104",
//                    "height": "69",
//                    "size": "49480"
//                }
//            }
//        },
//        {
//            "type": "gif",
//            "id": "xUPGciVijVgoDWKfa8",
//            "slug": "fallontonight-jimmy-fallon-tonight-show-xUPGciVijVgoDWKfa8",
//            "url": "https://giphy.com/gifs/fallontonight-jimmy-fallon-tonight-show-xUPGciVijVgoDWKfa8",
//            "bitly_gif_url": "http://gph.is/2nfcsgw",
//            "bitly_url": "http://gph.is/2nfcsgw",
//            "embed_url": "https://giphy.com/embed/xUPGciVijVgoDWKfa8",
//            "username": "fallontonight",
//            "source": "YouTube.com/FallonTonight",
//            "rating": "g",
//            "content_url": "",
//            "source_tld": "",
//            "source_post_url": "YouTube.com/FallonTonight",
//            "is_indexable": 0,
//            "import_datetime": "2017-03-24 17:05:01",
//            "trending_datetime": "0001-12-30 00:00:00",
//            "user":
//            {
//                "avatar_url": "https://media.giphy.com/avatars/larrysprings/ApRXJvm0SIxt.jpg",
//                "banner_url": "https://media.giphy.com/headers/larrysprings/xWSnnvlxX1Cu.gif",
//                "profile_url": "https://giphy.com/fallontonight/",
//                "username": "fallontonight",
//                "display_name": "The Tonight Show Starring Jimmy Fallon",
//                "twitter": "@fallontonight"
//            },
//            "images":
//            {
//                "fixed_height_still":
//                {
//                    "url": "https://media2.giphy.com/media/xUPGciVijVgoDWKfa8/200_s.gif",
//                    "width": "400",
//                    "height": "200",
//                    "size": "59001"
//                },
//                "original_still":
//                {
//                    "url": "https://media2.giphy.com/media/xUPGciVijVgoDWKfa8/giphy_s.gif",
//                    "width": "500",
//                    "height": "250",
//                    "size": "90984"
//                },
//                "fixed_width":
//                {
//                    "url": "https://media2.giphy.com/media/xUPGciVijVgoDWKfa8/200w.gif",
//                    "width": "200",
//                    "height": "100",
//                    "size": "381828",
//                    "mp4": "https://media2.giphy.com/media/xUPGciVijVgoDWKfa8/200w.mp4",
//                    "mp4_size": "103065",
//                    "webp": "https://media2.giphy.com/media/xUPGciVijVgoDWKfa8/200w.webp",
//                    "webp_size": "223238"
//                },
//                "fixed_height_small_still":
//                {
//                    "url": "https://media2.giphy.com/media/xUPGciVijVgoDWKfa8/100_s.gif",
//                    "width": "200",
//                    "height": "100",
//                    "size": "17827"
//                },
//                "fixed_height_downsampled":
//                {
//                    "url": "https://media2.giphy.com/media/xUPGciVijVgoDWKfa8/200_d.gif",
//                    "width": "400",
//                    "height": "200",
//                    "size": "329446",
//                    "webp": "https://media2.giphy.com/media/xUPGciVijVgoDWKfa8/200_d.webp",
//                    "webp_size": "128088"
//                },
//                "preview":
//                {
//                    "width": "200",
//                    "height": "100",
//                    "mp4": "https://media2.giphy.com/media/xUPGciVijVgoDWKfa8/giphy-preview.mp4",
//                    "mp4_size": "46902"
//                },
//                "fixed_height_small":
//                {
//                    "url": "https://media2.giphy.com/media/xUPGciVijVgoDWKfa8/100.gif",
//                    "width": "200",
//                    "height": "100",
//                    "size": "399572",
//                    "mp4": "https://media2.giphy.com/media/xUPGciVijVgoDWKfa8/100.mp4",
//                    "mp4_size": "100594",
//                    "webp": "https://media2.giphy.com/media/xUPGciVijVgoDWKfa8/100.webp",
//                    "webp_size": "225420"
//                },
//                "downsized_still":
//                {
//                    "url": "https://media2.giphy.com/media/xUPGciVijVgoDWKfa8/giphy-downsized_s.gif",
//                    "width": "250",
//                    "height": "124",
//                    "size": "25047"
//                },
//                "downsized":
//                {
//                    "url": "https://media2.giphy.com/media/xUPGciVijVgoDWKfa8/giphy-downsized.gif",
//                    "width": "250",
//                    "height": "124",
//                    "size": "588056"
//                },
//                "downsized_large":
//                {
//                    "url": "https://media2.giphy.com/media/xUPGciVijVgoDWKfa8/giphy.gif",
//                    "width": "500",
//                    "height": "250",
//                    "size": "2479008"
//                },
//                "fixed_width_small_still":
//                {
//                    "url": "https://media2.giphy.com/media/xUPGciVijVgoDWKfa8/100w_s.gif",
//                    "width": "100",
//                    "height": "50",
//                    "size": "6534"
//                },
//                "preview_webp":
//                {
//                    "url": "https://media2.giphy.com/media/xUPGciVijVgoDWKfa8/giphy-preview.webp",
//                    "width": "144",
//                    "height": "72",
//                    "size": "47396"
//                },
//                "fixed_width_still":
//                {
//                    "url": "https://media2.giphy.com/media/xUPGciVijVgoDWKfa8/200w_s.gif",
//                    "width": "200",
//                    "height": "100",
//                    "size": "17502"
//                },
//                "fixed_width_small":
//                {
//                    "url": "https://media2.giphy.com/media/xUPGciVijVgoDWKfa8/100w.gif",
//                    "width": "100",
//                    "height": "50",
//                    "size": "107139",
//                    "mp4": "https://media2.giphy.com/media/xUPGciVijVgoDWKfa8/100w.mp4",
//                    "mp4_size": "35875",
//                    "webp": "https://media2.giphy.com/media/xUPGciVijVgoDWKfa8/100w.webp",
//                    "webp_size": "79162"
//                },
//                "downsized_small":
//                {
//                    "width": "276",
//                    "height": "138",
//                    "mp4": "https://media2.giphy.com/media/xUPGciVijVgoDWKfa8/giphy-downsized-small.mp4",
//                    "mp4_size": "107721"
//                },
//                "fixed_width_downsampled":
//                {
//                    "url": "https://media2.giphy.com/media/xUPGciVijVgoDWKfa8/200w_d.gif",
//                    "width": "200",
//                    "height": "100",
//                    "size": "87518",
//                    "webp": "https://media2.giphy.com/media/xUPGciVijVgoDWKfa8/200w_d.webp",
//                    "webp_size": "45654"
//                },
//                "downsized_medium":
//                {
//                    "url": "https://media2.giphy.com/media/xUPGciVijVgoDWKfa8/giphy.gif",
//                    "width": "500",
//                    "height": "250",
//                    "size": "2479008"
//                },
//                "original":
//                {
//                    "url": "https://media2.giphy.com/media/xUPGciVijVgoDWKfa8/giphy.gif",
//                    "width": "500",
//                    "height": "250",
//                    "size": "2479008",
//                    "frames": "30",
//                    "mp4": "https://media2.giphy.com/media/xUPGciVijVgoDWKfa8/giphy.mp4",
//                    "mp4_size": "401123",
//                    "webp": "https://media2.giphy.com/media/xUPGciVijVgoDWKfa8/giphy.webp",
//                    "webp_size": "983290",
//                    "hash": "97e63a77107b1dd624c4b3038d7ff025"
//                },
//                "fixed_height":
//                {
//                    "url": "https://media2.giphy.com/media/xUPGciVijVgoDWKfa8/200.gif",
//                    "width": "400",
//                    "height": "200",
//                    "size": "1532860",
//                    "mp4": "https://media2.giphy.com/media/xUPGciVijVgoDWKfa8/200.mp4",
//                    "mp4_size": "283991",
//                    "webp": "https://media2.giphy.com/media/xUPGciVijVgoDWKfa8/200.webp",
//                    "webp_size": "630504"
//                },
//                "looping":
//                {
//                    "mp4": "https://media2.giphy.com/media/xUPGciVijVgoDWKfa8/giphy-loop.mp4",
//                    "mp4_size": "2002379"
//                },
//                "original_mp4":
//                {
//                    "width": "480",
//                    "height": "240",
//                    "mp4": "https://media2.giphy.com/media/xUPGciVijVgoDWKfa8/giphy.mp4",
//                    "mp4_size": "401123"
//                },
//                "preview_gif":
//                {
//                    "url": "https://media2.giphy.com/media/xUPGciVijVgoDWKfa8/giphy-preview.gif",
//                    "width": "128",
//                    "height": "64",
//                    "size": "49732"
//                }
//            }
//        },
//        {
//            "type": "gif",
//            "id": "3ohzdMgZSBDD6dt0HK",
//            "slug": "lilyachty-lil-yachty-peek-a-boo-3ohzdMgZSBDD6dt0HK",
//            "url": "https://giphy.com/gifs/lilyachty-lil-yachty-peek-a-boo-3ohzdMgZSBDD6dt0HK",
//            "bitly_gif_url": "http://gph.is/2oEKduE",
//            "bitly_url": "http://gph.is/2oEKduE",
//            "embed_url": "https://giphy.com/embed/3ohzdMgZSBDD6dt0HK",
//            "username": "lilyachty",
//            "source": "",
//            "rating": "g",
//            "content_url": "",
//            "source_tld": "",
//            "source_post_url": "",
//            "is_indexable": 0,
//            "import_datetime": "2017-04-13 22:46:14",
//            "trending_datetime": "0001-12-30 00:00:00",
//            "user":
//            {
//                "avatar_url": "https://media.giphy.com/avatars/lilyachty/o2dlxptV6970.jpg",
//                "banner_url": "https://media.giphy.com/headers/lilyachty/9bIH3sWJcERI.jpg",
//                "profile_url": "https://giphy.com/lilyachty/",
//                "username": "lilyachty",
//                "display_name": "Lil Yachty",
//                "twitter": "@lilyachty"
//            },
//            "images":
//            {
//                "fixed_height_still":
//                {
//                    "url": "https://media3.giphy.com/media/3ohzdMgZSBDD6dt0HK/200_s.gif",
//                    "width": "357",
//                    "height": "200",
//                    "size": "33397"
//                },
//                "original_still":
//                {
//                    "url": "https://media3.giphy.com/media/3ohzdMgZSBDD6dt0HK/giphy_s.gif",
//                    "width": "305",
//                    "height": "171",
//                    "size": "24988"
//                },
//                "fixed_width":
//                {
//                    "url": "https://media3.giphy.com/media/3ohzdMgZSBDD6dt0HK/200w.gif",
//                    "width": "200",
//                    "height": "112",
//                    "size": "966905",
//                    "mp4": "https://media3.giphy.com/media/3ohzdMgZSBDD6dt0HK/200w.mp4",
//                    "mp4_size": "190490",
//                    "webp": "https://media3.giphy.com/media/3ohzdMgZSBDD6dt0HK/200w.webp",
//                    "webp_size": "331758"
//                },
//                "fixed_height_small_still":
//                {
//                    "url": "https://media3.giphy.com/media/3ohzdMgZSBDD6dt0HK/100_s.gif",
//                    "width": "179",
//                    "height": "100",
//                    "size": "10079"
//                },
//                "fixed_height_downsampled":
//                {
//                    "url": "https://media3.giphy.com/media/3ohzdMgZSBDD6dt0HK/200_d.gif",
//                    "width": "357",
//                    "height": "200",
//                    "size": "178059",
//                    "webp": "https://media3.giphy.com/media/3ohzdMgZSBDD6dt0HK/200_d.webp",
//                    "webp_size": "43824"
//                },
//                "preview":
//                {
//                    "width": "242",
//                    "height": "134",
//                    "mp4": "https://media3.giphy.com/media/3ohzdMgZSBDD6dt0HK/giphy-preview.mp4",
//                    "mp4_size": "42135"
//                },
//                "fixed_height_small":
//                {
//                    "url": "https://media3.giphy.com/media/3ohzdMgZSBDD6dt0HK/100.gif",
//                    "width": "179",
//                    "height": "100",
//                    "size": "782186",
//                    "mp4": "https://media3.giphy.com/media/3ohzdMgZSBDD6dt0HK/100.mp4",
//                    "mp4_size": "162640",
//                    "webp": "https://media3.giphy.com/media/3ohzdMgZSBDD6dt0HK/100.webp",
//                    "webp_size": "290628"
//                },
//                "downsized_still":
//                {
//                    "url": "https://media3.giphy.com/media/3ohzdMgZSBDD6dt0HK/giphy-downsized_s.gif",
//                    "width": "305",
//                    "height": "171",
//                    "size": "25859"
//                },
//                "downsized":
//                {
//                    "url": "https://media3.giphy.com/media/3ohzdMgZSBDD6dt0HK/giphy-downsized.gif",
//                    "width": "305",
//                    "height": "171",
//                    "size": "1281018"
//                },
//                "downsized_large":
//                {
//                    "url": "https://media3.giphy.com/media/3ohzdMgZSBDD6dt0HK/giphy.gif",
//                    "width": "305",
//                    "height": "171",
//                    "size": "2031096"
//                },
//                "fixed_width_small_still":
//                {
//                    "url": "https://media3.giphy.com/media/3ohzdMgZSBDD6dt0HK/100w_s.gif",
//                    "width": "100",
//                    "height": "56",
//                    "size": "3967"
//                },
//                "preview_webp":
//                {
//                    "url": "https://media3.giphy.com/media/3ohzdMgZSBDD6dt0HK/giphy-preview.webp",
//                    "width": "237",
//                    "height": "133",
//                    "size": "49816"
//                },
//                "fixed_width_still":
//                {
//                    "url": "https://media3.giphy.com/media/3ohzdMgZSBDD6dt0HK/200w_s.gif",
//                    "width": "200",
//                    "height": "112",
//                    "size": "12215"
//                },
//                "fixed_width_small":
//                {
//                    "url": "https://media3.giphy.com/media/3ohzdMgZSBDD6dt0HK/100w.gif",
//                    "width": "100",
//                    "height": "56",
//                    "size": "273241",
//                    "mp4": "https://media3.giphy.com/media/3ohzdMgZSBDD6dt0HK/100w.mp4",
//                    "mp4_size": "48328",
//                    "webp": "https://media3.giphy.com/media/3ohzdMgZSBDD6dt0HK/100w.webp",
//                    "webp_size": "137298"
//                },
//                "downsized_small":
//                {
//                    "width": "228",
//                    "height": "128",
//                    "mp4": "https://media3.giphy.com/media/3ohzdMgZSBDD6dt0HK/giphy-downsized-small.mp4",
//                    "mp4_size": "132826"
//                },
//                "fixed_width_downsampled":
//                {
//                    "url": "https://media3.giphy.com/media/3ohzdMgZSBDD6dt0HK/200w_d.gif",
//                    "width": "200",
//                    "height": "112",
//                    "size": "63653",
//                    "webp": "https://media3.giphy.com/media/3ohzdMgZSBDD6dt0HK/200w_d.webp",
//                    "webp_size": "20924"
//                },
//                "downsized_medium":
//                {
//                    "url": "https://media3.giphy.com/media/3ohzdMgZSBDD6dt0HK/giphy.gif",
//                    "width": "305",
//                    "height": "171",
//                    "size": "2031096"
//                },
//                "original":
//                {
//                    "url": "https://media3.giphy.com/media/3ohzdMgZSBDD6dt0HK/giphy.gif",
//                    "width": "305",
//                    "height": "171",
//                    "size": "2031096",
//                    "frames": "94",
//                    "mp4": "https://media3.giphy.com/media/3ohzdMgZSBDD6dt0HK/giphy.mp4",
//                    "mp4_size": "677343",
//                    "webp": "https://media3.giphy.com/media/3ohzdMgZSBDD6dt0HK/giphy.webp",
//                    "webp_size": "628410",
//                    "hash": "7f7ac4e1efde5333b4e16641716d1dcc"
//                },
//                "fixed_height":
//                {
//                    "url": "https://media3.giphy.com/media/3ohzdMgZSBDD6dt0HK/200.gif",
//                    "width": "357",
//                    "height": "200",
//                    "size": "2738732",
//                    "mp4": "https://media3.giphy.com/media/3ohzdMgZSBDD6dt0HK/200.mp4",
//                    "mp4_size": "413231",
//                    "webp": "https://media3.giphy.com/media/3ohzdMgZSBDD6dt0HK/200.webp",
//                    "webp_size": "684732"
//                },
//                "looping":
//                {
//                    "mp4": "https://media3.giphy.com/media/3ohzdMgZSBDD6dt0HK/giphy-loop.mp4",
//                    "mp4_size": "2038508"
//                },
//                "original_mp4":
//                {
//                    "width": "480",
//                    "height": "268",
//                    "mp4": "https://media3.giphy.com/media/3ohzdMgZSBDD6dt0HK/giphy.mp4",
//                    "mp4_size": "677343"
//                },
//                "preview_gif":
//                {
//                    "url": "https://media3.giphy.com/media/3ohzdMgZSBDD6dt0HK/giphy-preview.gif",
//                    "width": "137",
//                    "height": "77",
//                    "size": "49866"
//                }
//            }
//        },
//        {
//            "type": "gif",
//            "id": "Qv1F5lYLAH2XC",
//            "slug": "heard-taste-bobs-Qv1F5lYLAH2XC",
//            "url": "https://giphy.com/gifs/heard-taste-bobs-Qv1F5lYLAH2XC",
//            "bitly_gif_url": "http://gph.is/2ormFqj",
//            "bitly_url": "http://gph.is/2ormFqj",
//            "embed_url": "https://giphy.com/embed/Qv1F5lYLAH2XC",
//            "username": "",
//            "source": "https://www.reddit.com/r/wheredidthesodago/comments/62pbz6/darlis_was_disgusted_when_she_heard_bobs_newly/",
//            "rating": "g",
//            "content_url": "",
//            "source_tld": "www.reddit.com",
//            "source_post_url": "https://www.reddit.com/r/wheredidthesodago/comments/62pbz6/darlis_was_disgusted_when_she_heard_bobs_newly/",
//            "is_indexable": 0,
//            "import_datetime": "2017-04-01 00:18:49",
//            "trending_datetime": "0001-12-30 00:00:00",
//            "images":
//            {
//                "fixed_height_still":
//                {
//                    "url": "https://media0.giphy.com/media/Qv1F5lYLAH2XC/200_s.gif",
//                    "width": "267",
//                    "height": "200",
//                    "size": "13893"
//                },
//                "original_still":
//                {
//                    "url": "https://media0.giphy.com/media/Qv1F5lYLAH2XC/giphy_s.gif",
//                    "width": "720",
//                    "height": "540",
//                    "size": "108711"
//                },
//                "fixed_width":
//                {
//                    "url": "https://media0.giphy.com/media/Qv1F5lYLAH2XC/200w.gif",
//                    "width": "200",
//                    "height": "150",
//                    "size": "471081",
//                    "mp4": "https://media0.giphy.com/media/Qv1F5lYLAH2XC/200w.mp4",
//                    "mp4_size": "113823",
//                    "webp": "https://media0.giphy.com/media/Qv1F5lYLAH2XC/200w.webp",
//                    "webp_size": "457588"
//                },
//                "fixed_height_small_still":
//                {
//                    "url": "https://media0.giphy.com/media/Qv1F5lYLAH2XC/100_s.gif",
//                    "width": "134",
//                    "height": "100",
//                    "size": "4390"
//                },
//                "fixed_height_downsampled":
//                {
//                    "url": "https://media0.giphy.com/media/Qv1F5lYLAH2XC/200_d.gif",
//                    "width": "267",
//                    "height": "200",
//                    "size": "81001",
//                    "webp": "https://media0.giphy.com/media/Qv1F5lYLAH2XC/200_d.webp",
//                    "webp_size": "64912"
//                },
//                "preview":
//                {
//                    "width": "200",
//                    "height": "150",
//                    "mp4": "https://media0.giphy.com/media/Qv1F5lYLAH2XC/giphy-preview.mp4",
//                    "mp4_size": "21626"
//                },
//                "fixed_height_small":
//                {
//                    "url": "https://media0.giphy.com/media/Qv1F5lYLAH2XC/100.gif",
//                    "width": "134",
//                    "height": "100",
//                    "size": "232852",
//                    "mp4": "https://media0.giphy.com/media/Qv1F5lYLAH2XC/100.mp4",
//                    "mp4_size": "67058",
//                    "webp": "https://media0.giphy.com/media/Qv1F5lYLAH2XC/100.webp",
//                    "webp_size": "238750"
//                },
//                "downsized_still":
//                {
//                    "url": "https://media0.giphy.com/media/Qv1F5lYLAH2XC/giphy-downsized_s.gif",
//                    "width": "480",
//                    "height": "360",
//                    "size": "50314"
//                },
//                "downsized":
//                {
//                    "url": "https://media0.giphy.com/media/Qv1F5lYLAH2XC/giphy-downsized.gif",
//                    "width": "480",
//                    "height": "360",
//                    "size": "1093397"
//                },
//                "downsized_large":
//                {
//                    "url": "https://media0.giphy.com/media/Qv1F5lYLAH2XC/giphy.gif",
//                    "width": "720",
//                    "height": "540",
//                    "size": "5832566"
//                },
//                "fixed_width_small_still":
//                {
//                    "url": "https://media0.giphy.com/media/Qv1F5lYLAH2XC/100w_s.gif",
//                    "width": "100",
//                    "height": "75",
//                    "size": "2929"
//                },
//                "preview_webp":
//                {
//                    "url": "https://media0.giphy.com/media/Qv1F5lYLAH2XC/giphy-preview.webp",
//                    "width": "192",
//                    "height": "144",
//                    "size": "49066"
//                },
//                "fixed_width_still":
//                {
//                    "url": "https://media0.giphy.com/media/Qv1F5lYLAH2XC/200w_s.gif",
//                    "width": "200",
//                    "height": "150",
//                    "size": "7942"
//                },
//                "fixed_width_small":
//                {
//                    "url": "https://media0.giphy.com/media/Qv1F5lYLAH2XC/100w.gif",
//                    "width": "100",
//                    "height": "75",
//                    "size": "140334",
//                    "mp4": "https://media0.giphy.com/media/Qv1F5lYLAH2XC/100w.mp4",
//                    "mp4_size": "44455",
//                    "webp": "https://media0.giphy.com/media/Qv1F5lYLAH2XC/100w.webp",
//                    "webp_size": "152228"
//                },
//                "downsized_small":
//                {
//                    "width": "288",
//                    "height": "216",
//                    "mp4": "https://media0.giphy.com/media/Qv1F5lYLAH2XC/giphy-downsized-small.mp4",
//                    "mp4_size": "99918"
//                },
//                "fixed_width_downsampled":
//                {
//                    "url": "https://media0.giphy.com/media/Qv1F5lYLAH2XC/200w_d.gif",
//                    "width": "200",
//                    "height": "150",
//                    "size": "45437",
//                    "webp": "https://media0.giphy.com/media/Qv1F5lYLAH2XC/200w_d.webp",
//                    "webp_size": "36992"
//                },
//                "downsized_medium":
//                {
//                    "url": "https://media0.giphy.com/media/Qv1F5lYLAH2XC/giphy-downsized-medium.gif",
//                    "width": "720",
//                    "height": "540",
//                    "size": "3734035"
//                },
//                "original":
//                {
//                    "url": "https://media0.giphy.com/media/Qv1F5lYLAH2XC/giphy.gif",
//                    "width": "720",
//                    "height": "540",
//                    "size": "5832566",
//                    "frames": "117",
//                    "mp4": "https://media0.giphy.com/media/Qv1F5lYLAH2XC/giphy.mp4",
//                    "mp4_size": "625248",
//                    "webp": "https://media0.giphy.com/media/Qv1F5lYLAH2XC/giphy.webp",
//                    "webp_size": "5565400",
//                    "hash": "080624363f623aea034d69b8bd73a771"
//                },
//                "fixed_height":
//                {
//                    "url": "https://media0.giphy.com/media/Qv1F5lYLAH2XC/200.gif",
//                    "width": "267",
//                    "height": "200",
//                    "size": "805799",
//                    "mp4": "https://media0.giphy.com/media/Qv1F5lYLAH2XC/200.mp4",
//                    "mp4_size": "171134",
//                    "webp": "https://media0.giphy.com/media/Qv1F5lYLAH2XC/200.webp",
//                    "webp_size": "794668"
//                },
//                "hd":
//                {
//                    "width": "720",
//                    "height": "540",
//                    "mp4": "https://media0.giphy.com/media/Qv1F5lYLAH2XC/giphy-hd.mp4",
//                    "mp4_size": "3742869"
//                },
//                "looping":
//                {
//                    "mp4": "https://media0.giphy.com/media/Qv1F5lYLAH2XC/giphy-loop.mp4",
//                    "mp4_size": "2401493"
//                },
//                "original_mp4":
//                {
//                    "width": "480",
//                    "height": "360",
//                    "mp4": "https://media0.giphy.com/media/Qv1F5lYLAH2XC/giphy.mp4",
//                    "mp4_size": "625248"
//                },
//                "preview_gif":
//                {
//                    "url": "https://media0.giphy.com/media/Qv1F5lYLAH2XC/giphy-preview.gif",
//                    "width": "177",
//                    "height": "133",
//                    "size": "48033"
//                }
//            }
//        },
//        {
//            "type": "gif",
//            "id": "OGfVKrT01kzbq",
//            "slug": "white-bad-boujee-OGfVKrT01kzbq",
//            "url": "https://giphy.com/gifs/white-bad-boujee-OGfVKrT01kzbq",
//            "bitly_gif_url": "http://gph.is/2nedMz2",
//            "bitly_url": "http://gph.is/2nedMz2",
//            "embed_url": "https://giphy.com/embed/OGfVKrT01kzbq",
//            "username": "",
//            "source": "https://www.reddit.com/r/gifs/comments/5y7uy5/snow_white_ft_migos_bad_and_boujee/",
//            "rating": "g",
//            "content_url": "",
//            "source_tld": "www.reddit.com",
//            "source_post_url": "https://www.reddit.com/r/gifs/comments/5y7uy5/snow_white_ft_migos_bad_and_boujee/",
//            "is_indexable": 0,
//            "import_datetime": "2017-03-08 13:28:04",
//            "trending_datetime": "0001-12-30 00:00:00",
//            "images":
//            {
//                "fixed_height_still":
//                {
//                    "url": "https://media1.giphy.com/media/OGfVKrT01kzbq/200_s.gif",
//                    "width": "200",
//                    "height": "200",
//                    "size": "25925"
//                },
//                "original_still":
//                {
//                    "url": "https://media1.giphy.com/media/OGfVKrT01kzbq/giphy_s.gif",
//                    "width": "480",
//                    "height": "480",
//                    "size": "146895"
//                },
//                "fixed_width":
//                {
//                    "url": "https://media1.giphy.com/media/OGfVKrT01kzbq/200w.gif",
//                    "width": "200",
//                    "height": "200",
//                    "size": "1074211",
//                    "mp4": "https://media1.giphy.com/media/OGfVKrT01kzbq/200w.mp4",
//                    "mp4_size": "128653",
//                    "webp": "https://media1.giphy.com/media/OGfVKrT01kzbq/200w.webp",
//                    "webp_size": "358452"
//                },
//                "fixed_height_small_still":
//                {
//                    "url": "https://media1.giphy.com/media/OGfVKrT01kzbq/100_s.gif",
//                    "width": "100",
//                    "height": "100",
//                    "size": "8521"
//                },
//                "fixed_height_downsampled":
//                {
//                    "url": "https://media1.giphy.com/media/OGfVKrT01kzbq/200_d.gif",
//                    "width": "200",
//                    "height": "200",
//                    "size": "156507",
//                    "webp": "https://media1.giphy.com/media/OGfVKrT01kzbq/200_d.webp",
//                    "webp_size": "64452"
//                },
//                "preview":
//                {
//                    "width": "150",
//                    "height": "150",
//                    "mp4": "https://media1.giphy.com/media/OGfVKrT01kzbq/giphy-preview.mp4",
//                    "mp4_size": "38743"
//                },
//                "fixed_height_small":
//                {
//                    "url": "https://media1.giphy.com/media/OGfVKrT01kzbq/100.gif",
//                    "width": "100",
//                    "height": "100",
//                    "size": "340450",
//                    "mp4": "https://media1.giphy.com/media/OGfVKrT01kzbq/100.mp4",
//                    "mp4_size": "49783",
//                    "webp": "https://media1.giphy.com/media/OGfVKrT01kzbq/100.webp",
//                    "webp_size": "145180"
//                },
//                "downsized_still":
//                {
//                    "url": "https://media1.giphy.com/media/OGfVKrT01kzbq/giphy-downsized_s.gif",
//                    "width": "250",
//                    "height": "249",
//                    "size": "38818"
//                },
//                "downsized":
//                {
//                    "url": "https://media1.giphy.com/media/OGfVKrT01kzbq/giphy-downsized.gif",
//                    "width": "250",
//                    "height": "249",
//                    "size": "1627875"
//                },
//                "downsized_large":
//                {
//                    "url": "https://media1.giphy.com/media/OGfVKrT01kzbq/giphy.gif",
//                    "width": "480",
//                    "height": "480",
//                    "size": "6213296"
//                },
//                "fixed_width_small_still":
//                {
//                    "url": "https://media1.giphy.com/media/OGfVKrT01kzbq/100w_s.gif",
//                    "width": "100",
//                    "height": "100",
//                    "size": "8521"
//                },
//                "preview_webp":
//                {
//                    "url": "https://media1.giphy.com/media/OGfVKrT01kzbq/giphy-preview.webp",
//                    "width": "132",
//                    "height": "132",
//                    "size": "49634"
//                },
//                "fixed_width_still":
//                {
//                    "url": "https://media1.giphy.com/media/OGfVKrT01kzbq/200w_s.gif",
//                    "width": "200",
//                    "height": "200",
//                    "size": "25925"
//                },
//                "fixed_width_small":
//                {
//                    "url": "https://media1.giphy.com/media/OGfVKrT01kzbq/100w.gif",
//                    "width": "100",
//                    "height": "100",
//                    "size": "340450",
//                    "mp4": "https://media1.giphy.com/media/OGfVKrT01kzbq/100w.mp4",
//                    "mp4_size": "49783",
//                    "webp": "https://media1.giphy.com/media/OGfVKrT01kzbq/100w.webp",
//                    "webp_size": "145180"
//                },
//                "downsized_small":
//                {
//                    "width": "286",
//                    "height": "286",
//                    "mp4": "https://media1.giphy.com/media/OGfVKrT01kzbq/giphy-downsized-small.mp4",
//                    "mp4_size": "190949"
//                },
//                "fixed_width_downsampled":
//                {
//                    "url": "https://media1.giphy.com/media/OGfVKrT01kzbq/200w_d.gif",
//                    "width": "200",
//                    "height": "200",
//                    "size": "156507",
//                    "webp": "https://media1.giphy.com/media/OGfVKrT01kzbq/200w_d.webp",
//                    "webp_size": "64452"
//                },
//                "downsized_medium":
//                {
//                    "url": "https://media1.giphy.com/media/OGfVKrT01kzbq/giphy-downsized-medium.gif",
//                    "width": "384",
//                    "height": "384",
//                    "size": "3864626"
//                },
//                "original":
//                {
//                    "url": "https://media1.giphy.com/media/OGfVKrT01kzbq/giphy.gif",
//                    "width": "480",
//                    "height": "480",
//                    "size": "6213296",
//                    "frames": "46",
//                    "mp4": "https://media1.giphy.com/media/OGfVKrT01kzbq/giphy.mp4",
//                    "mp4_size": "614171",
//                    "webp": "https://media1.giphy.com/media/OGfVKrT01kzbq/giphy.webp",
//                    "webp_size": "1430988",
//                    "hash": "17716528967bb96a75edb066641ccd9b"
//                },
//                "fixed_height":
//                {
//                    "url": "https://media1.giphy.com/media/OGfVKrT01kzbq/200.gif",
//                    "width": "200",
//                    "height": "200",
//                    "size": "1074211",
//                    "mp4": "https://media1.giphy.com/media/OGfVKrT01kzbq/200.mp4",
//                    "mp4_size": "128653",
//                    "webp": "https://media1.giphy.com/media/OGfVKrT01kzbq/200.webp",
//                    "webp_size": "358452"
//                },
//                "looping":
//                {
//                    "mp4": "https://media1.giphy.com/media/OGfVKrT01kzbq/giphy-loop.mp4",
//                    "mp4_size": "1851490"
//                },
//                "original_mp4":
//                {
//                    "width": "480",
//                    "height": "480",
//                    "mp4": "https://media1.giphy.com/media/OGfVKrT01kzbq/giphy.mp4",
//                    "mp4_size": "614171"
//                },
//                "preview_gif":
//                {
//                    "url": "https://media1.giphy.com/media/OGfVKrT01kzbq/giphy-preview.gif",
//                    "width": "95",
//                    "height": "95",
//                    "size": "48520"
//                }
//            }
//        },
//        {
//            "type": "gif",
//            "id": "l1KVc466IM1UsX8UE",
//            "slug": "lilyachty-migos-lil-yachty-l1KVc466IM1UsX8UE",
//            "url": "https://giphy.com/gifs/lilyachty-migos-lil-yachty-l1KVc466IM1UsX8UE",
//            "bitly_gif_url": "http://gph.is/2pz33QS",
//            "bitly_url": "http://gph.is/2pz33QS",
//            "embed_url": "https://giphy.com/embed/l1KVc466IM1UsX8UE",
//            "username": "lilyachty",
//            "source": "",
//            "rating": "g",
//            "content_url": "",
//            "source_tld": "",
//            "source_post_url": "",
//            "is_indexable": 0,
//            "import_datetime": "2017-04-13 22:48:51",
//            "trending_datetime": "0001-12-30 00:00:00",
//            "user":
//            {
//                "avatar_url": "https://media.giphy.com/avatars/lilyachty/o2dlxptV6970.jpg",
//                "banner_url": "https://media.giphy.com/headers/lilyachty/9bIH3sWJcERI.jpg",
//                "profile_url": "https://giphy.com/lilyachty/",
//                "username": "lilyachty",
//                "display_name": "Lil Yachty",
//                "twitter": "@lilyachty"
//            },
//            "images":
//            {
//                "fixed_height_still":
//                {
//                    "url": "https://media0.giphy.com/media/l1KVc466IM1UsX8UE/200_s.gif",
//                    "width": "356",
//                    "height": "200",
//                    "size": "3259"
//                },
//                "original_still":
//                {
//                    "url": "https://media0.giphy.com/media/l1KVc466IM1UsX8UE/giphy_s.gif",
//                    "width": "260",
//                    "height": "146",
//                    "size": "1893"
//                },
//                "fixed_width":
//                {
//                    "url": "https://media0.giphy.com/media/l1KVc466IM1UsX8UE/200w.gif",
//                    "width": "200",
//                    "height": "112",
//                    "size": "1267189",
//                    "mp4": "https://media0.giphy.com/media/l1KVc466IM1UsX8UE/200w.mp4",
//                    "mp4_size": "198882",
//                    "webp": "https://media0.giphy.com/media/l1KVc466IM1UsX8UE/200w.webp",
//                    "webp_size": "397900"
//                },
//                "fixed_height_small_still":
//                {
//                    "url": "https://media0.giphy.com/media/l1KVc466IM1UsX8UE/100_s.gif",
//                    "width": "178",
//                    "height": "100",
//                    "size": "1189"
//                },
//                "fixed_height_downsampled":
//                {
//                    "url": "https://media0.giphy.com/media/l1KVc466IM1UsX8UE/200_d.gif",
//                    "width": "356",
//                    "height": "200",
//                    "size": "178863",
//                    "webp": "https://media0.giphy.com/media/l1KVc466IM1UsX8UE/200_d.webp",
//                    "webp_size": "42052"
//                },
//                "preview":
//                {
//                    "width": "152",
//                    "height": "84",
//                    "mp4": "https://media0.giphy.com/media/l1KVc466IM1UsX8UE/giphy-preview.mp4",
//                    "mp4_size": "35130"
//                },
//                "fixed_height_small":
//                {
//                    "url": "https://media0.giphy.com/media/l1KVc466IM1UsX8UE/100.gif",
//                    "width": "178",
//                    "height": "100",
//                    "size": "1037063",
//                    "mp4": "https://media0.giphy.com/media/l1KVc466IM1UsX8UE/100.mp4",
//                    "mp4_size": "175987",
//                    "webp": "https://media0.giphy.com/media/l1KVc466IM1UsX8UE/100.webp",
//                    "webp_size": "357182"
//                },
//                "downsized_still":
//                {
//                    "url": "https://media0.giphy.com/media/l1KVc466IM1UsX8UE/giphy-downsized_s.gif",
//                    "width": "260",
//                    "height": "146",
//                    "size": "1893"
//                },
//                "downsized":
//                {
//                    "url": "https://media0.giphy.com/media/l1KVc466IM1UsX8UE/giphy-downsized.gif",
//                    "width": "260",
//                    "height": "146",
//                    "size": "1928752"
//                },
//                "downsized_large":
//                {
//                    "url": "https://media0.giphy.com/media/l1KVc466IM1UsX8UE/giphy.gif",
//                    "width": "260",
//                    "height": "146",
//                    "size": "1928752"
//                },
//                "fixed_width_small_still":
//                {
//                    "url": "https://media0.giphy.com/media/l1KVc466IM1UsX8UE/100w_s.gif",
//                    "width": "100",
//                    "height": "56",
//                    "size": "473"
//                },
//                "preview_webp":
//                {
//                    "url": "https://media0.giphy.com/media/l1KVc466IM1UsX8UE/giphy-preview.webp",
//                    "width": "162",
//                    "height": "91",
//                    "size": "48828"
//                },
//                "fixed_width_still":
//                {
//                    "url": "https://media0.giphy.com/media/l1KVc466IM1UsX8UE/200w_s.gif",
//                    "width": "200",
//                    "height": "112",
//                    "size": "1336"
//                },
//                "fixed_width_small":
//                {
//                    "url": "https://media0.giphy.com/media/l1KVc466IM1UsX8UE/100w.gif",
//                    "width": "100",
//                    "height": "56",
//                    "size": "366206",
//                    "mp4": "https://media0.giphy.com/media/l1KVc466IM1UsX8UE/100w.mp4",
//                    "mp4_size": "46679",
//                    "webp": "https://media0.giphy.com/media/l1KVc466IM1UsX8UE/100w.webp",
//                    "webp_size": "175376"
//                },
//                "downsized_small":
//                {
//                    "width": "192",
//                    "height": "108",
//                    "mp4": "https://media0.giphy.com/media/l1KVc466IM1UsX8UE/giphy-downsized-small.mp4",
//                    "mp4_size": "122813"
//                },
//                "fixed_width_downsampled":
//                {
//                    "url": "https://media0.giphy.com/media/l1KVc466IM1UsX8UE/200w_d.gif",
//                    "width": "200",
//                    "height": "112",
//                    "size": "67720",
//                    "webp": "https://media0.giphy.com/media/l1KVc466IM1UsX8UE/200w_d.webp",
//                    "webp_size": "20850"
//                },
//                "downsized_medium":
//                {
//                    "url": "https://media0.giphy.com/media/l1KVc466IM1UsX8UE/giphy.gif",
//                    "width": "260",
//                    "height": "146",
//                    "size": "1928752"
//                },
//                "original":
//                {
//                    "url": "https://media0.giphy.com/media/l1KVc466IM1UsX8UE/giphy.gif",
//                    "width": "260",
//                    "height": "146",
//                    "size": "1928752",
//                    "frames": "100",
//                    "mp4": "https://media0.giphy.com/media/l1KVc466IM1UsX8UE/giphy.mp4",
//                    "mp4_size": "739623",
//                    "webp": "https://media0.giphy.com/media/l1KVc466IM1UsX8UE/giphy.webp",
//                    "webp_size": "595360",
//                    "hash": "5d21eefd7879056190ee6aae252a4180"
//                },
//                "fixed_height":
//                {
//                    "url": "https://media0.giphy.com/media/l1KVc466IM1UsX8UE/200.gif",
//                    "width": "356",
//                    "height": "200",
//                    "size": "3397546",
//                    "mp4": "https://media0.giphy.com/media/l1KVc466IM1UsX8UE/200.mp4",
//                    "mp4_size": "461359",
//                    "webp": "https://media0.giphy.com/media/l1KVc466IM1UsX8UE/200.webp",
//                    "webp_size": "815762"
//                },
//                "looping":
//                {
//                    "mp4": "https://media0.giphy.com/media/l1KVc466IM1UsX8UE/giphy-loop.mp4",
//                    "mp4_size": "2222088"
//                },
//                "original_mp4":
//                {
//                    "width": "480",
//                    "height": "268",
//                    "mp4": "https://media0.giphy.com/media/l1KVc466IM1UsX8UE/giphy.mp4",
//                    "mp4_size": "739623"
//                },
//                "preview_gif":
//                {
//                    "url": "https://media0.giphy.com/media/l1KVc466IM1UsX8UE/giphy-preview.gif",
//                    "width": "110",
//                    "height": "62",
//                    "size": "49783"
//                }
//            }
//        },
//        {
//            "type": "gif",
//            "id": "C0uepo1ptJHAk",
//            "slug": "kanye-west-travis-scott-good-music-C0uepo1ptJHAk",
//            "url": "https://giphy.com/gifs/kanye-west-travis-scott-good-music-C0uepo1ptJHAk",
//            "bitly_gif_url": "http://gph.is/1LDwK9n",
//            "bitly_url": "http://gph.is/1LDwK9n",
//            "embed_url": "https://giphy.com/embed/C0uepo1ptJHAk",
//            "username": "",
//            "source": "http://dawastelander.tumblr.com/post/126134175563/la-flame",
//            "rating": "g",
//            "content_url": "",
//            "source_tld": "dawastelander.tumblr.com",
//            "source_post_url": "http://dawastelander.tumblr.com/post/126134175563/la-flame",
//            "is_indexable": 0,
//            "import_datetime": "2015-08-30 13:43:42",
//            "trending_datetime": "0001-12-30 00:00:00",
//            "images":
//            {
//                "fixed_height_still":
//                {
//                    "url": "https://media3.giphy.com/media/C0uepo1ptJHAk/200_s.gif",
//                    "width": "356",
//                    "height": "200"
//                },
//                "original_still":
//                {
//                    "url": "https://media3.giphy.com/media/C0uepo1ptJHAk/giphy_s.gif",
//                    "width": "480",
//                    "height": "270"
//                },
//                "fixed_width":
//                {
//                    "url": "https://media3.giphy.com/media/C0uepo1ptJHAk/200w.gif",
//                    "width": "200",
//                    "height": "113",
//                    "size": "223421",
//                    "mp4": "https://media3.giphy.com/media/C0uepo1ptJHAk/200w.mp4",
//                    "mp4_size": "39948",
//                    "webp": "https://media3.giphy.com/media/C0uepo1ptJHAk/200w.webp",
//                    "webp_size": "164118"
//                },
//                "fixed_height_small_still":
//                {
//                    "url": "https://media3.giphy.com/media/C0uepo1ptJHAk/100_s.gif",
//                    "width": "178",
//                    "height": "100"
//                },
//                "fixed_height_downsampled":
//                {
//                    "url": "https://media3.giphy.com/media/C0uepo1ptJHAk/200_d.gif",
//                    "width": "356",
//                    "height": "200",
//                    "size": "63482",
//                    "webp": "https://media3.giphy.com/media/C0uepo1ptJHAk/200_d.webp",
//                    "webp_size": "37114"
//                },
//                "preview":
//                {
//                    "width": "354",
//                    "height": "198",
//                    "mp4": "https://media3.giphy.com/media/C0uepo1ptJHAk/giphy-preview.mp4",
//                    "mp4_size": "29779"
//                },
//                "fixed_height_small":
//                {
//                    "url": "https://media3.giphy.com/media/C0uepo1ptJHAk/100.gif",
//                    "width": "178",
//                    "height": "100",
//                    "size": "276838",
//                    "mp4": "https://media3.giphy.com/media/C0uepo1ptJHAk/100.mp4",
//                    "mp4_size": "33541",
//                    "webp": "https://media3.giphy.com/media/C0uepo1ptJHAk/100.webp",
//                    "webp_size": "132794"
//                },
//                "downsized_still":
//                {
//                    "url": "https://media3.giphy.com/media/C0uepo1ptJHAk/giphy-downsized_s.gif",
//                    "width": "480",
//                    "height": "270",
//                    "size": "10168"
//                },
//                "downsized":
//                {
//                    "url": "https://media3.giphy.com/media/C0uepo1ptJHAk/giphy-downsized.gif",
//                    "width": "480",
//                    "height": "270",
//                    "size": "704745"
//                },
//                "downsized_large":
//                {
//                    "url": "https://media3.giphy.com/media/C0uepo1ptJHAk/giphy.gif",
//                    "width": "480",
//                    "height": "270",
//                    "size": "704745"
//                },
//                "fixed_width_small_still":
//                {
//                    "url": "https://media3.giphy.com/media/C0uepo1ptJHAk/100w_s.gif",
//                    "width": "100",
//                    "height": "56"
//                },
//                "preview_webp":
//                {
//                    "url": "https://media3.giphy.com/media/C0uepo1ptJHAk/giphy-preview.webp",
//                    "width": "304",
//                    "height": "171",
//                    "size": "47810"
//                },
//                "fixed_width_still":
//                {
//                    "url": "https://media3.giphy.com/media/C0uepo1ptJHAk/200w_s.gif",
//                    "width": "200",
//                    "height": "113"
//                },
//                "fixed_width_small":
//                {
//                    "url": "https://media3.giphy.com/media/C0uepo1ptJHAk/100w.gif",
//                    "width": "100",
//                    "height": "56",
//                    "size": "103588",
//                    "mp4": "https://media3.giphy.com/media/C0uepo1ptJHAk/100w.mp4",
//                    "mp4_size": "17006",
//                    "webp": "https://media3.giphy.com/media/C0uepo1ptJHAk/100w.webp",
//                    "webp_size": "66056"
//                },
//                "downsized_small":
//                {
//                    "width": "480",
//                    "height": "270",
//                    "mp4": "https://media3.giphy.com/media/C0uepo1ptJHAk/giphy-downsized-small.mp4",
//                    "mp4_size": "165316"
//                },
//                "fixed_width_downsampled":
//                {
//                    "url": "https://media3.giphy.com/media/C0uepo1ptJHAk/200w_d.gif",
//                    "width": "200",
//                    "height": "113",
//                    "size": "22998",
//                    "webp": "https://media3.giphy.com/media/C0uepo1ptJHAk/200w_d.webp",
//                    "webp_size": "17214"
//                },
//                "downsized_medium":
//                {
//                    "url": "https://media3.giphy.com/media/C0uepo1ptJHAk/giphy.gif",
//                    "width": "480",
//                    "height": "270",
//                    "size": "704745"
//                },
//                "original":
//                {
//                    "url": "https://media3.giphy.com/media/C0uepo1ptJHAk/giphy.gif",
//                    "width": "480",
//                    "height": "270",
//                    "size": "704745",
//                    "frames": "55",
//                    "mp4": "https://media3.giphy.com/media/C0uepo1ptJHAk/giphy.mp4",
//                    "mp4_size": "159426",
//                    "webp": "https://media3.giphy.com/media/C0uepo1ptJHAk/giphy.webp",
//                    "webp_size": "564314"
//                },
//                "fixed_height":
//                {
//                    "url": "https://media3.giphy.com/media/C0uepo1ptJHAk/200.gif",
//                    "width": "356",
//                    "height": "200",
//                    "size": "632357",
//                    "mp4": "https://media3.giphy.com/media/C0uepo1ptJHAk/200.mp4",
//                    "mp4_size": "82892",
//                    "webp": "https://media3.giphy.com/media/C0uepo1ptJHAk/200.webp",
//                    "webp_size": "361220"
//                },
//                "looping":
//                {
//                    "mp4": "https://media3.giphy.com/media/C0uepo1ptJHAk/giphy-loop.mp4",
//                    "mp4_size": "735378"
//                },
//                "original_mp4":
//                {
//                    "width": "480",
//                    "height": "270",
//                    "mp4": "https://media3.giphy.com/media/C0uepo1ptJHAk/giphy.mp4",
//                    "mp4_size": "159426"
//                },
//                "preview_gif":
//                {
//                    "url": "https://media3.giphy.com/media/C0uepo1ptJHAk/giphy-preview.gif",
//                    "width": "172",
//                    "height": "97",
//                    "size": "48649"
//                }
//            }
//        }
//    ],
//    "pagination":
//    {
//        "total_count": 131,
//        "count": 25,
//        "offset": 0
//    },
//    "meta":
//    {
//        "status": 200,
//        "msg": "OK",
//        "response_id": "597f74b34b48534c73b2f0bf"
//    }
// }