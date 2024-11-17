function moveReceipt() {
    const receipt1 = document.querySelector('.receipt1');
    
    // 이미지가 보이지 않도록 숨기기
    receipt1.style.display = 'block';  // 이미지 보이게 하기
    
    // 애니메이션 시작
    setTimeout(() => {
        receipt1.style.display = 'block';  // 이미지 보이게 하기
        receipt1.style.bottom = '-105px';    // 이미지를 더 아래로 이동 (조정된 값)
        receipt1.style.left = '67%';       // 이미지를 화면의 가운데에서 약간 오른쪽으로 이동 (조정할 값)
        receipt1.style.transform = 'translateX(-50%) translateY(-100px)'; // Y축으로 더 아래로 (조정된 값)
    }, 10); // 최소한의 딜레이를 주어 이미지가 처음부터 보이게 설정
}
