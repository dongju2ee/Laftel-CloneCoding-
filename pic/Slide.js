const figures = document.querySelector('.day-anime figure');
if (figures.length > 5) {
    for (let i=5; i<figures.length; i++) {
        figures[i].style.display = 'none'
    }
}
