const htmlmin = require('html-minifier-terser');
const sass = require('sass');
const fs = require('fs');
const prettier = require('prettier');

const outputPathName = 'portals';
const outputPathBase = `./${outputPathName}/`;

/**
 * Combine markup (.html) and styles (.scss) from `src\` into single HTML
 * files in `portals\` using Eleventy.
 */
module.exports = function (eleventyConfig) {
  // Watch for changes in SCSS files and recompile
  eleventyConfig.addWatchTarget('./src/**/*.scss');

  // Watch for changes in HTML files and recompile
  eleventyConfig.addWatchTarget('./src/**/*.html');

  // Run Prettier on HTML files
  eleventyConfig.addFilter('prettify', (code) => {
    return prettier.format(code, { parser: 'html' });
  });

  // Compile SCSS files and inject inline CSS into HTML
  eleventyConfig.addTransform('inline-css', (content, outputPath) => {
    const basePath = outputPath.replace(outputPathBase, '');
    const baseName = (basePath && basePath.split('/')[0]) ?? null;

    if (baseName) {
      const scssPath = `src/${baseName}.scss`;
      const scssFileExists = fs.existsSync(scssPath);

      if (scssFileExists) {
        const result = sass.compile(scssPath, { style: 'compressed' });
        const styles = `<style>${result.css}</style>`;
        return content.replace('</head>', `${styles}</head>`);
      }
    }
    return content;
  });

  // Minify HTML output
  eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
    if (outputPath && outputPath.endsWith('.html')) {
      return htmlmin.minify(content, {
        collapseWhitespace: true,
        removeComments: true,
        removeOptionalTags: true,
        minifyCSS: true,
        minifyJS: true,
      });
    }
    return content;
  });

  return {
    dir: {
      input: 'src',
      output: outputPathName,
    },
  };
};
