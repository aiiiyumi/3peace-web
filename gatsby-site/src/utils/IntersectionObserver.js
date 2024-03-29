export const handleObserver = (targets) => {

  targets.current.forEach(target => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        }
      })
    })
    observer.observe(target)
  })

}

