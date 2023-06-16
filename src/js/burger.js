const burger = document.querySelector(".jsburger");

burger.addEventListener("click", function() {
    if (this.classList.contains("toggled")) {
      this.classList.remove("toggled");
      this.classList.add("unToggled");
    } else {
      this.classList.remove("unToggled");
      this.classList.add("toggled");
    }
  });

