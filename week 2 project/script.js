const panels = document.querySelectorAll(".panel");
const btnNext = document.querySelector(".btn-next");
const btnBack = document.querySelector(".btn-back");
const bg = document.querySelector(".container");
let currentIndex = 1;
// const intervalTime = 15000;

function showPanels(index) {
  panels.forEach((panel, i) => {
    panel.classList.remove("active", "left", "right", "hidden");

    if (i === index) {
      panel.classList.add("active");
      bg.style.backgroundImage = panel.style.backgroundImage;
    } else if (i === (index - 1 + panels.length) % panels.length) {
      panel.classList.add("left");
    } else if (i === (index + 1) % panels.length) {
      panel.classList.add("right");
    } else {
      panel.classList.add("hidden");
    }
  });
}

function nextPanel() {
    currentIndex = (currentIndex + 1) % panels.length;
    showPanels(currentIndex);
}


btnNext.addEventListener("click", () => {
  currentIndex = (currentIndex + 1 ) % panels.length;
  showPanels(currentIndex);
});

btnBack.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + panels.length) % panels.length;
  showPanels(currentIndex);
});

panels.forEach((panel, index) => {
  panel.addEventListener("click", () => {
    currentIndex = index;
    showPanels(currentIndex);
  });
});

let startX = 0;

function handleTouchStart(event) {
  startX = event.touches[0].clientX;
}

function handleTouchMove(event) {
  if (!startX) {
    return;
  }

  let moveX = event.touches[0].clientX;
  let diffX = startX - moveX;

  if (diffX > 50) {
    currentIndex = (currentIndex + 1) % panels.length;
    showPanels(currentIndex);
    startX = 0;
  } else if (diffX < -50) {
    currentIndex = (currentIndex - 1 + panels.length) % panels.length;
    showPanels(currentIndex);
    startX = 0;
  }
}

document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);

showPanels(currentIndex);

setInterval(nextPanel, intervalTime);