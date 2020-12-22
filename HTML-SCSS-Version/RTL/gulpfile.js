var gulp = require('gulp');
sass = require("gulp-sass"),
postcss = require("gulp-postcss");
autoprefixer = require("autoprefixer");
var sourcemaps = require('gulp-sourcemaps'); 
var browserSync = require('browser-sync').create(); 
var cssbeautify = require('gulp-cssbeautify');
var beautify = require('gulp-beautify');


/*******************  RTL   ******************/


//_______ task for scss-rtl folder to css-rtl main style 
gulp.task('rtlwatch', function() {
	console.log('Command executed successfully compiling scss-rtl in assets.');
	 return gulp.src('Autolist/assets/scss-rtl/**/*.scss') 
		.pipe(sourcemaps.init())                       
		.pipe(sass())
		.pipe(sourcemaps.write(''))   
		.pipe(gulp.dest('Autolist/assets/css-rtl'))
		.pipe(browserSync.reload({
		  stream: true
	}))
})


//_______task for admin-custom
gulp.task('rtladmin', function(){
   return gulp.src('Autolist/assets/css-rtl/admin-custom.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Autolist/assets/css-rtl'));
		
})


//_______task for sidemenu
gulp.task('rtlmenu', function(){
   return gulp.src('Autolist/assets/css-rtl/sidemenu.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Autolist/assets/css-rtl'));
		
})


/*******************  Color-skins   ******************/


//_______task for color1
gulp.task('rtlcolor1', function(){
   return gulp.src('Autolist/assets/color-skins-rtl/color1.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Autolist/assets/color-skins-rtl'));
		
})

//_______task for color2
gulp.task('rtlcolor2', function(){
   return gulp.src('Autolist/assets/color-skins-rtl/color2.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Autolist/assets/color-skins-rtl'));
		
})

//_______task for color3
gulp.task('rtlcolor3', function(){
   return gulp.src('Autolist/assets/color-skins-rtl/color3.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Autolist/assets/color-skins-rtl'));
		
})

//_______task for color4
gulp.task('rtlcolor4', function(){
   return gulp.src('Autolist/assets/color-skins-rtl/color4.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Autolist/assets/color-skins-rtl'));
		
})


//_______task for color5
gulp.task('rtlcolor5', function(){
   return gulp.src('Autolist/assets/color-skins-rtl/color5.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Autolist/assets/color-skins-rtl'));
		
})

//_______task for color6
gulp.task('rtlcolor6', function(){
   return gulp.src('Autolist/assets/color-skins-rtl/color6.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Autolist/assets/color-skins-rtl'));
		
})

//_______task for color7
gulp.task('rtlcolor7', function(){
   return gulp.src('Autolist/assets/color-skins-rtl/color7.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Autolist/assets/color-skins-rtl'));
		
})

//_______task for color8
gulp.task('rtlcolor8', function(){
   return gulp.src('Autolist/assets/color-skins-rtl/color8.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Autolist/assets/color-skins-rtl'));
		
})

//_______task for color9
gulp.task('rtlcolor9', function(){
   return gulp.src('Autolist/assets/color-skins-rtl/color9.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Autolist/assets/color-skins-rtl'));
		
})

//_______task for color10
gulp.task('rtlcolor10', function(){
   return gulp.src('Autolist/assets/color-skins-rtl/color10.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Autolist/assets/color-skins-rtl'));
		
})

//_______task for color11
gulp.task('rtlcolor11', function(){
   return gulp.src('Autolist/assets/color-skins-rtl/color11.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Autolist/assets/color-skins-rtl'));
		
})

//_______task for color12
gulp.task('rtlcolor12', function(){
   return gulp.src('Autolist/assets/color-skins-rtl/color12.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Autolist/assets/color-skins-rtl'));
		
})

//_______task for color13
gulp.task('rtlcolor13', function(){
   return gulp.src('Autolist/assets/color-skins-rtl/color13.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Autolist/assets/color-skins-rtl'));
		
})

//_______task for color14
gulp.task('rtlcolor14', function(){
   return gulp.src('Autolist/assets/color-skins-rtl/color14.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Autolist/assets/color-skins-rtl'));
		
})

//_______task for color15
gulp.task('rtlcolor15', function(){
   return gulp.src('Autolist/assets/color-skins-rtl/color15.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Autolist/assets/color-skins-rtl'));
		
})



/*******************  Beautify  ******************/

//_______ task for beautifying css
gulp.task('rtlbeautify', function() {
    return gulp.src('Autolist/assets/css-rtl/*.css')
        .pipe(beautify.css({ indent_size: 4 }))
        .pipe(gulp.dest('Autolist/assets/css-rtl'));
});


//_______ task for beautifying colorskins
gulp.task('rtlbeautifycolor', function() {
    return gulp.src('Autolist/assets/color-skins-rtl/*.css')
        .pipe(beautify.css({ indent_size: 4 }))
        .pipe(gulp.dest('Autolist/assets/color-skins-rtl'));
});