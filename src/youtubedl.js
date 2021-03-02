console.log("Extension has loaded");
let videoContainer = document.getElementById("player-container-outer");

let videos = document.getElementsByTagName("video");
console.log(videos, videos[0], videoContainer);

let warning = document.createElement("h1");
warning.innerHTML = "NoUTube &#128548;";
warning.style.marginTop = "20%";
warning.style.marginBottom = "20%";
warning.style.marginLeft = "15%";
// warning.style.display = "relative";
// warning.style.bottom = "50%";
warning.style.fontSize = "10em";
// warning.style.height = videoContainer.style.height;
// warning.style.zIndex = 10000;
videoContainer.parentNode.appendChild(warning);

videoContainer.style.display = "none";
setInterval(() => {
	videos[0].pause();
}, 1000);
