module.exports = function(grunt) {

  grunt.initConfig({
    /*concat_css: {
      options: {
        separator: ''
      },
      dist: {
        src: ['styles/variables.scss','styles/mixins.scss','styles/reset.scss','styles/style.scss'],
        dest: 'build/main.scss'
      }
    },*/
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/src/*.js'],
        dest: 'build/script.main.js'
      }
    },
    uglify: {
      dist: {
        src: ['build/script.main.js'],
        dest: 'build/script.main.min.js'
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'img'
        }]
      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'styles',
          src: ['main.scss'],
          dest: 'build',
          ext: '.css'
        }]
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9']
      },
      dist: {
        files: {
          'build/main.css': 'build/main.prefixed.css'
        }
      }
    },
    watch : {
      sass: {
        files: ['styles/*.scss'],
        tasks: ['concat','sass'],
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.registerTask('default', ['concat','uglify','sass','imagemin','autoprefixer','watch']);


};
