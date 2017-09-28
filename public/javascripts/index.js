const video = document.querySelector('#video');

navigator.getMedia = (navigator.getUserMedia ||
          navigator.webkitGetUserMedia ||
          navigator.mozGetUserMedia ||
          navigator.msGetUserMedia);

navigator.getMedia( { video: true }, (stream) => {
  video.src = window.URL.createObjectURL(stream);
  video.play();
  },
  (err) => {
    console.error(err);
  }
);
const take_photo_btn = document.querySelector('#take-photo');

take_photo_btn.addEventListener('click', (e) => {

  e.preventDefault();
//Logga in consolen när man klickar. 

})

const takeSnapshot = () => {
  const height = video.videoHeight;
  const width = video.videoWidth;
  console.log(height, width);
}

