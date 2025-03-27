document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".toggle-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const content = this.parentElement.nextElementSibling;
            content.classList.toggle("active");

            if (content.classList.contains("active")) {
                this.textContent = "Show Less";
            } else {
                this.textContent = "Show More";
            }
        });
    });
});