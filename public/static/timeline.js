const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('hidden_item')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden_item')
hiddenElements.forEach((elem) => observer.observe(elem))
