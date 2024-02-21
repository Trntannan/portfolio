function toggleContactForm() {
    var formContainer = document.getElementById("contact-form");
    var isVisible = formContainer.style.display === "flex";

    if (isVisible) {
        formContainer.style.display = "none";
    } else {
        formContainer.style.display = "flex";
    }
}
