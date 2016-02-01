module.exports = function(grunt) {

    grunt.registerTask('build', ['sass', 'imagemin', 'copy', 'concat', 'cssmin']);
    
};
