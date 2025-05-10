module.exports = function(eleventyConfig) {
  // Set input and output directories


  eleventyConfig.addPassthroughCopy("./src/img");



  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "public"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
}