module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        githooks: {
            all: {
                'pre-commit': 'jsbeautifier:git-pre-commit',
            }
        },

        'jsbeautifier': {
            'default': {
                src: ['./**/*.js', '!./node_modules/**']
            },
            'git-pre-commit': {
                src: ['./**/*.js', '!./node_modules/**'],
                options: {
                    mode: 'VERIFY_ONLY'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-githooks');
    grunt.loadNpmTasks('grunt-jsbeautifier');

    // Default task(s).
    grunt.registerTask('default', ['jsbeautifier']);

};
