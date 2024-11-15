let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');

};


ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,

});
ScrollReveal().reveal('.home-content, heading', { origin: 'top', reset: true });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'buttom', reset: true });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left', reset: true });
ScrollReveal().reveal('.home-contact p , .about-content', { origin: 'right', reset: true });
ScrollReveal().reveal('.leetcode , .github-stats , .stats-card , .heading , .leetcode-card', { origin: 'left', reset: true });


//typed js
const typed = new Typed('.mutiple-text', {
    strings: ['Fullstack Developer!', 'DevOps Enthusiast!'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});


//footer
// Array of tech jokes
const jokes = [
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "There are 10 types of people in the world: those who understand binary and those who don't.",
    "Why do Java developers wear glasses? Because they don't see sharp!",
    "How do you comfort a JavaScript bug? You console it.",
    "Why did the developer go broke? Because he used up all his cache.",
    "I’d tell you a UDP joke, but you might not get it.",
    "Why do Python programmers prefer snakes? Because they don’t like braces!",
    "In order to understand recursion, you must first understand recursion.",
    "I have a joke about null, but it’s pointless.",
    "How many programmers does it take to change a light bulb? None. That’s a hardware problem!",
    "Why was the computer cold? It left its Windows open.",
    "There’s no place like 127.0.0.1.",
    "I would tell you a joke about cloud storage, but it’s over your head.",
    "Why did the programmer quit his job? He didn’t get arrays.",
    "I told my computer I needed a break, and now it won’t stop sending me KitKats.",
    "Why do programmers hate nature? Too many bugs.",
    "What’s a programmer’s favorite hangout place? The Foo Bar."
];

// Function to display a random joke
function displayRandomJoke() {
    const jokeElement = document.getElementById("tech-joke");
    const randomIndex = Math.floor(Math.random() * jokes.length);
    jokeElement.textContent = jokes[randomIndex];
}

// Call the function on page load
window.onload = displayRandomJoke;
