
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
                { src: 'pic/ani6.jpg', alt: 'Image 1', title: '귀멸의 칼날: 합동 강화 훈련편' },
                { src: 'pic/daily/da1.jpg', alt: 'Image 2', title: '무직전쟁 2 ~ 이세계에 갔으면 최선을 다한다 ~' },
                { src: 'pic/daily/da2.jpg', alt: 'Image 3', title: '전생 귀족, 감정 스킬로 성공하다' },
                { src: 'pic/daily/da3.jpg', alt: 'Image 4', title: 'Lv2부터 치트였던 전직 용사후보의 유유자적 이세계 ...' },
                { src: 'pic/ani5.png', alt: 'Image 5', title: '최애의 아이' }
            ],
            wed: [
                { src: 'pic//ani15.jpg', alt: 'Image 1', title: '(자막) NANA -나나-' },
                { src: 'pic/daily/da4.jpg', alt: 'Image 2', title: '하나노이 군과 상사병' },
                { src: 'pic/themes/themes8.jpg', alt: 'Image 3', title: '도쿄 리벤져스' },
                { src: 'pic/themes/themes9.jpg', alt: 'Image 4', title: '러브 라이브! 1기' },
                { src: 'pic/themes/themes5.jpg', alt: 'Image 5', title: '스파이 패밀리' },
                { src: 'pic/themes/themes6.jpg', alt: 'Image 5', title: '천재 왕자의 적자국가 재생술' }
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

