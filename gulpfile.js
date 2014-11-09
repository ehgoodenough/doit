var gulp = require("gulp");

gulp.task("scripts", function()
{
	return require("browserify")("./src/Main.js")
		.transform("reactify").bundle()
		.pipe(require("vinyl-source-stream")("Main.js"))
		.pipe(gulp.dest("resrc/"));
});

gulp.task('styles', function()
{
	return;
});

gulp.task("copy", function()
{
	gulp.src("src/Main.html").pipe(gulp.dest("resrc"));
	gulp.src("src/Main.css").pipe(gulp.dest("resrc"));
	gulp.src("src/stuff/*").pipe(gulp.dest("resrc/stuff/"));
});

gulp.task("default", ["scripts", "styles", "copy"]);

gulp.task("watch", function()
{
	gulp.watch("src/*", ["default"]);
});
