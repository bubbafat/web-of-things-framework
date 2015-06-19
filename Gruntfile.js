module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        'jsbeautifier': {
            files: ['./**/*.js'],
            options: {}
        },
        'git-pre-commit': {
            src: ['./**/*.js'],
            options: {
                mode: 'VERIFY_ONLY'
            }
        }
    });

    grunt.loadNpmTasks("grunt-jsbeautifier");

    // Default task(s).
    grunt.registerTask('default', ['jsbeautifier']);

};
