var fs = require('fs-extra')

bowercc_config = JSON.stringify({
    "scripts": {
        "postinstall": "wiredep -s dev/index.html"
    }
});

bower_config = JSON.stringify({
    "name": "jims-project-setup",
    "version": "1.0.0",
    "authors": [
        "Jim Sheen"
    ],
    "license": "MIT",
    "ignore": [
        "**/.*",
        "node_modules",
        "bower_components",
        "test",
        "tests"
    ]
});


fs.outputFile("bower.json", bower_config, function(err) {
    if (err) {
        return console.log(err);
    }
})


fs.outputFile(".bowerrc", bower_config, function(err) {
    if (err) {
        return console.log(err);
    }
})


fs.outputFile('dev/js/global.js', '/* Custom JS */', function(err) {
    if (err) {
        console.log(err) // => null
    }

})

fs.outputFile("dev/sass/global.scss", '/* Custom SASS */', function(err) {
    if (err) {
        return console.log(err);
    }
});

fs.ensureDir('dev/css/', function(err) {
    if (err) {
        return console.log(err);
    }
})
fs.ensureDir('dev/img/', function(err) {
    if (err) {
        return console.log(err);
    }
})

fs.ensureDir('build/css/', function(err) {
    if (err) {
        return console.log(err);
    }
});

fs.ensureDir('build/js/', function(err) {
    if (err) {
        return console.log(err);
    }
})
