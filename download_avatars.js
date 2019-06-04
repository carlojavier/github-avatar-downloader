var request = require('request');
var https = require('https');

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
    // ...
    // request('https://github.com/nodejs/node', function(repoOwner, repoName, cb) {
    //     if (err) throw err;

    //     console.log('Response Status Code:', response.statusCode);



}


getRepoContributors("jquery", "jquery", function(err, result) {
    console.log("Errors:", err);
    console.log("Result:", result);
});