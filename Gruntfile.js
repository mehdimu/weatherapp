module.exports = function(grunt) {
    // Configuration goes here
    grunt.initConfig({
        htmlmin: {  // Task
            dist: { // Target
              options: {  // Target options
                removeComments: true,
                collapseWhitespace: true,
                minifyJS: true,
                minifyCSS: true,
              },
              files: {                                   // Dictionary of files
                'dist/index.html' :'www/index.html',
                'dist/templates/clock.html' :'www/templates/clock.html',
                'dist/templates/menu.html' :'www/templates/menu.html',
                'dist/templates/news.html' :'www/templates/news.html',
                'dist/templates/weather.html' :'www/templates/weather.html',
              }
            }
        },
        
        uglify: {
            my_target: {
                files: {
                'dist/controllers/clockCtrl.js' :'www/controllers/clockCtrl.js',
                'dist/controllers/locationCtrl.js' :'www/controllers/locationCtrl.js',
                'dist/controllers/newsCtrl.js' :'www/controllers/newsCtrl.js',
                'dist/js/angular/angular-animate.js' :'www/js/angular/angular-animate.js',
//                'dist/js/angular/angular-animate.min.js' :'www/js/angular/angular-animate.min.js',
//                'dist/js/angular/angular-sanitize.min.js' :'www/js/angular/angular-sanitize.min.js',
////                'dist/js/angular/angular-ui-router.min.js' :'www/js/angular/angular-ui-router.min.js',
////                'dist/js/angular/angular.min.js' :'www/js/angular/angular.min.js',
                'dist/js/app.js' :'www/js/app.js',
                'dist/js/bootstrap/bootstrap.min.js' :'www/js/bootstrap/bootstrap.min.js',
                'dist/js/fastclick.js' :'www/js/fastclick.js',
                'dist/js/index.js' :'www/js/index.js',
                'dist/js/jquery-1.11.1.min.js' :'www/js/jquery-1.11.1.min.js',
                }
            }
        },
        
        cssmin: {
          minify: {
            expand: true,
            cwd: 'www/css/',
            src: ['**/*.css', '**/*.css'],
            dest: 'dist/css',
          }
        },
        
        copy: {
          main: {
              files: [
                // makes all src relative to cwd
                  {expand: true, cwd: 'www/js/angular/', src: ['*.min.js'], dest: 'dist/js/angular/'},
                  {expand: true, cwd: 'www/css/font_awesome/fonts/', src: ['*'], dest: 'dist/css/font_awesome/fonts/'},
              ]
          },
        }
    });

    // Load plugins here
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    
    // Define your tasks here
    grunt.registerTask('default', ['copy', 'htmlmin', 'uglify', 'cssmin']);
};