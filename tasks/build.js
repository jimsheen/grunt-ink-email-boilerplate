module.exports = function(grunt) {

    grunt.registerTask('build', ['sass', 'imagemin', 'concat', 'cssmin', 'wiredep', 'bowercopy', 'copy', 'replace']);
    grunt.log.writeln("Custom task log");
};
