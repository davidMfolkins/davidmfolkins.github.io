function activateGallery () {
  let thumbNails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage  = document.querySelector("#gallery-photo > img");

  thumbNails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function(){
// Set clicked image as main image.
      let newImageSrc = thumbnail.dataset.largeVersion;
      mainImage.setAttribute("src", newImageSrc);
    });
  });                      
}