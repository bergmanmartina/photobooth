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
  const snap = takeSnapshot()

  const image = document.querySelector('#snap');
  image.setAttribute('src', snap)
  e.preventDefault();

const save = document.querySelector('#spara');
  save.setAttribute('href', snap)
})

const takeSnapshot = () => {
  const height = video.videoHeight;
  const width = video.videoWidth;
  console.log('take-photo');

const hidden_canvas = document.querySelector('#min-canvas') 
const context = hidden_canvas.getContext('2d')
context.drawImage(video, 0, 0, width, height);
return hidden_canvas.toDataURL('image/png'); 
}

