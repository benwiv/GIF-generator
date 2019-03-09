var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=EZGhOkGlbqQxMlmd8TcKduknfKl1CYVn";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
});

//  list of my interests
let myList = ['music', 'space', 'film', 'science', 'france', 'coffee'];


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