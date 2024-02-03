//GALLERY
//tangkap element DOM
 //thumbnails
const thumbs = Array.from(document.querySelectorAll('#img-thumb'));
 //overlay
const overlay = Array.from(document.querySelectorAll('.overlay'));
 //full
const img = Array.from(document.querySelectorAll('#img-full'));

//efek zoom pada gambar ketika diklik
thumbs.forEach((thumb, i) => {
  thumb.addEventListener("click", () => {
    overlay[i].style.display = "block";
    img[i].src = thumb.src;
  });
  overlay[i].addEventListener("click", () => {
    overlay[i].style.display = "none";
  });
});