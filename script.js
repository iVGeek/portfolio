// Set the current year in the footer
document.getElementById("current-year").textContent = new Date().getFullYear();

// Optional: Handle form submission (for demonstration)
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your message, " + document.getElementById("name").value + "!");
});
