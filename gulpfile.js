
var gulp = require('gulp');
var hostile = require('hostile');

var env = process.env.NODE_ENV || "dev";
var config = require('./config/'+env+".json");

gulp.task('default', function() {

});

gulp.task('hostfile', [], function(done) {
  hostile.set('127.0.0.1', config.service.hostname, function(error) {
    if(error) {
      console.error(error);
    } else {
      console.log('Set hostfile entry');
    }
    done();
  })
});