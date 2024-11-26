const htmlmin = require('html-minifier-terser');
const sass = require('sass');
const fs = require('fs');
const path = require('path');

/**
 * Combine markup (.html) and styles (.scss) from `src\` into single HTML
 * files in `portals\` using Eleventy.
 */
module.exports = function (eleventyConfig) {
  // Inline CSS
  eleventyConfig.addTransform('inline-css', (content, outputPath) => {
    if (outputPath && outputPath.endsWith('.html')) {
      const fileName = path.basename(outputPath, '.html');
      const scssPath = `src/${fileName}.scss`;
      const scssFileExists = fs.existsSync(scssPath);

      if (scssFileExists) {
        const result = sass.compile(scssPath, { style: 'compressed' });
        const cssTag = `<style>${result.css}</style>`;
        return content.replace('</head>', `${cssTag}</head>`);
      }
    }
    return content;
  });

  // Minify
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
      output: 'portals',
    },
  };
};
