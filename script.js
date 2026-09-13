/* =================================
   MOBILE SIDEBAR
================================= */

const menuBtn = document.getElementById("menuBtn");

const sidebar = document.getElementById("sidebar");


menuBtn.addEventListener("click", function () {

    sidebar.classList.toggle("active");

});


/* =================================
   CLOSE SIDEBAR WHEN LINK IS CLICKED
================================= */

const sidebarLinks =
    document.querySelectorAll(".sidebar-menu a");


sidebarLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        sidebar.classList.remove("active");

    });

});


/* =================================
   DARK / LIGHT THEME
================================= */

const themeToggle =
    document.getElementById("themeToggle");


themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark");


    if (document.body.classList.contains("dark")) {

        themeToggle.textContent = "☾";

    } else {

        themeToggle.textContent = "☀";

    }

});


/* =================================
   TYPING ANIMATION
================================= */

const typingText =
    document.getElementById("typingText");


const messages = [

    "Welcome to my portfolio.",

    "What can I do for you?",

    "I build modern websites.",

    "I create responsive interfaces.",

    "I solve problems with code."

];


let messageIndex = 0;

let characterIndex = 0;

let deleting = false;


function typeEffect() {

    const currentMessage =
        messages[messageIndex];


    if (!deleting) {

        typingText.textContent =
            currentMessage.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (characterIndex === currentMessage.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;

        }

    } else {

        typingText.textContent =
            currentMessage.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            messageIndex++;

            if (messageIndex === messages.length) {

                messageIndex = 0;

            }

        }

    }


    const speed = deleting ? 50 : 90;

    setTimeout(typeEffect, speed);

}


typeEffect();