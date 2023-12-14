const container = document.querySelectorAll('.container');

container.forEach(function (elemenet) {
    elemenet.addEventListener("click", function () {
        this.classList.toggle("active");
    });
});