function animatedForm() {
    const arrows = document.querySelectorAll(".fa-arrow-down");
    arrows.forEach(arrow=> {
        arrow.addEventListener("click", () => {
            const parent = arrow.parentElement;
            const input = arrow.previousElementSibling;
            const nextForm = arrow.nextElementSibling;
        });
    });
} 

function validateUser(user) {

}

animatedForm();