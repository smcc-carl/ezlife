const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItTocDoneRight = require("markdown-it-toc-done-right");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/img");

  // Use Markdown-It for rendering
  const markdownLib = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  })
  .use(markdownItAnchor, { permalink: false })
  .use(markdownItTocDoneRight);

  eleventyConfig.setLibrary("md", markdownLib);

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "public"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
