// Set the current year in the footer
document.getElementById("current-year").textContent = new Date().getFullYear();

// Optional: Handle form submission (for demonstration)
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const message = `Thank you for your message, ${name}!`;
    alert(message);
    // Additional glow effect when form is submitted
    document.getElementById("contact").style.boxShadow = "0 0 15px rgba(106, 13, 173, 1)";
});
