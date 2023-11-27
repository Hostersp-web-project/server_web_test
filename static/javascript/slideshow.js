var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    // 모든 슬라이드를 숨김, 안숨기면 중복되서 그림이 나타남.
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    // 슬라이드 인덱스가 슬라이드의 개수를 초과하면 1로 설정
    if (slideIndex > slides.length) { slideIndex = 1 }

    // 현재 슬라이드를 보이게함.
    slides[slideIndex - 1].style.display = "block";

    // 슬라이드가 움직이면서 버튼도 활성화 시키는 부분
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // 모든 도트 비활성화
    dots[slideIndex - 1].className += " active";

    // 현재 도트 활성화
    setTimeout(showSlides, 2000); // 2초마다 실행
}

// 슬라이드 도트를 클릭했을 때 해당 슬라이드로 이동
function currentSlide(n) {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    // 슬라이드 번호가 슬라이드의 개수를 초과하면 1로 설정.
    if (n > slides.length) { n = 1 }

    // 슬라이드 번호가 1보다 작으면 슬라이드의 개수로 설정.
    else if (n < 1) { n = slides.length }

    // 모든 슬라이드를 숨깁
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[n-1].style.display = "block";
    dots[n-1].className += " active";

}

//메뉴바 버튼 클릭 후 제어하는 부분.

// 전역 변수를 사용하여 클릭된 이미지의 참조를 저장.
var clickedImage = null;

function yourFunction(clickedButton) {
    // 현재 클릭된 버튼의 부모 요소를 가져옴.
    var parentContainer = clickedButton.parentElement;

    // 부모 요소 내의 모든 .tshirt-image-btn 버튼을 선택.
    var allButtons = parentContainer.getElementsByClassName("tshirt-image-btn");

    // 클릭된 이미지의 참조를 전역 변수에 저장.
    clickedImage = clickedButton.children[0];

}

// 현재 표시되는 컨텐츠 ID를 저장하는 전역 변수
var currentContent = 'main-content';

function displayContent(contentId) {
    var contents = document.getElementsByClassName('content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';  // 모든 컨텐츠를 숨깁
    }
    document.getElementById(contentId).style.display = 'block'; // 선택한 컨텐츠를 보이게함

    currentContent = contentId; // 현재 컨텐츠 ID 저장
}