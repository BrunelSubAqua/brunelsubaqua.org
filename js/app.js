
var homeBg = document.getElementById('home-yt-bg');
homeBg.height = ((homeBg.offsetWidth / 1280) * 720);

window.onresize = function() {
  homeBg.height = ((homeBg.offsetWidth / 1280) * 720);
}