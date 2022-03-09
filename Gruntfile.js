const sass = require('node-sass');

// Configure tasks and tell plugins where to find certain files
// Load plugins into the file (ex: minification plugin)
// Register tasks which will be executed
module.exports = function (grunt) {
  // config
  grunt.initConfig({
    // these prop names are the same as the word after grunt-contrib
    concat: {
      js: {
        // src: ['js/jquery-1.12.4.js', 'js/rslides.js', 'js/scripts.js'],    // specific files
        src: ['js/*.js'],                                                     // all js files in js directory
        dest: 'build/scripts.js'
      },
      css: {
        src: ['css/reset.css', 'css/bootstrap.css', 'css/styles.css'],        // wildcards will not consider orders, therefore specifying this explicitly is required if order matters
        dest: 'build/styles.css' 
      }
    },
    sass: {
      options: {
        implementation: sass,
        sourceMap: false
      },
      dist: {
        files: {
          'css/styles.css': 'css/sass/styles.scss'
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'build/scripts.min.js': ['build/scripts.js']
        }
      }
    },
    cssmin: {
      target: {
        files: {
          'build/styles.min.css': ['build/styles.css']
        }
      }
    }
  });

  // load plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // grunt concat will run all within grunt concat init config (this is due to the plugin)
  // grunt sass will run the sass config

  // Register tasks
  grunt.registerTask('concat-js', ['concat:js']);
  grunt.registerTask('concat-css', ['concat:css']);
}