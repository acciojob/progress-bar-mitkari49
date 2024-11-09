let currentActive = 1;

function clicked(direction) {
  const circles = document.querySelectorAll(".circle");

  if (direction === "next" && currentActive < circles.length) {
    circles[currentActive - 1].classList.remove("active");
    circles[currentActive].classList.add("active");
    currentActive++;
  } else if (direction === "prev" && currentActive > 1) {
    circles[currentActive - 1].classList.remove("active");
    circles[currentActive - 2].classList.add("active");
    currentActive--;
  }

  updateButtons();
}

function updateButtons() {
  document.getElementById("prev").disabled = currentActive === 1;
  document.getElementById("next").disabled = currentActive === document.querySelectorAll(".circle").length;
}

// Initialize the buttons' disabled state
updateButtons();
