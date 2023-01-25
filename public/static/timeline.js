const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('hidden_item')
        }
    })
}, {
    rootMargin: '0px',
    threshold: .9,
})
// const observerRight = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.remove('hidden_item_right')
//         }
//     })
// }, {
//     rootMargin: '0px',
//     threshold: .1,
// })

const hiddenElements = document.querySelectorAll('.hidden_item')
// const hiddenElementsRight = document.querySelectorAll('.hidden_item_right')
hiddenElements.forEach((elem) => observer.observe(elem))
// hiddenElementsRight.forEach((elem) => observerRight.observe(elem))
