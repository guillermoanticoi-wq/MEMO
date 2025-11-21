const modal = document.getElementById("lightbox-modal");
const modalImg = document.getElementById("lightbox-image");
const captionText = document.getElementById("lightbox-caption");

function openLightbox(src, caption) {
    modal.style.display = "block";
    modalImg.src = src;
    captionText.innerHTML = caption;
    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape" && modal.style.display === "block") {
        closeLightbox();
    }
});

modalImg.parentNode.addEventListener('click', function(event) {
    event.stopPropagation();
});
