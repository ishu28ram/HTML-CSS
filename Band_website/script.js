let bar = document.querySelector(".bars");
let sideBar = document.querySelector("nav .nav-links");
let slides = document.querySelectorAll(".img1");
let slidehow = 0;
slideshowhero();

// Function to close the sidebar
function closeSidebar() {
  sideBar.classList.remove("show");
}

// Toggle sidebar on bar click
bar.addEventListener("click", () => {
  sideBar.classList.toggle("show");
  console.log("sidebar");
});

// Add event listener to each link inside the sidebar
sideBar.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeSidebar);
});

function slideshowhero() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slidehow++;
  if (slidehow > slides.length) {
    slidehow = 1;
  }
  slides[slidehow - 1].style.display = "block";
  setTimeout(slideshowhero, 30000);
}
