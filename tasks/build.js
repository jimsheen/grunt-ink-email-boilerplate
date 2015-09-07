module.exports = function(grunt) {

    grunt.registerTask('build', ['sass', 'imagemin', 'copy', 'concat', 'cssmin', 'wiredep', 'bowercopy', 'replace']);
    grunt.log.writeln("Custom task log");
};
