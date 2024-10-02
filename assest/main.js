 // swiper slider
const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
  spaceBetween: 5,
  loop: true,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      320: {
          slidesPerView: 1,
          spaceBetween: 10,
      },
      768: {
          slidesPerView: 2,
          spaceBetween: 20,
      },
      1024: {
          slidesPerView: 3.3,
          spaceBetween: 30,
      },
  },
});

 // video player
 const playButton = document.getElementById('play-button');
 const videoPlaceholder = document.getElementById('video-placeholder');
 const videoElement = document.getElementById('video-element');

 // Add click event listener on play button
 playButton.addEventListener('click', function() {
     // Hide the image placeholder and play button
     videoPlaceholder.classList.add('d-none');
     playButton.classList.add('d-none');
     
     // Show and play the video
     videoElement.classList.remove('d-none');
     videoElement.play();
 });


  