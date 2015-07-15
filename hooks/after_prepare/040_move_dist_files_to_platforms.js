#!/usr/bin/env node

/**
 * After prepare, files are copied to the platforms/ios and platforms/android folders.
 * Lets clean up some of those files that arent needed with this hook.
 */
var path = require('path');
var mv = require('mv');


var iosPlatformsDir_dist_bundle = path.resolve(__dirname, '../../platforms/ios/www/dist/bundle');
var iosPlatformsDir_dist_index = path.resolve(__dirname, '../../platforms/ios/www/dist/index.html');
var iosPlatformsDir_www_bundle = path.resolve(__dirname, '../../platforms/ios/www/bundle');
var iosPlatformsDir_www_index = path.resolve(__dirname, '../../platforms/ios/www/index.html');

console.log("Moving dist files to iOS platform");

mv(iosPlatformsDir_dist_bundle, iosPlatformsDir_www_bundle, {mkdirp: true}, function(err) {
    if(typeof err != 'undefined')
    {
        console.log("err");
        console.log(err);
        console.log("ERROR when moving JS folder to iOS platform");
    }
    else
    {
        console.log("JS folder moved OK to iOS platform");
    }
});

mv(iosPlatformsDir_dist_index, iosPlatformsDir_www_index, function(err) {
    if(typeof err != 'undefined')
    {
        console.log("err");
        console.log(err);
        console.log("ERROR when moving index.html file to iOS platform");
    }
    else
    {
        console.log("index.html file moved OK to iOS platform");
    }
});

var androidPlatformsDir_dist_bundle = path.resolve(__dirname, '../../platforms/android/assets/www/dist/bundle');
var androidPlatformsDir_dist_index = path.resolve(__dirname, '../../platforms/android/assets/www/dist/index.html');
var androidPlatformsDir_www_bundle = path.resolve(__dirname, '../../platforms/android/assets/www/bundle');
var androidPlatformsDir_www_index = path.resolve(__dirname, '../../platforms/android/assets/www/index.html');

console.log("Moving dist files to Android platform");

mv(androidPlatformsDir_dist_bundle, androidPlatformsDir_www_bundle, {mkdirp: true}, function(err) {
    if(typeof err != 'undefined')
    {
        console.log("err");
        console.log(err);
        console.log("ERROR when moving JS folder to Android platform");
    }
    else
    {
        console.log("JS folder moved OK to Android platform");
    }
});

mv(androidPlatformsDir_dist_index, androidPlatformsDir_www_index, function(err) {
    if(typeof err != 'undefined')
    {
        console.log("err");
        console.log(err);
        console.log("ERROR when moving index.html file to Android platform");
    }
    else
    {
        console.log("index.html file moved OK to Android platform");
    }
});