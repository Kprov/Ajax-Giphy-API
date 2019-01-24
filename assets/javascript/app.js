$(document).ready(function(){
console.log("Ready");

//Establishing array with strings for the topic to be sentt to the API
var movies = ["Shrek", "Cinderella","Armageddon","Gladiator","Terminator","Aliens","Godfather","It"];
console.log(movies)
//Declaring text variable to hold the element text
var text = "<div class='btndiv'>"
//callback function to display each string individually into a button
movies.forEach(display);

text += "</div>";
//inserting each string into the dom
document.getElementById("buttons").innerHTML = text;

function display(value) {
    text += "<button class='button btn-lg btn-primary gif' movie-data=" + value + ">" + value +"</button>";
}
    


$("button").on("click", function(){
    var mdata = $(this).attr("movie-data");
    var apiKey = "N5OKJJ5Kx7gKlaYEZha1x3zZvZli3Wwd";
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + mdata + "&api_key=" + apiKey + "&limit=10";
    var xhr = $.get(queryURL);
    xhr.done(function(data) { console.log("success got data", data);
    var results = data.data; 
    
    
    for (var i = 0; i < results.length; i++) {
        var search = $("<div>");
        var animated = results[i].images.fixed_height.url;
        var still = results[i].images.fixed_height_still.url;
        var rating = results[i].rating;
        var p = $("<p>").text("Rating: " +rating);
        var gifImg = $("<img class='gif' data-state='still'>");
        console.log(still)
        gifImg.attr("src", still);
        gifImg.attr("data-animated", animated);
        gifImg.attr("data-still", still)
        search.append(gifImg);
        search.append(p);
        

        

        $("#content-here").prepend(search);
    } 
    
    $(".gif").on("click", function(){
        var state = $(this).attr("data-state");
        
        
        
        console.log(state)
        console.log(animated)
        if (state === "still"){
            $(this).attr("src", $(this).data("animated"));
            $(this).attr("data-state", "animate");
        }
        else{
            $(this).attr("src", $(this).data("still"));
            $(this).attr("data-state", "still");
        }
    })
});






    

    

    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    //   }).then(function(response) {
    //       var response = response.data

    
    
    
    
    //AJAX initializing giphy API
})






    

})