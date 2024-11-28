// 햄버거 메뉴 클릭 시 네비게이션 링크 토글
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // active 클래스를 추가/제거하여 메뉴를 표시
});
