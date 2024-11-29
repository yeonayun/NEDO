document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".hashtags button");
    const images = document.querySelectorAll(".image-box");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");

            images.forEach(image => {
                const category = image.getAttribute("data-category");

                if (filter === "all" || category === filter) {
                    image.style.display = "block"; // 선택된 카테고리는 보이게
                } else {
                    image.style.display = "none"; // 나머지는 숨김
                }
            });
        });
    });
});
