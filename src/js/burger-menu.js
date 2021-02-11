const burger = () =>{
    const burgerBtn = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    burgerBtn.addEventListener('click', e => {
        e.preventDefault();
        nav.classList.toggle('active');
        burgerBtn.classList.toggle('active');
    })
}
burger();