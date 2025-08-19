//autotype for hero section
var typed = new Typed(".auto-type", {
    strings: ["Websites", "Apps", "Graphics", "AI Softwares", "Robots"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
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
  } 
  else if (window.scrollY <= 50 && isShrunk) {
    document.querySelectorAll(".scrolled").forEach(el => {
      el.style.transform = "scale(1)";
      el.style.transition = "transform 0.3s ease";
    });
    header.style.height = "5rem";
    isShrunk = false;
  }
});


//Testimonial Carousel
$('.testimonials-container').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:2000,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        970:{
            items:1,
            nav:true
        },
        971:{
            items:2
        },
    }
})

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
    window.open("https://maps.app.goo.gl/ydvQHM76PYkMJPtr9", "_blank");
}

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