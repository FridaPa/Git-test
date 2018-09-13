const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const cleanCSS = require("gulp-clean-css");
const watch = require("gulp-watch");
const livereload = require('gulp-livereload');
/*installerat en reload men inte gjort ngt med den än */
/*inkluderar gulp och plugins fr node_modules*/



//flyttar html-filer fr src till pub
gulp.task("copyhtml", function() {  
	//return anropar att vänta tills klar innan vi går vidare till nästa
 return gulp.src("src/*.html")
	.pipe(gulp.dest("Pub/Git-test"));

});


//sammanslå och minifiera js. installerade plugin för detta på npmjs.com
gulp.task("convertjs", function(){
	return gulp.src("src/js/*.js")
	//döper filen till main.min.js miniminerad
	.pipe(concat("main.min.js"))
	.pipe(uglify())
	.pipe(gulp.dest("Pub/Git-test/js"));
	
});

//samma sak med css
gulp.task("convertcss", function(){
	return gulp.src("src/css/*.css")
	//döper filen till main.min.css miniminerad
	.pipe(concat("main.min.css"))
	.pipe(cleanCSS())
	.pipe(gulp.dest("Pub/Git-test/css"));
	
});



gulp.task("watcher", function(){
	watch("src/js/*.js", function(){
		gulp.start("convertjs");
	});
	
	watch("src/*.html", function(){
		gulp.start("copyhtml");
		
	});
	
	watch("src/css/*.css", function(){
		gulp.start("convertcss");
		
		
	});
	
	
});



//default
gulp.task("default", ["copyhtml", "convertjs", "convertcss", "watcher"]);



