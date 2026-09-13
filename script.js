/* =========================
   DARK / LIGHT MODE
========================= */

const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeButton.textContent = "☾";
    } else {
        themeButton.textContent = "☀";
    }

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


/* =========================
   DISCOVER MORE BUTTON
========================= */

const discoverButton = document.getElementById("discover-btn");

const discoverPanel = document.getElementById("discover-panel");


discoverButton.addEventListener("click", function () {

    discoverPanel.classList.toggle("open");

    if (discoverPanel.classList.contains("open")) {

        discoverButton.innerHTML =
            'CLOSE <span>↑</span>';

        discoverPanel.scrollIntoView({
            behavior: "smooth"
        });

    } else {

        discoverButton.innerHTML =
            'DISCOVER MORE <span>↗</span>';

    }

});


/* =========================
   COUNTDOWN
========================= */

/*
   Change this date if you want
   a different event date.
*/

const eventDate = new Date();

eventDate.setDate(eventDate.getDate() + 15);


function updateCountdown() {

    const now = new Date();

    const difference = eventDate - now;


    if (difference <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;

    }


    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );


    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );


    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    document.getElementById("days").textContent =
        String(days).padStart(2, "0");


    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");


    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

}


updateCountdown();

setInterval(updateCountdown, 1000);