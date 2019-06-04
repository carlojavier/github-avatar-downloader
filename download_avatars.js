var request = require('request');
var https = require('https');
var secrets = require('./secrets').GITHUB_TOKEN;

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
    // ...
    var options = {
        url: "https://api.github.com/repos/" + repoOwner + "/" + "/contributors",
        headers: {
            'User-Agent': 'request'
            'Authorization': "token " + secrets
        }
    };
    request(options, function(err, res, body) {
        cb(err, body);
    });

}

getRepoContributors("jquery", "jquery", function(err, result) {
    console.log("Errors:", err);
    console.log("Result:", result);
});