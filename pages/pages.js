// Hamburger Menu Functionality
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hambur');
    const mobileNav = document.querySelector('.mobile-nav');
    const closeBtn = document.querySelector('.close-btn');
    const overlay = document.querySelector('.overlay');
    const navLinks = document.querySelectorAll('.mobile-nav-links a');

    const openMenu = () => {
        mobileNav.classList.add('active');
        overlay.classList.add('active');
        document.body.classList.add('no-scroll');
    };

    const closeMenu = () => {
        mobileNav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
    };

    if (hamburger) {
        hamburger.addEventListener('click', openMenu);
    }
    if (closeBtn) {
        closeBtn.addEventListener('click', closeMenu);
    }
    if (overlay) {
        overlay.addEventListener('click', closeMenu);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});

//header animation on scroll
const header = document.querySelector('header');
let isShrunk = false;
window.addEventListener("scroll", () => {
    if (window.scrollY > 50 && !isShrunk) {
        document.querySelectorAll(".scrolled").forEach(el => {
            el.style.transform = "scale(0.9)";
            el.style.transition = "transform 0.3s ease";
        });
        header.style.height = "4rem";
        isShrunk = true;
    } else if (window.scrollY <= 50 && isShrunk) {
        document.querySelectorAll(".scrolled").forEach(el => {
            el.style.transform = "scale(1)";
            el.style.transition = "transform 0.3s ease";
        });
        header.style.height = "5rem";
        isShrunk = false;
    }
});

//Email Function
function sendEmail() {
    var recipient = "mirarsh6119@gmail.com";
    var subject = "Let's Talk!";
    var body = "";
    var mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
}

//Call Function
function callMe() {
    var phoneNumber = "8899654953";
    window.location.href = `tel:${phoneNumber}`;
}

//Location Function
function openMap() {
    window.open("https://maps.google.com/?q=Namlabal+Pampore+Pulwama", "_blank");
}

// Service/Consultation Form Function
const contactModal = document.querySelector('.contact-form-modal');
const openModalBtn = document.querySelector('.book-now-button');
const closeModalBtn = document.querySelector('.close-btn');

if (openModalBtn && contactModal) {
    const formSteps = document.querySelectorAll('.form-step');
    const nextButtons = document.querySelectorAll('.next-button');
    const prevButtons = document.querySelectorAll('.prev-button');
    let currentStep = 0;

    const openFormModal = () => {
        contactModal.style.display = 'flex';
        showStep(0);
    };

    const closeFormModal = () => {
        contactModal.style.display = 'none';
    };

    const showStep = (step) => {
        formSteps.forEach((s) => s.classList.remove('active'));
        formSteps[step].classList.add('active');
    };

    const validateStep = (step) => {
        let isValid = true;
        const currentInputs = formSteps[step].querySelectorAll('input[required], select[required], textarea[required]');
        currentInputs.forEach((input) => {
            if (!input.checkValidity()) {
                isValid = false;
                input.reportValidity();
            }
        });
        return isValid;
    };

    openModalBtn.addEventListener('click', openFormModal);
    const formCloseBtn = contactModal.querySelector('.close-btn');
    if (formCloseBtn) {
        formCloseBtn.addEventListener('click', closeFormModal);
    }

    nextButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (validateStep(currentStep)) {
                currentStep++;
                showStep(currentStep);
            }
        });
    });

    prevButtons.forEach((button) => {
        button.addEventListener('click', () => {
            currentStep--;
            showStep(currentStep);
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target === contactModal) {
            closeFormModal();
        }
    });
}