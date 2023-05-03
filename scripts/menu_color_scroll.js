    const options = {
        rootMargin: '0px',
        threshold: 0.55
    };

    function setActiveMenuItem(entries, observer) {
        entries.forEach((entry) => {
            if(entry.isIntersecting && entry.intersectionRatio >= 0.55) {
                document.querySelector('.navbar-nav .nav-item .active').classList.remove('active');
                const screenID = entry.target.getAttribute('id');
                const menuItem = document.querySelector(`.navbar-nav .nav-item [href$="${screenID}"]`);
                menuItem.classList.add('active');
            }
        });
    }

    const observer = new IntersectionObserver(setActiveMenuItem, options);

    const pages = document.querySelectorAll('.screen');
    pages.forEach((page) => {
        observer.observe(page);
    });
