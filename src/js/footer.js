const footer = () => {
    const footerTitle = document.querySelectorAll('.footer__col-title');
    footerTitle.forEach(item => {
        item.addEventListener('click', () =>{
            item.classList.toggle('active');
            if(!item.nextElementSibling.classList.contains('active')){
                item.nextElementSibling.classList.add('active');
                item.nextElementSibling.style.height = 'auto';

                let height = item.nextElementSibling.clientHeight + 'px';
                item.nextElementSibling.style.height = '0px';

                setTimeout(() =>{
                    item.nextElementSibling.style.height = height;
                }, 0);
            }
            else{
                item.nextElementSibling.style.height = '0px';
                item.nextElementSibling.addEventListener('transitionend', ()  =>{
                    item.nextElementSibling.classList.remove('active');
                }, {
                    once: true
                });
            }
        });
    })
}
footer();