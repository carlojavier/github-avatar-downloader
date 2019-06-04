var request = require('request');
var https = require('https');
var secrets = require('./secrets').GITHUB_TOKEN;
var fs = require('fs');

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
    // ...
    var options = {
        url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
        headers: {
            'User-Agent': 'request',
            'Authorization': "token " + secrets
        }
    };
    request(options, function(err, res, body) {
        cb(err, body);

    })

}

getRepoContributors("jquery", "jquery", function(err, result) {
    console.log("Errors:", err);
    var temp = JSON.parse(result);
    for (let people of temp) {
        downloadImageByURL(people.login, people.avatar_url, "./avatars/")
    }
    // temp.forEach(function(element) {
    //     // console.log(element.avatar_url);

});

function downloadImageByURL(name, url, filePath) {
    // ...
    request.get(url)
        .on("error", function(err) {
            throw err;
        })
        .on("response", function() {
            console.log("the file is here!");
        })

        .pipe(fs.createWriteStream(filePath + name + '.jpg'))

}