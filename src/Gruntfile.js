module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Placeholder configuration
    });

    // Define a simple task to avoid the "Task 'undefined' not found" error
    grunt.registerTask('build', 'Log some stuff', function() {
        grunt.log.write('Running the build task...').ok();
    });
};
