// Intersection Observer
document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  const elements = document.querySelectorAll('.fade-in-up')
  elements.forEach((el) => observer.observe(el))
})
