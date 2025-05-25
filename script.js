
const messages = [
    "You're an inspiration, Funke. Every moment with you brings joy and light.",
    "Your strength, kindness, and grace are the definition of true beauty.",
    "Thank you for being an incredible sister-in-law. You're truly the best!"
];

function showMessage(index) {
    const box = document.getElementById('messageBox');
    box.style.display = 'block';
    box.textContent = messages[index];
}
