// Variables

// create an array of strings related to a topic that interests you
topics = ["sci-fi", "aliens", "monsters", "kaiju", "space"];

// ==============================================================================

// take the toipcs in the array and create buttons in the html
// loop that appends a button for each string 
function buttons () {
    $("#buttons").empty();

    for (var i = 0; i < topics.length; i++) {
        var topicsBtn = $("<button>");
        topicsBtn.addClass("topicButtons");
        topicsBtn.attr("data-options", topics[i]);
        topicsBtn.text(topics[i]);
        $("#buttons").append(topicsBtn);
    }
}



// Then make a function call that takes each 
// topic in the array remakes the buttons on the page.
buttons();

// when user clicks button, page grabs 10 static, non-nanimated gif images 
// from GIPHY API and places them on the page
$(document).on("click", "button", function(){
    var topic = $(this).attr("data-options");
    var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" +
     topic + "&api_key=IKuRboJlJrxsfjPPSIqlWK0o2K28wlcJ&limit=10";

    $.ajax({
    url: queryUrl,
    method: "GET"
    }).then(function(response) {
        
        console.log(response);
        var results = response.data

        for (var j = 0; j < results.length; j++){
            var newGif = $("<div>");

            // under every gif is its rating (PG, PG-13, etc)
            var rating = results[j].rating;
            var p = $("<p>").text("Rating: " + rating);


            var gifImage = $("<img class='gif'>");
            gifImage.attr("src", results[j].images.fixed_height_still.url);
            gifImage.attr("data-still", results[j].images.fixed_height_still.url);
            gifImage.attr("data-animate", results[j].images.fixed_height.url);
            gifImage.attr("data-status", "still");
            newGif.prepend(p);
            newGif.prepend(gifImage);
            $("#showGifs").prepend(newGif);


            // when user clicks a still giphy image, the gif will animate
            // when user clicks again, image will stop

            // !!! BUG...CLICK ONLY WORKS ON EVERY OTHER GIF !!!
            $(".gif").click(function(){
                console.log("does this work?")
                var status = $(this).attr("data-status");
            
                if (status === "still"){
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-status", "animate");
                } else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-status", "still");
                }
            });

        }


    });
    


});

// Form takes a topic and adds it into your topics array.
$(document).on('click',"#add-topic",function(){
    event.preventDefault();
    var userInput = $("#topic-input").val();
    topics.push(userInput);
    console.log(topics);
    $("#buttons").empty();
    buttons();
});






