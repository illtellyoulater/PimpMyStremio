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

    // Watch for changes and reload
    watch: {
      scripts: {
        files: ['src/**/*.*'],
        tasks: ['eslint', 'uglify'],
        options: {
          livereload: true,
        },
      },
    },
  });

  // Load the necessary plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-eslint');

  // Default task
  grunt.registerTask('default', ['eslint', 'uglify', 'watch']);
};
