require('dotenv').config();
const EleventyFetch = require("@11ty/eleventy-fetch");

// Set up constants used in OMDB REST API
const omdbEndpoint  = "https://www.omdbapi.com/";
const omdbKey       = process.env.MOVIE_API_KEY;
const cacheDuration = "1d";
const responseType  = "json"; 

module.exports = async function() {

       // Create query parameters
    let queryParams = new URLSearchParams(
        {
            "apikey": omdbKey,
            "i": "tt0076759"
        }
    );

    let queryURL  = `${omdbEndpoint}?${queryParams}`;
    let movie = {}; 

    try {
        movie = await EleventyFetch(queryURL, {
            "duration": cacheDuration,
            "type": responseType
        });

    } catch (err) {
        console.log("Error in films.js eleventy-fetch:" + err);
    };

    return movie;

};
