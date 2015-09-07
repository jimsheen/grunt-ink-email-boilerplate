module.exports = {
    inline: {
        files: {
            'build/dist/': '*.html',
        },
        options: {
            replacements: [
                // place files inline example 
                {
                    pattern: '../bower_components',
                    replacement: 'js/libs'
                }
            ]
        }
    }
}
