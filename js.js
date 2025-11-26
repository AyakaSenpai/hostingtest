let slideIndex = 1;
showSlides(slideIndex);

// Fungsi untuk tombol Next/Prev
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Fungsi untuk kontrol Dot (titik)
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  // Logika memutar balik slide (looping)
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  
  // Sembunyikan semua slide
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  // Hilangkan status "active" dari semua dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Tampilkan slide yang aktif
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// OPSI: Slide Otomatis (Ganti gambar sendiri setiap 5 detik)
// Hapus bagian ini jika kamu hanya ingin slide manual
setInterval(function() {
    plusSlides(1);
}, 5000);