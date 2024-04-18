const handleToggleBtn = () => {
  const toggleBtn = document.getElementById("toggle-container")
  const logo = document.getElementById("logo")
  const h1 = document.querySelector('h1')
  const slogan = document.getElementById('slogan')
  const aboutLink = document.getElementById('about-link')
  console.log(aboutLink)
  if (document.body.classList.contains('light-theme')){
    document.body.classList.remove('light-theme')
    document.body.classList.add('dark-theme')
    toggleBtn.classList.remove('dark-button')
    toggleBtn.classList.add('light-button')
    h1.classList.remove('light-theme')
    h1.classList.add('dark-theme')
    slogan.classList.remove('light-theme')
    slogan.classList.add('dark-theme')
    aboutLink.classList.remove('light-theme')
    aboutLink.classList.add('dark-theme')
  }
  else if (document.body.classList.contains('dark-theme')) {
    document.body.classList.remove('dark-theme')
    document.body.classList.add('light-theme')
    toggleBtn.classList.remove('light-button')
    toggleBtn.classList.add('dark-button')
    h1.classList.remove('dark-theme')
    h1.classList.add('light-theme')
    slogan.classList.remove('dark-theme')
    slogan.classList.add('light-theme')
    aboutLink.classList.remove('dark-theme')
    aboutLink.classList.add('light-theme')
  }
}