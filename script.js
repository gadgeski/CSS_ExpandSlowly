const images = document.querySelectorAll(".gallery-item");
let currentIndex = 0;

// ページ読み込み後初回画像にactive付与し、拡大アニメーション
window.addEventListener("load", () => {
  images[currentIndex].classList.add("active");
});

function changeImage() {
  // 現在の画像のactive解除
  images[currentIndex].classList.remove("active");

  // 次の画像へ切り替え
  currentIndex = (currentIndex + 1) % images.length;

  // 次の画像にactive付与
  images[currentIndex].classList.add("active");
}

// ４秒ごと画像切り替え
setInterval(changeImage, 4000);
