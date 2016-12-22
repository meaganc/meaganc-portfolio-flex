module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		sass: {
			dist: {
				src: 'src/sass/styles.scss',
				dest: 'dist/css/styles.css'
			}
		},
		watch: {
			sass: {
				files: 'src/sass' + "**/*.scss",
				tasks: ["sass"]
			}
		}
	});

	grunt.registerTask('default', [
		'sass',
		'watch'
	]);
};
