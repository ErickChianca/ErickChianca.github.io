const switchBtn = document.querySelectorAll('.switch-content-btn')

const portugueseText = document.querySelector('.about-me-portuguese-text')
const englishText = document.querySelector('.about-me-english-text')

const webGrid = document.querySelector('.web-projects-grid')
const mobileGrid = document.querySelector('.mobile-projects-grid')

switchBtn.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('portuguese-btn')) {
      portugueseText.classList.remove('disabled')
      englishText.classList.add('disabled')
    } else if (button.classList.contains('english-btn')) {
      englishText.classList.remove('disabled')
      portugueseText.classList.add('disabled')
    } else if (button.classList.contains('mobile-btn')) {
      mobileGrid.classList.remove('disabled')
      webGrid.classList.add('disabled')
    } else {
      webGrid.classList.remove('disabled')
      mobileGrid.classList.add('disabled')
    }
})
})
