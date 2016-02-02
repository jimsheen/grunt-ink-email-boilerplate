module.exports = function(grunt) {
  grunt.registerTask('dev', ['sass', 'concat:dev', 'watch']);
};