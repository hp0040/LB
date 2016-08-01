module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            css: {
                src: ['misc/sass/*.scss'],
                dest: 'dist/scss/main.scss',
            }
        },
        sass: {
            dist: {
                files: {
                    'dist/css/style.css': 'dist/scss/main.scss'
                }
            }
        },
        watch: {
            scripts: {
                files: ['misc/sass/*.scss'],
                tasks: ['concat' , 'sass']                
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['concat' , 'sass' , 'watch']);
}