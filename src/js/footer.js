const footer = () => {
    const footerTitle = document.querySelectorAll('.footer__col-title');
    const footerColtems = document.querySelectorAll('.footer__col-items');
    footerTitle.forEach(item => {
        item.addEventListener('click', () =>{
            // footerColtems.forEach(i =>{
            //     i.classList.remove('active');
            // })
            item.classList.toggle('active');
            item.closest('.footer__col').querySelector('.footer__col-items').classList.toggle('active');
        });
    })
}
footer();