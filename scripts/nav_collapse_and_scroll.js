(() => {
    // При ширине экрана менее 768 меню хедера превращается в сэндвич
    // Из коробки bootstrap разворачивает и сворачивает меню только при нажатии на сэндвич
    // Эта функция заставляет меню сворачиваться также при нажатии на пункт меню навигации
    // и корректирует скрол с учётом высоты header
    const navEl = document.querySelector('.navbar-nav');
    if (window.innerWidth < 768) {
        navEl.addEventListener('click', collapseNav, false);
    }
    window.addEventListener("resize", function () {
        if (window.innerWidth < 768) {
            navEl.removeEventListener('click', collapseNav, false);
            navEl.addEventListener('click', collapseNav, false);
        } else {
            navEl.removeEventListener('click', collapseNav, false);
        }

    }, false);

    function collapseNav(event) {
        if (event.target !== event.currentTarget) {
            event.preventDefault();

            const collapseElementList = document.querySelectorAll('.navbar-collapse');
            const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl));

            const headerEl = document.querySelector('.header');

            const scroolID = event.target.getAttribute('href').slice(1);
            const scrollEl = document.getElementById(scroolID);
            window.scrollTo(0, scrollEl.offsetTop - headerEl.offsetHeight);
        }
        event.stopPropagation();
    }
})()
