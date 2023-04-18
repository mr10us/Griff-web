module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy('./src/index.min.css');
  eleventyConfig.addPassthroughCopy('./src/owl.carousel.min.css');
  eleventyConfig.addPassthroughCopy('./src/corner.indicator.css');
  eleventyConfig.addPassthroughCopy('./src/js');
  eleventyConfig.addPassthroughCopy('./src/font');
  eleventyConfig.addPassthroughCopy('./src/image');
  eleventyConfig.addPassthroughCopy('./src/admin');
  eleventyConfig.addPassthroughCopy('./src/confirmForm');

  

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
}