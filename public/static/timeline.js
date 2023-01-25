if (typeof observer !== 'undefined') {

} else {
    let observer;
    let hiddenElements;
    observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('hidden_item')
            }
        })
    }, {
        rootMargin: '0px',
    })
    hiddenElements = document.querySelectorAll('.hidden_item')
    hiddenElements.forEach((elem) => observer.observe(elem))
}

