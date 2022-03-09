// Configure tasks and tell plugins where to find certain files
// Load plugins into the file (ex: minification plugin)
// Register tasks which will be executed
module.exports = function (grunt) {
  // config
  grunt.initConfig({
    concat: {
      js: {
        // src: ['js/jquery-1.12.4.js', 'js/rslides.js', 'js/scripts.js'],    // specific files
        src: ['js/*.js'],                                                     // all js files in js directory
        dest: 'build/scripts.js'
      },
      css: {
        src: ['css/*.css'],
        dest: 'build/styles.css' 
      }
    }
  });

  // load plugins
  grunt.loadNpmTasks('grunt-contrib-concat');

  // grunt concat will run all within grunt concat init config (this is due to the plugin)
  // Register tasks
  grunt.registerTask('concat-js', ['concat:js']);
  grunt.registerTask('concat-css', ['concat:css']);
}