document.addEventListener("DOMContentLoaded", function() {
    var days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    var today = new Date();
    var dayIndex = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    var dayElement = document.getElementById(days[dayIndex]);

    console.log("오늘 요일 인덱스:", dayIndex);
    console.log("선택된 요일 요소:", dayElement);

    if (dayElement) {
        dayElement.classList.add("active-day");
    } else {
        console.error("오늘의 요일에 해당하는 요소를 찾을 수 없습니다.");
    }
});