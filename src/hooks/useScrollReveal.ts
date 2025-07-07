import { useEffect } from 'react'

export const useScrollReveal = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.05,
      rootMargin: '0px 0px -20px 0px'
    }

    // Counter animation function
    const animateCounter = (element: HTMLElement, target: number) => {
      const duration = 2000 // 2 seconds
      const increment = target / (duration / 16) // 60fps
      let current = 0
      
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        
        // Format number with + for 300+ and 50+
        if (target === 300) {
          element.textContent = Math.floor(current) + '+'
        } else if (target === 50) {
          element.textContent = Math.floor(current) + '+'
        } else {
          element.textContent = Math.floor(current).toString()
        }
      }, 16)
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement
          
          // Remove the reveal-hidden class and trigger animation
          element.classList.remove('reveal-hidden')
          
          // Only add fade-in-up animation for simplicity
          element.classList.add('animate-fade-in-up')
          
          // Check if this is a counter element
          if (element.classList.contains('counter')) {
            const target = parseInt(element.dataset.target || '0')
            // Start counter with minimal delay
            setTimeout(() => {
              animateCounter(element, target)
            }, 300) // Small delay after reveal
          }
          
          observer.unobserve(element)
        }
      })
    }, observerOptions)

    // Observe all elements with reveal-hidden class
    const revealElements = document.querySelectorAll('.reveal-hidden')
    revealElements.forEach((el) => observer.observe(el))
    
    // Also observe counter elements specifically
    const counterElements = document.querySelectorAll('.counter')
    counterElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}