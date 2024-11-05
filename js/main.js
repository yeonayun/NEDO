document.addEventListener('scroll', () => {
    const boxes = document.querySelectorAll('.box');
    const triggerBottom = window.innerHeight / 5 * 4; // 박스가 보일 위치 조정

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top; // 박스의 위치

        if (boxTop < triggerBottom) {
            box.classList.add('visible'); // 박스가 보일 때 클래스 추가
        } else {
            box.classList.remove('visible'); // 스크롤하면 클래스 제거
        }
    });
});
