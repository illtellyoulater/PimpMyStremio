module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Example configuration for compiling JavaScript
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['src/web/**/*.js'],
                dest: 'dist/bundle.js',
            },
        },

        // Example configuration for minifying CSS
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'src/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist',
                    ext: '.min.css'
                }]
            }
        }
    });

    // Load the plugins that provide the "concat" and "cssmin" tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task(s).
    grunt.registerTask('default', ['concat', 'cssmin']);

    // Custom build task.
    grunt.registerTask('build', ['concat', 'cssmin']);
};
