import gulp from 'gulp';
import {
  path
} from './gulp/config/path.js';
import { plugins } from './gulp/config/plagins.js';

global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  path: path,
  gulp: gulp,
  plugins: plugins,
}

import { reset } from './gulp/tascs/reset.js';
import { copy } from './gulp/tascs/copy.js';
import { html } from './gulp/tascs/html.js';
import { server } from './gulp/tascs/server.js';
import { scss } from './gulp/tascs/scss.js';
import { js } from './gulp/tascs/js.js';
import { images } from './gulp/tascs/images.js';
import { otfToTtf, ttfToWoff, fontStyle} from "./gulp/tascs/fonts.js";
import {svgSprive} from "./gulp/tascs/svgSprive.js"
import { zip } from './gulp/tascs/zip.js';
import { ftp } from './gulp/tascs/ftp.js';
export {svgSprive}

function watcher() {
  gulp.watch(path.watch.files, copy)
  gulp.watch(path.watch.html, html)
  gulp.watch(path.watch.scss, scss)
  gulp.watch(path.watch.js, js,)
  gulp.watch(path.watch.images, images,)
}

const fonts = gulp.series( otfToTtf, ttfToWoff, fontStyle)

const mainTasks =gulp.series(fonts, gulp.parallel(copy, html, scss ,js , images) );

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks)
const deployZIP = gulp.series(reset, mainTasks, zip)
const deployFTP = gulp.series(reset, mainTasks, ftp)

export { dev};
export {build};
export {deployZIP};
export {deployFTP};

gulp.task('default', dev);





// Static server
// gulp.task('server', function () {
//   browserSync.init({
//     server: {
//       baseDir: "dist"
//     }
//   });
//   gulp.watch('src/*.html').on('change', browserSync.reload)
// });

// gulp.task('styles', function () {
//   return gulp.src("src/scss/*.+(scss|sass)")
//     .pipe(sass({
//       outputStyle: 'compressed'
//     }).on('error', sass.logError))
//     .pipe(rename({
//       prefix: "",
//       suffix: ".min",
//     }))
//     .pipe(autoprefixer({
//       cascade: false
//     }))
//     .pipe(cleanCSS({
//       compatibility: 'ie8'
//     }))
//     .pipe(gulp.dest('dist/css'))
//     .pipe(browserSync.stream())
// });

// gulp.task('watch', function () {
//   gulp.watch('src/sass/*.(scss|sass|css)', gulp.parallel('styles'))
//   gulp.watch('src/*.html').on('change', gulp.parallel('html'))
// })

// gulp.task('html', function () {
//   return gulp.src('src/*.html')
//     .pipe(htmlmin({
//       collapseWhitespace: true
//     }))
//     .pipe(gulp.dest('dist/'));
// })

// gulp.task('scripts', function () {
//   return gulp.src('src/js/**/*.js')
//     .pipe(gulp.dest('dist/js'));
// })

// gulp.task('fonts', function () {
//   return gulp.src('src/fonts/**/*')
//     .pipe(gulp.dest('dist/fonts'));
// })

// gulp.task('icons', function () {
//   return gulp.src('src/icons/**/*')
//     .pipe(gulp.dest('dist/icons'));
// })

// gulp.task('images', function () {
//   return gulp.src('src/images/**/*')
//     .pipe(gulp.dest('dist/images'));
// })

// gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'html', 'scripts', 'fonts', 'icons', 'images', ));