module.exports = {
    dev: {
        options: {
            // cssmin will minify later
            style: 'expanded'
        },
        files: {
            'dev/css/global.css': 'dev/css/global.scss'
        }
    },
    // build: {
    //     options: {
    //         // cssmin will minify later
    //         style: 'expanded'
    //     },
    //     files: {
    //     	// 'dev/css/global.css' : 'bower_components/**/*.scss',
    //         'dev/css/global.css': 'dev/css/global.scss'
    //     }
    // }
}
