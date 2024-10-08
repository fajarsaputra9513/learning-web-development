// toggle
const navbarNav = document.querySelector(".navbar-nav");

// ketika diklik
document.querySelector("#hamburger-menu").onclick = () => {
    navbarNav.classList.toggle("active");
};

// ketika klik diluar sidebar
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    }
});
