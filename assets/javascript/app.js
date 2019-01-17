$(document).ready(function(){
console.log("Ready");

//Establishing array with strings for the topic to be sentt to the API
var movies = ["star wars", "indiana jones","pulp fiction","the sting","bullet","cars","the aviator"];
console.log(movies)
//Declaring text variable to hold the element text
var text = "<div>"
//callback function to display each string individually into a button
movies.forEach(display);
console.log(display)
text += "</div";
//inserting each string into the dom
document.getElementById("buttons").innerHTML = text += movies;

function display(value) {
    text += "<button class='btn-lg btn-primary' movie-data=" + value + ">" + value + "</button>";
}

$("button").on("click", function(){
    var mdata = $(this).attr("movie-data");
    var apiKey = "N5OKJJ5Kx7gKlaYEZha1x3zZvZli3Wwd";
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + mdata + "&api_key=" + apiKey + "&limit=5";
    var xhr = $.get(queryURL);
    xhr.done(function(data) { console.log("success got data", data); });

    document.getElementById("content-here").innerHTML = xhr;
    //AJAX initializing giphy API
})






    

})