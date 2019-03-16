//===========GLOBAL VARIABLES=============//
const myList = ['music', 'space', 'film', 'science', 'france', 'coffee'];

//==============FUNCTIONS=============//
let renderButtons = function(){
  $("#buttons-view").empty();
  for (let i = 0; i < myList.length; i++) {
    let button = $("<button>");
    button.addClass("topic-name");
    button.attr("data-name", myList[i]);
    button.text(myList[i]);
    $("#buttons-view").append(button);
  }

  $('#input-topic').val('');
}

//===========EVENT LISTENERS=============//
$("#add-topic").on("click", function(event) {
  event.preventDefault();

  let newTopic = $('#input-topic').val().trim();
  myList.push(newTopic);
  renderButtons();


  //  replacing white space with + for URL
  newTopic=newTopic.replace(/\s+/g, '+');
  let queryURL = "https://api.giphy.com/v1/gifs/search?q=twinpeaks+" + newTopic + "&api_key=dc6zaTOxFJmzC&limit=10";


  // $.ajax({
  //   url: queryURL,
  //   method: "GET"
  // })
  
  // .then(function(response) {
  // var results = response.data;

  // for (var i = 0; i < results.length; i++) {
  //   if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
  //     var gifDiv = $("<div class='resultGIF'>");
  //     var rating = results[i].rating;
  //     var p = $("<p>").text("Rating: " + rating);
  //     var personImage = $("<img>");
  //     personImage.attr("src", results[i].images.fixed_height.url);
  //     gifDiv.append(p);
  //     gifDiv.append(personImage);
  //     $("#gif-display-div").prepend(gifDiv);
  //   }
  // }
  // });
});


//  animate or still function
// $(".gif").on("click", function() {
//   var state = $(this).attr("data-state");

//   if (state === "still") {
//     $(this).attr("src", $(this).attr("data-animate"));
//     $(this).attr("data-state", "animate");
//   } 
//   else {
//     $(this).attr("src", $(this).attr("data-still"));
//     $(this).attr("data-state", "still");
//   }
// });


//==============FUNCTION CALLS=============//
renderButtons();