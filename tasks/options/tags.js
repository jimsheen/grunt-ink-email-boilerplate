module.exports = {
    build: {
        options: {
            scriptTemplate: '<script src="{{ path }}"></script>',
            linkTemplate: '<link href="{{ path }}"/>',
            openTag: '<!-- start template tags -->',
            closeTag: '<!-- end template tags -->'
        },
        src: [
            'build/js/**/*.js',
            'build/css/**/*.css',
            '!site/js/vendor/**/*.js'
        ],
        dest: 'build/index.html'
    }
}
