document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const frameImages = document.querySelectorAll(".frame_select img");

    frameImages.forEach((img) => {
        img.addEventListener("click", () => {
            modal.style.display = "Flex";
            document.body.style.overflow = "hidden";
        });
    });

    modal.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    })

    const modalBox = document.querySelector(".modal_content");
    modalBox.addEventListener("click", event => {
        event.stopPropagation();
    });
});