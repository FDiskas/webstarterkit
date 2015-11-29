'use strict';

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths
    var config = {
        app: '.',
        dist: '.',
        bower: '<%= config.app %>/lib',
        use_map: false
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        config: config,

        pkg: grunt.file.readJSON('package.json'),

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            js: {
                files: ['<%= config.app %>/app/{,*/}*.js'],
                tasks: ['uglify']
            },
            styles: {
                files: ['<%= config.app %>/less/{,*/}*.less'], // which files to watch
                tasks: ['less']
            }
        },

        less: {
            files: {
                expand: true,
                cwd: '<%= config.dist %>/less',
                src: ['*.less'],
                dest: '<%= config.dist %>/css/',
                ext: '.css'
            }
        },

        // Uglify javascripts
        uglify: {
            all_src : {
                options: {
                    banner: "/*!\n<%= pkg.name %> v<%= pkg.version %>\n" +
                    '© 2014-<%= grunt.template.today("yyyy") %> <%= pkg.author %>, http://coders.lt\n' +
                    'License: <%= pkg.license %>\n' +
                    '*/',
                    mangle: false,
                    sourceMap : true,
                    sourceMapName : '<%= config.dist %>/js/sourceMap.map'
                },
                src : '<%= config.app %>/app/{,*/}*.js',
                dest : '<%= config.dist %>/js/app.min.js'
            }
        },

        // Clean old releases files before deployment. These files are generated again on each deployment.
        clean: {
            old: [
                '<%= config.dist %>/js',
                '<%= config.dist %>/css'
            ]
        }
    });

    grunt.registerTask('default', [
        'clean:old',
        'less',
        'uglify'
    ]);
};
