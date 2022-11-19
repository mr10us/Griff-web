module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy('./src/index.css');
  eleventyConfig.addPassthroughCopy('./src/owl.carousel.min.css');
  eleventyConfig.addPassthroughCopy('./src/js');
  eleventyConfig.addPassthroughCopy('./src/font');
  eleventyConfig.addPassthroughCopy('./src/image');

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
}