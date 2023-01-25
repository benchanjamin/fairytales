const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('hidden_item')
        }
    })
}, {
    rootMargin: '0px',
    threshold: .1,
})

const hiddenElements = document.querySelectorAll('.hidden_item')
hiddenElements.forEach((elem) => observer.observe(elem))
