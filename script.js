
// stars animation

// var randomX = Math.random() * 200 - 100;
// var randomY = Math.random() * 200 - 100;

// document.documentElement.setProperty("--random-x", randomX + "px");
// document.documentElement.setProperty("--random-y", randomY + "px");


// scroll reveal

ScrollReveal({ 
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200
 });

ScrollReveal().reveal(".intro-info h2,h1, .intro-info h1, .project2", { origin: "top" });
ScrollReveal().reveal(".intro img, .intro-info h3, .about_info h2, .project1, .project4, .skills-content h3, .skill-info img", { origin: "left" });
ScrollReveal().reveal(".intro-info p, .about_video, .about_info p, .project6, .project3, .skill-info h4", { origin: "right" });
ScrollReveal().reveal(".intro-info .social, .intro-info h4, .project5", { origin: "bottom" });


// typed js

const typed = new Typed(".aboutme-text", {
    strings: ["a Data Analyst", "an Accountant", "a Web Developer", "a Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});