const shiftButton = document.getElementById('shiftToggle');
const breakButton = document.getElementById('breakToggle')

shiftButton.addEventListener("click", () => {
    const pressed = shiftButton.getAttribute('aria-pressed') === 'true';
    const shiftState = !pressed;
   
    shiftButton.setAttribute('aria-pressed', shiftState);
    shiftButton.textContent = shiftState ? "End Shift" : "Start Shift";
});

breakButton.addEventListener("click", () => {
    const pressed = breakButton.getAttribute('aria-pressed') === 'true';
    const breakState = !pressed;

    breakButton.setAttribute('aria-pressed', breakState);
    breakButton.textContent = breakState? "End Break" : "Start Break";

});
