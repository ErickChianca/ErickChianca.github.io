const switchBtn = document.querySelectorAll('.switch-content-btn')

const portugueseText = document.querySelector('.about-me-portuguese-text')
const englishText = document.querySelector('.about-me-english-text')

const webGrid = document.querySelector('.web-projects-grid')
const mobileGrid = document.querySelector('.mobile-projects-grid')

switchBtn.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('portuguese-btn')) {
      portugueseText.classList.remove('is-hidden')
      englishText.classList.add('is-hidden')
    } else if (button.classList.contains('english-btn')) {
      englishText.classList.remove('is-hidden')
      portugueseText.classList.add('is-hidden')
    } else if (button.classList.contains('mobile-btn')) {
      mobileGrid.classList.remove('is-hidden')
      webGrid.classList.add('is-hidden')
    } else {
      webGrid.classList.remove('is-hidden')
      mobileGrid.classList.add('is-hidden') 
    }
})
})
