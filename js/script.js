/* 
   1. MOBILE NAVIGATION
*/

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
});



/*
   2. CLOSE MOBILE MENU AFTER CLICKING A LINK
*/

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");
    });
});

/* 
   3. THEME TOGGLE
*/

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    // Save the user's preferred theme
    if (document.body.classList.contains("light-theme")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
});


/* 
   4. LOAD SAVED THEME
*/

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-theme");
}


/* 
   5. SCROLL REVEAL ANIMATION
*/

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");

                // Stop observing once the element is visible
                revealObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.1
    }
);


revealElements.forEach((element) => {
    revealObserver.observe(element);
});