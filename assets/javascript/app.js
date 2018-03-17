// Variables

// create an array of strings related to a topic that interests you
topics = ["sci-fi", "aliens", "monsters", "kaiju", "space"];

// ==============================================================================

// take the toipcs in the array and create buttons in the html
// loop that appends a button for each string 
for (var i = 0; i < topics.length; i++) {
    var topicsBtn = $("<button>");
    topicsBtn.addClass("topicButtons");
    topicsBtn.attr("data-options", topics[i]);
    topicsBtn.text(topics[i]);
    $("#buttons").append(topicsBtn);
}

// when user clicks button, page grabs 10 static, non-nanimated gif images 
// from GIPHY API and places them on the page
$("button").click(function(){
    var topic = $(this).attr("data-options");
    var queryUrl = "https://api.giphy.com/v1/gifs/search?q="+
     topic + "&api_key=IKuRboJlJrxsfjPPSIqlWK0o2K28wlcJ&limit=10";

     $.ajax({
        URL: queryUrl,
        method: "GET"
     }).then(function(response) {
        console.log(response);
     });
});

// when user clicks a still giphy image, the gif will animate
// when user clicks again, image will stop

// under every gif is its rating (PG, PG-13, etc)

// Add a form to your page takes the value from a user input box 
// and adds it into your topics array.

// Then make a function call that takes each 
// topic in the array remakes the buttons on the page.


