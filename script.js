// Set current year in footer
document.getElementById("current-year").textContent = new Date().getFullYear();

// Handle form submission (for demo purposes)
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your message, " + document.getElementById("name").value + "!");
});
