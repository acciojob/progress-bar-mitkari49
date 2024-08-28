function clicked(direction) {
  const circles = document.querySelectorAll(".circle");
  const activeCircle = document.querySelector(".circle.active");
  const activeIndex = Array.from(circles).indexOf(activeCircle);

  if (direction === "next" && activeIndex < circles.length - 1) {
    activeCircle.classList.remove("active");
    circles[activeIndex + 1].classList.add("active");
    if (activeIndex === circles.length - 2) {
      document.getElementById("next").disabled = true;
    }
    document.getElementById("prev").disabled = false;
  } else if (direction === "prev" && activeIndex > 0) {
    activeCircle.classList.remove("active");
    circles[activeIndex - 1].classList.add("active");
    if (activeIndex === 1) {
      document.getElementById("prev").disabled = true;
    }
    document.getElementById("next").disabled = false;
  }
}

// Initial state: Disable the "Previous" button
document.getElementById("prev").disabled = true;