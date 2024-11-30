const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');  // active 클래스를 추가/제거하여 메뉴를 표시
});

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

    setTimeout(function () {
        document.getElementById("popup1").style.display = "flex";
    }, 3000);
}

// document.querySelector('.qr').addEventListener('click', function () {
//     // 클릭한 이미지에 대해 QR 코드 입력 창을 띄움
//     document.getElementById('qr-input-container').style.display = 'block';
// });

// function generateQRCode() {
//     const qrText = document.getElementById('qr-input').value;

//     if (qrText.trim() === "") {
//         alert("Please enter some text for the QR code.");
//         return;
//     }

//     // QR 코드 생성 (여기서 생성된 QR 코드는 canvas에 그려짐)
//     QRCode.toCanvas(document.getElementById('qr-code-canvas'), qrText, function (error) {
//         if (error) {
//             console.error(error);
//         } else {
//             console.log("QR code generated successfully!");
//         }
//     });
// }

// function generateQRCode() {
//     const qrText = document.getElementById('qr-input').value;

//     if (qrText.trim() === "") {
//         alert("Please enter some text for the QR code.");
//         return;
//     }

//     // QR 코드 생성 후 이미지로 바꾸기
//     QRCode.toDataURL(qrText, function (error, url) {
//         if (error) {
//             console.error(error);
//         } else {
//             // 생성된 QR 코드를 기존의 이미지에 표시
//             document.querySelector('.qr').src = url;
//             console.log("QR code generated and image updated.");
//         }
//     });
// }

document.querySelector('.qr').addEventListener('click', function () {
    document.getElementById('qr-image-upload').click(); // 파일 입력창 클릭
});

document.getElementById('qr-image-upload').addEventListener('change', function (event) {
    const file = event.target.files[0];  // 사용자가 선택한 파일
    if (file) {
        const reader = new FileReader();

        // 파일이 로드되었을 때 처리
        reader.onload = function (e) {
            const imgElement = document.querySelector('.qr');
            imgElement.src = e.target.result;  // 선택한 이미지를 img 태그에 설정
        };

        // 선택한 파일을 읽기
        reader.readAsDataURL(file);
    }
});



function closePopup() {
    // 팝업을 닫는 함수 (아니오를 클릭했을 때)
    document.getElementById("popup1").style.display = "none";
}
function registerTool() {
    // 네를 클릭했을 때 공구 등록 완료 팝업을 띄움
    document.getElementById("popup1").style.display = "none"; // 첫 번째 팝업 닫기
    document.getElementById("popup2").style.display = "flex"; // 두 번째 팝업 띄우기

    // 2초 후 mypage.html로 이동
    setTimeout(function () {
        window.location.href = "mypage.html";
    }, 2000);
}

function closePopup2() {
    // 두 번째 팝업을 닫는 함수
    document.getElementById("popup2").style.display = "none";
}