

 var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api_key=394043dc8f4c4e2b8e084b3c14f79a39&q=dogs"

 $.ajax({
    url: queryURL,
    method: "GET"
  })

  //callback function
  .done(function(response) {
    console.log(response);


  });