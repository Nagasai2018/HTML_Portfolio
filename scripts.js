const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");
const toggleImage = document.getElementById("image-toggle");

function openMenu() {
    sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu() {
    sideMenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll', () => {
    if (scrollY > 50) {
        navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', "dark:shadow-white/20");
        navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50', "dark:bg-transparent");
    } else {
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', "dark:shadow-white/20");
        navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50', "dark:bg-transparent");
    }
});

// Light and Dark Mode Toggle

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    toggleImage.src = './images/Resume-pic.png'; // Set image for dark theme
} else {
    document.documentElement.classList.remove('dark');
    toggleImage.src = './images/Resume-pic-light.png'; // Set image for light theme
}

function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
        localStorage.theme = 'dark';
        toggleImage.src = './images/Resume-pic.png'; // Set image for dark theme
    } else {
        localStorage.theme = 'light';
        toggleImage.src = './images/Resume-pic-light.png'; // Set image for light theme
    }
}
