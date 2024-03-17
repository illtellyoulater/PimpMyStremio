module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Any other build tasks relevant to your project
  });

    // Define the default task that the GitHub Actions workflow will execute
  grunt.registerTask('build', ['eslint', 'uglify']);
};
