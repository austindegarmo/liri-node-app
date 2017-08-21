
var Twitter = require('twitter');
var input = process.argv[2];
var keyFile = require("./key.js");

var client = new Twitter ({
  consumer_key: keyFile.twitterKeys.consumer_key,
  consumer_secret: keyFile.twitterKeys.consumer_secret,
  access_token_key: keyFile.twitterKeys.access_token_key,
  access_token_secret: keyFile.twitterKeys.access_token_secret
});


 function myTweet(event) {

	var params = {screen_name: 'AustinDegramo'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  if (!error) {
	  	// console.log("AustinDegramo")
	    console.log("tweets", tweets);
	    for (var i = 0; i < 20; i++) {
	    	
	    	console.log(tweets[i].created_at)
	    	console.log(tweets[i].text)
	    }
	  }
	});

	
}
myTweet();

//spotify api trash
//

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: 'a61c990aa8484fc7adfb41f0b13cbede',
  secret: '807f546fd9284821979890fee7a70706'
});

function songSearch() {

 var songQuery = process.argv[3] 

	spotify.search({ type: 'track', query: songQuery }, function(err, data) {
	  if (err) {
	    return console.log('Error occurred: ' + err);

  }
  console.log(JSON.stringify( data, null, 2)); 

 }); 

};
if (input === 'spotify-this-song') {
	songSearch();

}

// songSearch

// var request = require("request");

// var movie = process.argv(2)

// // Then run a request to the OMDB API with the movie specified
// request("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=40e9cece", function(error, response, body) {

//   // If the request is successful (i.e. if the response status code is 200)
//   if (!error && response.statusCode === 200) {

// console.log(JSON.parse(body))
// console.log(request);
// };