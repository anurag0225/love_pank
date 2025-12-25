const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const result = document.getElementById("result");

noBtn.addEventListener("mouseover", () => {
  const x = Math.floor(Math.random() * 500);
  const y = Math.floor(Math.random() * 200);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", () => {
  result.innerText = "I knew it 😍💖";
  noBtn.style.display = "none";
  yesBtn.disabled = true;
});
