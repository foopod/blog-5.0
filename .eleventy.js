const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(src, {
    widths: [300, 600, 1200],
    formats: [ "webp"],
    outputDir: "./_site/img/"
  });

  let imageAttributes = {
    alt,
    sizes
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function(eleventyConfig) {
    eleventyConfig.addShortcode("image", imageShortcode);
  
    //eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("img/logo.png");


    let pad = number => number <= 99 ? `0${number}`.slice(-2) : number;
    Date.prototype.toShortFormat = function() {

      let monthNames =["Jan","Feb","Mar","Apr",
                        "May","Jun","Jul","Aug",
                        "Sep", "Oct","Nov","Dec"];
      
      let day = pad(this.getDate());
      
      let monthIndex = this.getMonth();
      let monthName = monthNames[monthIndex];
      
      let year = this.getFullYear();
      
      return `${day} ${monthName} ${year}`;  
    }

    
  };