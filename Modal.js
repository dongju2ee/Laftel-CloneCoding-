// 첫 번째 모달 열기
var modal = document.getElementById('uploadModal');
var btn = document.getElementById("uploadNoticeBtn");
var span = modal.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// 두 번째 모달 열기
var modal2 = document.getElementById('searchModal');
var btn2 = document.getElementById("uploadNoticeBtn2");

btn2.onclick = function() {
    modal2.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}
