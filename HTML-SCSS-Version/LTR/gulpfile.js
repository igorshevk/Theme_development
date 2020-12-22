var gulp = require('gulp');
sass = require("gulp-sass"),
postcss = require("gulp-postcss");
autoprefixer = require("autoprefixer");
var sourcemaps = require('gulp-sourcemaps'); 
var browserSync = require('browser-sync').create();
var cssbeautify = require('gulp-cssbeautify');
var beautify = require('gulp-beautify');


/*******************  LTR   ******************/


//_______ task for scss folder to css main style 
gulp.task('watch', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('Autolist/assets/scss/**/*.scss') 
		.pipe(sourcemaps.init())                       
		.pipe(sass())
		.pipe(sourcemaps.write(''))   
		.pipe(gulp.dest('Autolist/assets/css'))
		.pipe(browserSync.reload({
		  stream: true
	}))
})


//_______task for admin-custom
gulp.task('admin', function(){
   return gulp.src('Autolist/assets/css/admin-custom.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Autolist/assets/css'));
		
})


//_______task for sidemenu
gulp.task('menu', function(){
   return gulp.src('Autolist/assets/css/sidemenu.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Autolist/assets/css'));
		
})


/*******************  Color-skins   ******************/


//_______task for color1
gulp.task('color1', function(){
   return gulp.src('Autolist/assets/color-skins/color1.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Autolist/assets/color-skins'));
		
})

//_______task for color2
gulp.task('color2', function(){
   return gulp.src('Autolist/assets/color-skins/color2.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Autolist/assets/color-skins'));
		
})

//_______task for color3
gulp.task('color3', function(){
   return gulp.src('Autolist/assets/color-skins/color3.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Autolist/assets/color-skins'));
		
})

//_______task for color4
gulp.task('color4', function(){
   return gulp.src('Autolist/assets/color-skins/color4.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Autolist/assets/color-skins'));
		
})


//_______task for color5
gulp.task('color5', function(){
   return gulp.src('Autolist/assets/color-skins/color5.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Autolist/assets/color-skins'));
		
})

//_______task for color6
gulp.task('color6', function(){
   return gulp.src('Autolist/assets/color-skins/color6.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Autolist/assets/color-skins'));
		
})

//_______task for color7
gulp.task('color7', function(){
   return gulp.src('Autolist/assets/color-skins/color7.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Autolist/assets/color-skins'));
		
})

//_______task for color8
gulp.task('color8', function(){
   return gulp.src('Autolist/assets/color-skins/color8.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Autolist/assets/color-skins'));
		
})

//_______task for color9
gulp.task('color9', function(){
   return gulp.src('Autolist/assets/color-skins/color9.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Autolist/assets/color-skins'));
		
})

//_______task for color10
gulp.task('color10', function(){
   return gulp.src('Autolist/assets/color-skins/color10.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Autolist/assets/color-skins'));
		
})

//_______task for color11
gulp.task('color11', function(){
   return gulp.src('Autolist/assets/color-skins/color11.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Autolist/assets/color-skins'));
		
})

//_______task for color12
gulp.task('color12', function(){
   return gulp.src('Autolist/assets/color-skins/color12.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Autolist/assets/color-skins'));
		
})

//_______task for color13
gulp.task('color13', function(){
   return gulp.src('Autolist/assets/color-skins/color13.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Autolist/assets/color-skins'));
		
})

//_______task for color14
gulp.task('color14', function(){
   return gulp.src('Autolist/assets/color-skins/color14.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Autolist/assets/color-skins'));
		
})

//_______task for color15
gulp.task('color15', function(){
   return gulp.src('Autolist/assets/color-skins/color15.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Autolist/assets/color-skins'));
		
})

/*******************  Beautify  ******************/

//_______ task for beautifying css
gulp.task('beautify', function() {
    return gulp.src('Autolist/assets/css/*.css')
        .pipe(beautify.css({ indent_size: 4 }))
        .pipe(gulp.dest('Autolist/assets/css'));
});


//_______ task for beautifying colorskins
gulp.task('beautifycolor', function() {
    return gulp.src('Autolist/assets/color-skins/*.css')
        .pipe(beautify.css({ indent_size: 4 }))
        .pipe(gulp.dest('Autolist/assets/color-skins'));
});

