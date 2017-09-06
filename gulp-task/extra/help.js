var gulp = require("gulp");
const chalk = require('chalk');

const title = chalk.blueBright.bgWhite;
const subtitle = chalk.white.underline.bgBlack;
const category = chalk.black.bgWhite;
const line = chalk.black.bgWhite;
const description = chalk.gray;
const taskLabel = chalk.white.bgBlack;
const taskName = chalk.red.underline.bold;

gulp.task("help", function () {
    console.log(title("\nMakeitapp Clients Website Toolchain\n"));

    console.log(line("\n---------------------------------------\n"));

    console.log(subtitle("Chained Task:\n"));
    console.log(category("FOR DEVELOPMENT\n"));
    console.log(taskLabel("task -> ") + taskName("gulp default") + description(" (Run the sequence 'sass' 'browserSync' 'watch')\n "));
    console.log(category("FOR BUILDING\n"));
    console.log(taskLabel("task -> ") + taskName("gulp build") + description(" (Run the sequence 'clean:dist' 'sass' 'useref' 'images' 'fonts' 'css' 'js' 'minify-css')\n "));

    console.log(line("\n---------------------------------------\n"));

    console.log(subtitle("Single Task:\n"));
    console.log(taskLabel("task -> ") +taskName("gulp watch") + description(" (Watch for changes to sass, js and html code)\n "));
    console.log(taskLabel("task -> ") +taskName("gulp browserSync") + description(" (Start local server in 'dev' directory)\n "));
    console.log(taskLabel("task -> ") +taskName("gulp sass") + description(" (Gets all files ending with .scss in dev/scss and children dirs, create a sourcemap of sass, outputs it in the css folder, reloading with Browser Sync)\n "));
    console.log(taskLabel("task -> ") +taskName("gulp clean") + description(" (Delete the 'dist' directory and clean cache)\n "));
    console.log(taskLabel("task -> ") +taskName("gulp clean:dist") + description(" (Delete the 'dist' directory but not the 'images' directory inside the 'dist' directory)\n "));
    console.log(taskLabel("task -> ") +taskName("gulp fonts") + description(" (Copying fonts from 'dev' directory to 'dist' directory)\n "));
    console.log(taskLabel("task -> ") +taskName("gulp css") + description(" (Copying css from 'dev' directory to 'dist' directory)\n "));
    console.log(taskLabel("task -> ") +taskName("gulp js") + description(" (Copying js from 'dev' directory to 'dist' directory)\n "));
    console.log(taskLabel("task -> ") +taskName("gulp images") + description(" (Optimizing images, caching images that ran through imagemin, output to 'dist' directory)\n "));
    console.log(taskLabel("task -> ") +taskName("gulp useref") + description(" (Optimizing css and js)\n "));
    console.log(taskLabel("task -> ") +taskName("gulp minify-css") + description(" (Minify css and output to 'dist' directory)\n "));

    console.log(line("\n---------------------------------------\n"));

    console.log(subtitle("Experimental Task:\n"));
    console.log(taskLabel("task -> ") +taskName("gulp render-twig") + description(" (Compile Twig templates to HTML and output the rendered HTML files to the 'dist' directory)\n "));
});