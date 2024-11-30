document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const frameImages = document.querySelectorAll(".frame_select img");

    frameImages.forEach((img) => {
        img.addEventListener("click", () => {
            modal.style.display = "flex";
            document.body.style.overflow = "hidden";
        });
    });

    modal.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    });

    const modalBox = document.querySelector(".modal_content");
    modalBox.addEventListener("click", event => {
        event.stopPropagation();
    });

    document.getElementById("hashtag_input").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // 기본 Enter 키 동작 방지 (폼 제출 방지 등)

            let inputValue = this.value.trim();

            // 입력값이 비어 있지 않으면
            if (inputValue) {
                // 텍스트 앞에 # 추가
                let hashtag = "#" + inputValue;

                // 해시태그를 추가할 div 요소 생성
                let hashtagElement = document.createElement("span");
                hashtagElement.classList.add("hashtag");
                hashtagElement.textContent = hashtag;

                // 해시태그를 #hashtag_list에 추가
                document.getElementById("hashtag_list").appendChild(hashtagElement);

                // 입력 필드 초기화
                this.value = "";
            }
        }
    });


    document.getElementById("hashtag_input").addEventListener("input", function () {
        let inputValue = this.value;

        // 입력값이 #으로 시작하지 않으면 #을 추가
        if (!inputValue.startsWith("#")) {
            this.value = "#" + inputValue;
        }
    });

    // 프레임 선택 감지
    document.querySelectorAll('.frame_select img').forEach(frame => {
        frame.addEventListener('click', function () {
            const selectedFrame = this.alt;

            // custom_card의 클래스를 변경
            const customCard = document.getElementById('custom_card');
            const imageUploadText = document.getElementById('image_upload_text');

            // 기존 클래스 제거
            customCard.classList.remove('white-frame', 'full-frame', 'small-frame');

            // 선택한 프레임에 해당하는 클래스 추가
            if (selectedFrame === 'white frame') {
                customCard.classList.add('white-frame');
            } else if (selectedFrame === 'full image') {
                customCard.classList.add('full-frame');
            } else if (selectedFrame === 'small image') {
                customCard.classList.add('small-frame');
            }

            // 선택한 프레임에 맞는 이미지 업로드 부분 표시/숨기기
            updateImageUploadSection(selectedFrame);
        });
    });

    // 이미지 업로드 텍스트 클릭 시 파일 업로드
    document.getElementById('image_upload_text').addEventListener('click', function () {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.click();

        input.addEventListener('change', function () {
            const file = input.files[0];
            if (file) {
                // 파일 업로드 처리
                console.log('파일이 업로드되었습니다:', file.name);
                const customCardImg = document.getElementById('custom_card_img');
                customCardImg.src = URL.createObjectURL(file);  // 업로드된 이미지 표시
            }
        });
    });

    function updateImageUploadSection(frame) {
        const uploadText = document.getElementById('image_upload_text');
        if (frame === 'full image') {
            uploadText.style.display = 'block'; // 업로드 텍스트 표시
        } else {
            uploadText.style.display = 'block'; // 업로드 텍스트 표시 (white와 small image는 동일)
        }
    }

    // 날짜 선택 시 처리
    flatpickr("#start_calendar", {
        enableTime: false,
        dateFormat: "Y-m-d",
        onChange: function (selectedDates, dateStr) {
            document.getElementById('start_calendar').innerHTML = `<img src="/image/CalendarCheck.png" alt=""> ${dateStr} 부터`;
        }
    });

    flatpickr("#last_calendar", {
        enableTime: false,
        dateFormat: "Y-m-d",
        onChange: function (selectedDates, dateStr) {
            document.getElementById('last_calendar').innerHTML = `<img src="/image/CalendarCheck.png" alt=""> ${dateStr} 까지`;
        }
    });

    document.getElementById("item_name").addEventListener("click", function () {
        // 현재 텍스트를 가져와서 input 필드에 넣기
        const currentText = this.innerHTML.replace('<br>', '\n');

        // div를 input으로 교체
        const input = document.createElement("input");
        input.type = "text";
        input.value = currentText;
        input.style.width = "100%";
        input.style.border = "none";
        input.style.fontSize = "20px";

        // 기존 div를 input으로 교체
        this.innerHTML = "";
        this.appendChild(input);

        // input 필드에서 blur (포커스를 잃었을 때) 이벤트 처리
        input.addEventListener("blur", function () {
            // input 값을 div로 다시 교체
            const updatedText = input.value.replace(/\n/g, '<br>');  // 줄바꿈 처리
            document.getElementById("item_name").innerHTML = updatedText;
        });

        // input 필드에 포커스를 맞춘다.
        input.focus();
    });

    // 날짜 비교 및 팝업 처리
    document.getElementById('last_calendar').addEventListener('change', handleLastCalendarChange);

    // select 메뉴 변경 시 처리
    const select = document.getElementById('category_select');
    const newCategoryInput = document.getElementById('new_category_input');
    select.addEventListener('change', handleCategoryChange);

    function handleSelectChange(select) {
        if (select.value === "custom") {
            document.getElementById("new_option").style.display = "inline-block";
            document.getElementById("add_option_button").style.display = "inline-block";
            select.value = ""; // Reset select to nothing after choosing '+'
        } else {
            document.getElementById("new_option").style.display = "none";
            document.getElementById("add_option_button").style.display = "none";
        }
    }

    function handleCategoryChange() {
        const select = document.getElementById('category_select');
        const newCategoryInput = document.getElementById('new_category_input');

        if (select.value === "add_new") {
            newCategoryInput.style.display = "block"; // 입력 필드 보이기
        } else {
            newCategoryInput.style.display = "none"; // 입력 필드 숨기기
        }
    }

    function addNewCategory() {
        const select = document.getElementById('category_select');
        const newCategory = document.getElementById('new_category').value.trim();

        if (newCategory !== "") {
            const newOption = document.createElement('option');
            newOption.value = newCategory.toLowerCase().replace(/\s+/g, '_');
            newOption.textContent = newCategory;

            select.insertBefore(newOption, select.lastElementChild);

            select.value = newOption.value;

            document.getElementById('new_category').value = "";
            document.getElementById('new_category_input').style.display = "none";
            select.style.display = "block";
        }
    }
});

// 날짜를 선택한 후 호출되는 함수
function handleLastCalendarChange() {
    const startDate = document.getElementById('start_calendar').dataset.date;
    const endDate = document.getElementById('last_calendar').dataset.date;

    if (startDate && endDate) {
        if (new Date(startDate) > new Date(endDate)) {
            showPopup("시작 날짜는 종료 날짜보다 이전이어야 합니다.");
        } else {
            closePopup();
        }
    }
}

// 팝업을 띄우는 함수
function showPopup(message) {
    const popup = document.getElementById('errorPopup');
    popup.style.display = 'flex'; // 팝업을 화면에 띄운다
    popup.querySelector('p').textContent = message; // 메시지 업데이트
}

// 팝업을 닫는 함수
function closePopup() {
    const popup = document.getElementById('errorPopup');
    popup.style.display = 'none'; // 팝업을 숨긴다
}
