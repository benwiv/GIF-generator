
$("#add-movie").on("click", function() {
  var topic = $(this).attr("data-topic");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=twinpeaks" +
    topic + "&api_key=dc6zaTOxFJmzC&limit=10";
  let myList = ['music', 'space', 'film', 'science', 'france', 'coffee'];

  $.ajax({
    url: queryURL,
    method: "GET"
  })
  
  .then(function(response) {
  var results = response.data;

  for (var i = 0; i < results.length; i++) {
    if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
      var gifDiv = $("<div class='resultGIF'>");
      var rating = results[i].rating;
      var p = $("<p>").text("Rating: " + rating);
      var personImage = $("<img>");
      personImage.attr("src", results[i].images.fixed_height.url);
      gifDiv.append(p);
      gifDiv.append(personImage);
      $("#gif-display-div").prepend(gifDiv);
    }
  }
  });
});


//  animate or still function
$(".gif").on("click", function() {
  var state = $(this).attr("data-state");

  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } 
  else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
});