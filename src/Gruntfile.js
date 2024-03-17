module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Any other build tasks relevant to your project
  });

  grunt.registerTask('build');
};
