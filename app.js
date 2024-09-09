// Light/Dark Mode Toggle
const toggleSwitch = document.getElementById('mode-toggle');

// Toggle the light-mode class when the checkbox is changed
toggleSwitch.addEventListener('change', () => {
    document.body.classList.toggle('light-mode');
});
