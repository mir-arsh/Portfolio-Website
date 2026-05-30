/* Typed effect — zero dependencies */
(function () {
    var el = document.getElementById('typed-text');
    var words = ['Websites.', 'AI Products.', 'Businesses.'];
    var wi = 0, ci = 0, deleting = false;
    var TYPE = 90, DEL = 55, PAUSE = 1800;
    function tick() {
        var word = words[wi];
        if (!deleting) {
            el.textContent = word.slice(0, ++ci);
            if (ci === word.length) { deleting = true; setTimeout(tick, PAUSE); return; }
        } else {
            el.textContent = word.slice(0, --ci);
            if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; }
        }
        setTimeout(tick, deleting ? DEL : TYPE);
    }
    tick();
})();

/* Header scroll effect */
var header = document.getElementById('siteHeader');
window.addEventListener('scroll', function () {
    header.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* Modal */
var backdrop = document.getElementById('modalBackdrop');
var openBtn = document.getElementById('openModalBtn');
var closeBtn = document.getElementById('closeModalBtn');
function openModal() { backdrop.classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeModal() { backdrop.classList.remove('open'); document.body.style.overflow = ''; }
openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', function (e) { if (e.target === backdrop) closeModal(); });
document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });

/* Scroll-reveal */
var revealEls = document.querySelectorAll('.reveal');
var ro = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); ro.unobserve(entry.target); }
    });
}, { threshold: 0.12 });
revealEls.forEach(function (el) { ro.observe(el); });

/* Back to top */
var backTop = document.getElementById('backTop');
window.addEventListener('scroll', function () {
    backTop.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });
backTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});