document.addEventListener("DOMContentLoaded", function () {
  const observerPics = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const picLeft = entry.target.querySelector(".complex-display-left");
      const picRight = entry.target.querySelector(".complex-display-right");

      if (entry.isIntersecting) {
        picLeft.classList.add("complex-left-annimation");
        picRight.classList.add("complex-right-annimation");
        return; // if we added the class, exit the function
      }

      // We're not intersecting, so remove the class
      picLeft.classList.remove("complex-left-annimation");
      picRight.classList.remove("complex-right-annimation");
    });
  });

  const observerText = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const textUp = entry.target.querySelector(".header-text-content-up");
      const textDown = entry.target.querySelector(".header-text-content-down");

      if (entry.isIntersecting) {
        textUp.classList.add("text-annimation-up");
        textDown.classList.add("text-annimation-down");
        return;
      }

      textUp.classList.remove("text-annimation-up");
      textDown.classList.remove("text-annimation-down");
    });
  });

  observerPics.observe(document.querySelector(".complex-uneven-pics"));
  observerText.observe(document.querySelector(".complex-header-text"));
});
