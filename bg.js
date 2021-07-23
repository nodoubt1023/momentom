const images = [
  "미용실 집중.png",
  "지구 티켓 받은 22.png",
  "제리 2.png",
  "마주보기.png"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `soul/${chosenImage}`;

document.body.appendChild(bgImage);