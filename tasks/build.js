module.exports = function(grunt) {

    grunt.registerTask('build', ['sass', 'concat:dev', 'emailBuilder:build']);
    
};
