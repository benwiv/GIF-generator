//===========GLOBAL VARIABLES=============//
const myList = ['dale cooper', 'audrey', 'black lodge', 'one eyed jack', 'bobby', 'ben horne'];

//==============FUNCTIONS=============//
let renderButtons = function(){
  $('#buttons-view').empty();
  for (let i = 0; i < myList.length; i++) {
    let button = $("<button class='topic-name'>");
    button.attr('data-name', myList[i]);
    button.text(myList[i]);
    $('#buttons-view').append(button);
  }
  $('#input-topic').val('');
}

let renderGifs = function(dataResponse) {
  let results = dataResponse.data;
  console.log(results)
  for (let j = 0; j < results.length; j++) {
    if (results[j].rating !== "r") {
      let gifDiv = $("<div class='resultGIF'>");
      let rating = results[j].rating;
      let p = $("<p id='rating-info'>").text("Andy's MPAA Rating: " + rating);
      let peaksImg = $("<img class='gif' data-state='animate'>");
      let gifURL = results[j].images.fixed_height.url
      let gifStillURL = results[j].images.fixed_height_still.url
      peaksImg.attr("src", gifURL);
      peaksImg.attr('data-animate', gifURL);
      peaksImg.attr('data-still', gifStillURL);
      gifDiv.append(p);
      gifDiv.append(peaksImg);
      $('#gif-display').prepend(gifDiv);
    }
  }
}

//===========EVENT LISTENERS=============//
//  ADD button and render gifs on submit button click 
$(document).on("click", '#add-topic', function(event) {
  event.preventDefault();
  let newTopic = $('#input-topic').val().trim();
  myList.push(newTopic);
  renderButtons();
  //  replacing white space with + for URL
  newTopic=newTopic.replace(/\s+/g, '+');
  let queryURL = "https://api.giphy.com/v1/gifs/search?q=twinpeaks+" + newTopic + "&api_key=dc6zaTOxFJmzC&limit=6";
  //  AJAX call with Giphy queryURL
  $.ajax({
    url: queryURL,
    method: 'GET'
  })  
  .then(function(response) {
    renderGifs(response);
  });
});

//  render GIFs on generated button click
$(document).on("click", '.topic-name', function(event) {
  event.preventDefault();
  let newTopic = $(this).attr('data-name');
  newTopic=newTopic.replace(/\s+/g, '+');
  let queryURL = "https://api.giphy.com/v1/gifs/search?q=twinpeaks+" + newTopic + "&api_key=dc6zaTOxFJmzC&limit=6";
  //  AJAX call with Giphy queryURL
  $.ajax({
    url: queryURL,
    method: 'GET'
  })  
  .then(function(response) {
    renderGifs(response);
  });
});

  //  pause/play functionality for GIFs
$(document).on("click", ".gif", function() {
  let state = $(this).attr('data-state');
  if (state === 'still') {
    $(this).attr('src', $(this).attr('data-animate'));
    $(this).attr('data-state', 'animate');
  } 
  else {
    $(this).attr('src', $(this).attr('data-still'));
    $(this).attr('data-state', 'still');
  }  
});

//==============FUNCTION CALLS=============//
renderButtons();

