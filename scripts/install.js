var fs = require('fs-extra')

bowercc_config = JSON.stringify({
    "scripts": {
        "postinstall": "wiredep -s dev/index.html"
    }
});

fs.writeFile(".bowerrc", bowercc_config, function(err) {
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
