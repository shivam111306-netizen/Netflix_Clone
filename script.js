const boxes = document.querySelectorAll(".toggle-box");

boxes.forEach(box => {
  const header = box.querySelector(".header");

  header.addEventListener("click", () => {
    // Close all other boxes first
    boxes.forEach(otherBox => {
      if (otherBox !== box) {
        otherBox.classList.remove("active");
      }
    });

    // Toggle current box
    box.classList.toggle("active");
  });
});
