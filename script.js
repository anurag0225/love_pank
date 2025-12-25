const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const container = document.querySelector(".container");
const result = document.getElementById("result");

// minimum distance between Yes & No button
const MIN_GAP = 120;

noBtn.addEventListener("mouseover", moveNoBtn);
noBtn.addEventListener("touchstart", moveNoBtn); // mobile support

function moveNoBtn() {
  const containerRect = container.getBoundingClientRect();
  const yesRect = yesBtn.getBoundingClientRect();
  const noRect = noBtn.getBoundingClientRect();

  let x, y, distance;

  do {
    x = Math.random() * (containerRect.width - noRect.width);
    y = Math.random() * (containerRect.height - noRect.height);

    const noCenterX = containerRect.left + x + noRect.width / 2;
    const noCenterY = containerRect.top + y + noRect.height / 2;

    const yesCenterX = yesRect.left + yesRect.width / 2;
    const yesCenterY = yesRect.top + yesRect.height / 2;

    distance = Math.hypot(
      noCenterX - yesCenterX,
      noCenterY - yesCenterY
    );

  } while (distance < MIN_GAP); // gap maintain

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

yesBtn.addEventListener("click", () => {
  result.innerText = "I knew it 😍💖";
  noBtn.style.display = "none";
  yesBtn.disabled = true;
});
