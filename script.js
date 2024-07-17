// Add any JavaScript if needed for additional functionality or animations.
document.addEventListener('DOMContentLoaded', () => {
  // Example of a subtle animation on scroll
  const elements = document.querySelectorAll('.service')

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in')
      }
    })
  })

  elements.forEach((el) => observer.observe(el))
})
