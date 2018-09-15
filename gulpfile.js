const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const cleanCSS = require("gulp-clean-css");
const watch = require("gulp-watch");
const livereload = require('gulp-livereload');

/*installerat en reload men inte gjort ngt med den än */
/*inkluderar gulp och plugins fr node_modules*/

livereload({ start: true })

//flyttar html-filer fr src till pub
gulp.task("copyhtml", function() {  
	//return anropar att vänta tills klar innan vi går vidare till nästa
 return gulp.src("src/*.html")
	.pipe(gulp.dest("Pub/Git-test"))
	.pipe(livereload());

});


//flyttar html-filer fr src till pub
gulp.task("copyimages", function() {  
	//return anropar att vänta tills klar innan vi går vidare till nästa
 return gulp.src("src/images/*.jpg")
    .pipe(gulp.dest("Pub/Git-test/images"))
	.pipe(livereload());

});




//sammanslå och minifiera js. installerade plugin för detta på npmjs.com
gulp.task("convertjs", function(){
	return gulp.src("src/js/*.js")
	//döper filen till main.min.js miniminerad
	.pipe(concat("main.min.js"))
	.pipe(uglify())
	.pipe(gulp.dest("Pub/Git-test/js"))
	.pipe(livereload());
	
});

//samma sak med css
gulp.task("convertcss", function(){
	return gulp.src("src/css/*.css")
	//döper filen till main.min.css miniminerad
	.pipe(concat("main.min.css"))
	.pipe(cleanCSS())
	.pipe(gulp.dest("Pub/Git-test/css"))
	.pipe(livereload());
});



gulp.task("watcher", function(){
	
	//en live-reload som lyssnar efter ändringar 
    livereload.listen();
	watch("src/js/*.js", function(){
		gulp.start("convertjs");
	});
	
	watch("src/*.html", function(){
		gulp.start("copyhtml");
		
	});
	
	watch("src/css/*.css", function(){
		gulp.start("convertcss");
		
		
	});
	
	watch("src/images/*.jpg", function(){
		gulp.start("copyimages");
		
		
	});
	
});



//default
gulp.task("default", ["copyhtml", "convertjs", "convertcss","copyimages", "watcher"]);



