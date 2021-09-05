var videos = [
  "kitten"
  , "parrot"
  , "cuddles"
  , "kittenSlide"
  , "bulldog"
  , "ocelot"
  , "cheetahs"
  , "walkin"]

  // videos temporarily disabled due to macos chrome issues:
  // "birb"
  // "petting"

function getRandomVideo() {
  const path = "media/";
  const fileExtension = ".mp4";
  const randomVid = videos[Math.floor(Math.random() * videos.length)];
  console.log(`Math.random() thought you'd enjoy the ${randomVid} video`);
  return path + randomVid + fileExtension;
}

function writeRandomVideo() {
  document.getElementById("randomVideo").innerHTML = `<source src="${getRandomVideo()}" type="video/mp4">`;
}

