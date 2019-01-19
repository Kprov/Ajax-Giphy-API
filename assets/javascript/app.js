$(document).ready(function(){
console.log("Ready");

//Establishing array with strings for the topic to be sentt to the API
var movies = ["Shrek", "Cinderella","Armageddon","Gladiator","Cars","Aliens","Godfather"];
console.log(movies)
//Declaring text variable to hold the element text
var text = "<div>"
//callback function to display each string individually into a button
movies.forEach(display);

text += "</div>";
//inserting each string into the dom
document.getElementById("buttons").innerHTML = text;

function display(value) {
    text += "<button class='btn-lg btn-primary' movie-data=" + value + ">" + value +"</button>";
}
console.log(text)
$("button").on("click", function(){
    
    
    var mdata = $(this).attr("movie-data");
    var apiKey = "N5OKJJ5Kx7gKlaYEZha1x3zZvZli3Wwd";
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + mdata + "&api_key=" + apiKey + "&limit=20";
    var xhr = $.get(queryURL);
    xhr.done(function(data) { console.log("success got data", data); 
    console.log(data.data)
    console.log(xhr)
    var results = data.data;

    for (var i = 0; i < results.length; i++) {
        var url = results[i].images.fixed_height.url;
        console.log(url)

        var gifImg = $("<img>");
        gifImg.attr("src", url);

        $("#content-here").prepend(gifImg);
    }
    
    
});
    

    

    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    //   }).then(function(response) {
    //       var response = response.data

    
    
    
    
    //AJAX initializing giphy API
})






    

})