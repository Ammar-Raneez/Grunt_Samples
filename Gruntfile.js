// Configure tasks and tell plugins where to find certain files
// Load plugins into the file (ex: minification plugin)
// Register tasks which will be executed
module.exports = function (grunt) {
  // config
  grunt.initConfig({

  });

  // load plugins
  grunt.loadNpmTasks('');

  // Register tasks
  grunt.registerTask('run', function () {
    console.log('I am running');
  });
  grunt.registerTask('sleep', function () {
    console.log('I am sleeping');
  });
  grunt.registerTask('all', ['sleep', 'run']);
}