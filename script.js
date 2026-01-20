const heartsContainer = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("span");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 14 + "px";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 400);

function showSurprise() {
  document.getElementById("surprise").style.display = "none";
  document.getElementById("content").classList.remove("hidden");
}
