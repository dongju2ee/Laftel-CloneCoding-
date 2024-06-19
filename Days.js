
    $(document).ready(function() {
        // 요일별 이미지 콘텐츠
        const imagesContent = {
            mon: [
                { src: 'pic/ani10.jpg', alt: 'Image 1', title: '블루 아카이브' },
                { src: 'pic/ani11.jpg', alt: 'Image 2', title: '울려라! 유포니엄 3기' },
                { src: 'pic/ani12.jpg', alt: 'Image 3', title: '요자쿠라 일가의 대작전' },
                { src: 'pic/ani13.jpg', alt: 'Image 4', title: '사신 도렴님과 검은 메이드' }
            ],
            tue: [
                { src: 'pic/ani14.jpg', alt: 'Image 1', title: '귀멸의 칼날: 합동 강화 훈련편' },
                { src: 'pic/ani14.jpg', alt: 'Image 2', title: '전생 귀족, 감정 스킬로 성공하다' },
                { src: 'pic/ani14.jpg', alt: 'Image 3', title: '달이 이끄는 이세계 여행 제2막' },
                { src: 'pic/ani14.jpg', alt: 'Image 4', title: '바텐더 신의 글라스' },
                { src: 'pic/ani14.jpg', alt: 'Image 5', title: '무직전생 ~이세계에 갔으면 최선을 다한다~' }
            ],
            wed: [
                { src: 'pic/conan/conan1.jpg', alt: 'Image 1', title: '(자막) NANA -나나-' },
                { src: 'pic/conan/conan2.jpg', alt: 'Image 2', title: '하나노이 군과 상사병' },
                { src: 'pic/conan/conan3.jpg', alt: 'Image 3', title: '우에키의 법칙(배틀짱)' },
                { src: 'pic/conan/conan4.jpg', alt: 'Image 4', title: '할아버지 할머니 회춘하다' },
                { src: 'pic/conan/conan5.jpg', alt: 'Image 5', title: '신은 유희에 굶주려있다.' },
                { src: 'pic/conan/conan5.jpg', alt: 'Image 5', title: '코드네임 X.' }
            ],
            thu: [


            ],
            fri: [

            ],
            sat: [

            ],
            sun: [
                
            ]    
        };

        function updateImages(day) {
            const imageContainer = $('#image-container');
            imageContainer.empty(); // 기존 이미지를 제거

            imagesContent[day].forEach(item => {
                const imgElement = `
                    <div class="image-item">
                        <img src="${item.src}" alt="${item.alt}">
                        <div>${item.title}</div>
                    </div>`;
                imageContainer.append(imgElement); // 새로운 이미지 추가
            });
        }
        function updateButtonColor(selectedDay) {
            $('.day button').css('background-color', ''); // 모든 버튼 색상 초기화
            $(`#${selectedDay}`).css('background-color', 'mediumpurple'); // 선택된 버튼 색상 변경
        }
        updateImages('mon');
        updateButtonColor('mon');

        // 버튼 클릭 이벤트 설정
        $('#mon').click(function() {
            updateImages('mon');
            updateButtonColor('mon');
        });
        $('#tue').click(function() {
            updateImages('tue');
            updateButtonColor('tue');
        });
        $('#wed').click(function() {
            updateImages('wed');
            updateButtonColor('wed');
        });
        $('#thu').click(function() {
            updateImages('thu');
            updateButtonColor('thu');
        });
        $('#fri').click(function() {
            updateImages('fri');
            updateButtonColor('fri');
        });
        $('#sat').click(function() {
            updateImages('sat');
            updateButtonColor('sat');
        });
        $('#sun').click(function() {
            updateImages('sun');
            updateButtonColor('sun');
        });
    });

