var gulp = require("gulp");

gulp.task("compile", function()
{
	return brequire("browserify")("./src/index.js")
		.transform("reactify").bundle()
		.pipe(require("vinyl-source-stream")("index.js"))
		.pipe(gulp.dest("resrc/"));
});

gulp.task("copy", function()
{
	gulp.src("src/index.html").pipe(gulp.dest("resrc"));
	gulp.src("src/index.css").pipe(gulp.dest("resrc"));
	gulp.src("src/stuff/*").pipe(gulp.dest("resrc/stuff/"));
});

gulp.task("default", ["compile", "copy"]);

gulp.task("watch", function()
{
	gulp.watch("src/**/*.*", ["default"]);
});
