var gulp = require("gulp"),
  concat = require("gulp-concat"),
  prefix = require("gulp-autoprefixer"),
  sass = require("gulp-sass"),
  pug = require("gulp-pug"),
  livereload = require("gulp-livereload"),
  sourcemaps = require("gulp-sourcemaps"),
  uglify = require("gulp-minify"),
  plumber = require('gulp-plumber');


gulp.task("html", async function buildHTML() {
  return gulp
    .src("stage/html/*.pug")
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest("dist"))
    .pipe(livereload());
});

gulp.task("css", async function() {
  return gulp
    .src("stage/css/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(prefix("last 5 versions"))
    .pipe(concat("main.css"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"))
    .pipe(livereload());
});

gulp.task("js", async function() {
  return gulp
    .src("stage/js/*.js")
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"))
    .pipe(livereload());
});

gulp.task("watch", function() {
  require("./server.js");
  livereload.listen();
  gulp.watch("stage/pug/*.pug", gulp.series("html"));
  gulp.watch("stage/css/*.scss", gulp.series("css"));
  gulp.watch("stage/js/*.js", gulp.series("js"));
});
