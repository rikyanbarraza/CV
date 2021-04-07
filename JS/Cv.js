var hamTopNav = document.querySelector(".hamTopNav")
var ham = document.querySelector(".ham")
var hamIcon2 = document.querySelector(".hamIcon2")
var hamIcon = document.querySelector(".hamIcon")

ham.addEventListener("click", toggleMenu)

function toggleMenu() {
  if (hamTopNav.classList.contains("showMenu")) {
    hamTopNav.classList.remove("showMenu");
    hamIcon2.style.display = "none";
    hamIcon.style.display = "block";
  } else {
    hamTopNav.classList.add("showMenu");
    hamIcon2.style.display = "block";
    hamIcon.style.display = "none";
  }
}

var hamMenuLinks = document.querySelectorAll(".hamMenuLinks")

hamMenuLinks.forEach(
  function (hamMenuLinks) {
    hamMenuLinks.addEventListener("click", toggleMenu)
  }
)