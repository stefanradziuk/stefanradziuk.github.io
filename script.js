var videos = [
  "kitten"
  , "parrot"
  , "birb"
  , "cuddles"
  , "petting"
  , "kittenSlide"
  , "bulldog"
  , "ocelot"
  , "cheetahs"
  , "walkin"]

function getRandomVideo() {
  const path = "media/";
  const fileExtension = ".mp4";
  const randomVid = videos[Math.floor(Math.random() * videos.length)];
  console.log(`Enjoying the video of ${randomVid}?`);
  return path + randomVid + fileExtension;
}

function writeRandomVideo() {
  document.getElementById("randomVideo").innerHTML = `<source src="${getRandomVideo()}" type="video/mp4">`;
}

