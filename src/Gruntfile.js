module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Lint JavaScript files
    eslint: {
      target: ['src/**/*.js']
    },

    // Minify JavaScript files
    uglify: {
      my_target: {
        files: {
          'dist/app.min.js': ['src/**/*.js']
        }
      }
    },

    // Any other build tasks relevant to your project
  });

  // Load the necessary plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-eslint');

  // Define the default task that the GitHub Actions workflow will execute
  grunt.registerTask('default', ['eslint', 'uglify']);
};
