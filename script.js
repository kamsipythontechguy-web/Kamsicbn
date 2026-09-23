/* =====================================================
   KAMSI PORTFOLIO
   FINAL JAVASCRIPT
   ===================================================== */


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        const isOpen = navMenu.classList.contains("active");

        menuBtn.textContent = isOpen ? "✕" : "☰";

    });


    // Close menu after clicking a navigation link

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            menuBtn.textContent = "☰";

        });

    });

}


/* ================= TYPING EFFECT ================= */

const typingText = document.getElementById("typingText");

const typingWords = [
    "Software Developer & Creator",
    "Web Developer",
    "Creative Builder",
    "Future Tech Entrepreneur"
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    if (!typingText) {
        return;
    }

    const currentWord = typingWords[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= typingWords.length) {
                wordIndex = 0;
            }

        }

    }

    const typingSpeed = deleting ? 45 : 80;

    setTimeout(typeEffect, typingSpeed);
}

typeEffect();


/* ================= PARTICLES ================= */

const particlesContainer =
    document.querySelector(".particles");


function createParticles() {

    if (!particlesContainer) {
        return;
    }

    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {

        const particle =
            document.createElement("span");

        particle.classList.add("particle");

        const size =
            Math.random() * 3 + 1;

        const left =
            Math.random() * 100;

        const duration =
            Math.random() * 10 + 8;

        const delay =
            Math.random() * 10;

        particle.style.width =
            `${size}px`;

        particle.style.height =
            `${size}px`;

        particle.style.left =
            `${left}%`;

        particle.style.animationDuration =
            `${duration}s`;

        particle.style.animationDelay =
            `${delay}s`;

        particlesContainer.appendChild(particle);
    }
}

createParticles();


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll("[data-reveal]");


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ================= COPY EMAIL ================= */

const emailAddress =
    "kamsianaebonam@gmail.com";


async function copyEmail() {

    try {

        await navigator.clipboard.writeText(
            emailAddress
        );

        showTemporaryMessage(
            "Email copied successfully!"
        );

    } catch (error) {

        const textArea =
            document.createElement("textarea");

        textArea.value =
            emailAddress;

        document.body.appendChild(textArea);

        textArea.select();

        document.execCommand("copy");

        textArea.remove();

        showTemporaryMessage(
            "Email copied successfully!"
        );

    }

}


/* ================= TEMP MESSAGE ================= */

function showTemporaryMessage(message) {

    const existing =
        document.querySelector(".copy-message");

    if (existing) {
        existing.remove();
    }

    const messageBox =
        document.createElement("div");

    messageBox.className =
        "copy-message";

    messageBox.textContent =
        message;

    messageBox.style.position = "fixed";
    messageBox.style.bottom = "25px";
    messageBox.style.left = "50%";
    messageBox.style.transform = "translateX(-50%)";
    messageBox.style.zIndex = "9999";
    messageBox.style.padding = "12px 18px";
    messageBox.style.borderRadius = "8px";
    messageBox.style.background = "#00ff88";
    messageBox.style.color = "#00150b";
    messageBox.style.fontWeight = "700";
    messageBox.style.fontSize = "14px";
    messageBox.style.boxShadow =
        "0 10px 30px rgba(0,0,0,0.4)";

    document.body.appendChild(messageBox);

    setTimeout(() => {

        messageBox.remove();

    }, 2500);

}


/* ================= CONTACT FORM ================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const message =
                document.getElementById("message").value.trim();


            if (!name || !email || !message) {

                if (formMessage) {

                    formMessage.textContent =
                        "Please fill in all fields.";

                }

                return;
            }


            /*
             * This portfolio does not have a mail server yet.
             *
             * Instead of pretending the message was sent,
             * we open the visitor's email application with
             * the message already prepared.
             */

            const subject =
                encodeURIComponent(
                    `Portfolio message from ${name}`
                );


            const body =
                encodeURIComponent(
                    `Hello Kamsi,

Name: ${name}
Email: ${email}

Message:
${message}

Sent from your portfolio website.`
                );


            const mailtoLink =
                `mailto:${emailAddress}?subject=${subject}&body=${body}`;


            if (formMessage) {

                formMessage.textContent =
                    "Opening your email app...";

            }


            window.location.href =
                mailtoLink;

        }
    );

}


/* ================= CURRENT YEAR ================= */

const yearElements =
    document.querySelectorAll(".copyright");


yearElements.forEach(element => {

    element.innerHTML =
        `© ${new Date().getFullYear()} Kamsi. All rights reserved.`;

});


/* ================= NAVBAR SCROLL EFFECT ================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener(
    "scroll",
    () => {

        if (!navbar) {
            return;
        }

        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(5, 5, 5, 0.94)";

        } else {

            navbar.style.background =
                "rgba(5, 5, 5, 0.78)";

        }

    }
);


/* ================= CONSOLE MESSAGE ================= */

console.log(
    "%c KAMSI PORTFOLIO ",
    "color:#00ff88;font-size:20px;font-weight:bold;"
);

console.log(
    "Building. Learning. Becoming. 🚀"
);