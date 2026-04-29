// FORM VALIDATION
const form = document.getElementById("applicationForm");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message");

        if (name.length < 3) {
            message.innerText = "Name must be at least 3 characters.";
            return;
        }

        if (!email.includes("@")) {
            message.innerText = "Enter a valid email.";
            return;
        }

        message.innerText = "Submitting...";
        
        setTimeout(() => {
            message.innerText = "Application submitted successfully, " + name + "!";
        }, 1000);
    });
}

// SCROLL ANIMATION
const cards = document.querySelectorAll(".card");

function revealCards() {
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();

        if (rect.top < window.innerHeight - 50) {
            card.classList.add("show");
        }
    });
}

// RUN ON LOAD (THIS FIXES YOUR ISSUE)
window.addEventListener("load", revealCards);

// RUN ON SCROLL
window.addEventListener("scroll", revealCards);

// ACTIVE NAV LINK
const links = document.querySelectorAll("nav a");
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});