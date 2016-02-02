module.exports = function(grunt) {

    grunt.registerTask('test', ['sass', 'concat:dev', 'emailBuilder:litmus']);
    
};
