const mix = require('laravel-mix');

const config = {
    scssDir: 'public/assets/scss',
    jsSrc: 'public/assets/js/src',
    jsDest: 'public/assets/js/min',
    cssDir: 'public/assets/css',
    tplDir: 'public',
    imgSrc: 'public/assets/img'
};

if(process.env.NODE_ENV === 'development') {
    mix.browserSync({
        proxy: 'equalizer.localhost',
        files: [
            `${config.cssDir}/**/*.*`,
            `${config.jsDest}/*.*`,
            `${config.tplDir}/index.php`]
    })
    .sourceMaps()
    .webpackConfig({ devtool: "inline-source-map" });
}

if(process.env.NODE_ENV === 'production') {
    mix
    .version()
    .options({
      uglify: {
        uglifyOptions: {
          compress: {
            drop_console: true
          }
        }
      }
    })
}

mix.setPublicPath('./public/')
    .js(`${config.jsSrc}/app.js`, `${config.jsDest}`)
    .sass(`${config.scssDir}/style.scss`, `${config.cssDir}`)
    .options({
        processCssUrls: false,
    })

