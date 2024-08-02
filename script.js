let currentImageIndex = 0;
const images = document.querySelectorAll('.images img');

function openModal(imagePath) {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('modalImage');
    modal.style.display = 'block';
    modalImg.src = imagePath;
    currentImageIndex = Array.from(images).findIndex(img => img.src === modalImg.src);
}

function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

function nextImage() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    var modalImg = document.getElementById('modalImage');
    modalImg.src = images[currentImageIndex].src;
}

function prevImage() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    var modalImg = document.getElementById('modalImage');
    modalImg.src = images[currentImageIndex].src;
}

// Close modal when clicking outside of the image
window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
