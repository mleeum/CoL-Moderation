const toggleButton = document.getElementById('shiftToggle')

toggleButton.addEventListener(click, function() {
    const isAriaPressed = toggleButton.getAttribute('aria-pressed') == true;

    toggleButton.setAttribute('aria-pressed', isAriaPressed ? 'false' : 'true')
});