var gulp = require("gulp");

gulp.task("compile", function()
{
	return require("browserify")("./src/Main.js")
		.transform("reactify").bundle()
		.pipe(require("vinyl-source-stream")("Main.js"))
		.pipe(gulp.dest("resrc/"));
});

gulp.task("copy", function()
{
	gulp.src("src/Main.html").pipe(gulp.dest("resrc"));
	gulp.src("src/Main.css").pipe(gulp.dest("resrc"));
	gulp.src("src/stuff/*").pipe(gulp.dest("resrc/stuff/"));
});

gulp.task("default", ["compile", "copy"]);

gulp.task("watch", function()
{
	gulp.watch("src/*", ["default"]);
});
