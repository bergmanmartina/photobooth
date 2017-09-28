const video = () => {
	console.log ('camera-stream')
}

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