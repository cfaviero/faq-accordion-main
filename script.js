const btnTitles = document.querySelectorAll('.btnTitles');

btnTitles.forEach(btn => {
    btn.addEventListener('click', () => {
        const plusIcon = "assets/images/icon-plus.svg"
        const minusIcon = "assets/images/icon-minus.svg"
        btn.classList.toggle('active');
        const imgIcon = btn.querySelector('.plusIcon');
        btn.classList.contains("active") ? imgIcon.src = minusIcon : imgIcon.src = plusIcon
        
    });
});