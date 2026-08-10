/*=================== typing animation ====================*/
let typed = new Typed(".typing",{
    strings:["Web Designer","Graphic Design","Digital Marketer","Video Editor"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
/*=================== Section Navigation ====================*/

const navLinks = document.querySelectorAll(".nav a");
const sections = document.querySelectorAll(".main-content .section");

navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const sectionId = this.getAttribute("data-section");

        // Sabhi sections hide karo
        sections.forEach(section => {
            section.classList.add("hidden");
        });

        // Sirf selected section show karo
        const selectedSection = document.getElementById(sectionId);

        if (selectedSection) {
            selectedSection.classList.remove("hidden");
        }

        // Active menu change karo
        navLinks.forEach(nav => {
            nav.classList.remove("active");
        });

        this.classList.add("active");

        // Page ko top par rakho
        window.scrollTo(0, 0);
    });
});
/*=================== Hire Me Button ====================*/

const hireButtons = document.querySelectorAll(".hire-me");

hireButtons.forEach(button => {
    button.addEventListener("click", function(e) {
        e.preventDefault();

        sections.forEach(section => {
            section.classList.add("hidden");
        });

        document.getElementById("contact").classList.remove("hidden");

        navLinks.forEach(nav => {
            nav.classList.remove("active");
        });

        document.querySelector('.nav a[data-section="contact"]').classList.add("active");

        window.scrollTo(0, 0);
    });
});
/*=================== Default Home Section ====================*/

sections.forEach(section => {
    section.classList.add("hidden");
});

document.getElementById("home").classList.remove("hidden");