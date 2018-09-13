const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
/*inkluderar gulp fr node_modules*/

//gör en task med kommandot hello
gulp.task("hello", function() {
	console.log("hello Gulpin");
	
});

gulp.task("default", ['hello'], function(){ 
	console.log("hello Default");
});


//flyttar html-filer fr src till pub
gulp.task("copyhtml", function() {  
	//return anropar att vänta tills klar innan vi går vidare till nästa
 return gulp.src("src/*.html")
	.pipe(gulp.dest("Pub/"))

});

//sammanslå och minifiera js. installerade plugin för detta på npmjs.com
gulp.task("convertjs", function(){
	return gulp.src("src/js/*.js")
	//döper filen till main.min.js miniminerad
	.pipe(concat("main.min.js"))
	.pipe(uglify())
	.pipe(gulp.dest("Pub/"));
	
});
