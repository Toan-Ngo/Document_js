function toggleReadMore()
{
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("moreText");
    var btn = document.getElementById("readMoreBtn");
    if(moreText.style.display == "none")
    {
        dots.style.display = "none";
        moreText.style.display = "inline";
        btn.innerText = "Read more"
    }
    else{
        dots.style.display = "inline";
        moreText.style.display = "none";
        btn.innerText = "Read less"
    }
}
// Lấy ảnh lớn
const preview = document.querySelector("#preview img");

// Lấy tất cả ảnh nhỏ
const thumbnails = document.querySelectorAll("#silder .image_fure img");

// Gắn sự kiện click
thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", function() {
    preview.src = this.src;
  });
});