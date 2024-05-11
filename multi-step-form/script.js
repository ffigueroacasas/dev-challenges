document.addEventListener('DOMContentLoaded', () => {
  const checkboxes = []
  let name = 'nothing'
  let email = 'nothing'
  let interests = []

  checkboxes.push(document.getElementById('software-label'))
  checkboxes.push(document.getElementById('ux-label'))
  checkboxes.push(document.getElementById('design-label'))

  const submitOne = document.getElementById('submit-one')
  const submitTwo = document.getElementById('submit-two')
  const submitFinal = document.getElementById('submit-final')
  const message = document.getElementById('confirm-message')

  const nameInput = document.getElementById('name')
  const emailInput = document.getElementById('email')

  const nameBox = document.getElementById('name-box')
  const emailBox = document.getElementById('email-box')
  const topicsList = document.getElementById('topics-list')

  const stepOne = document.getElementById('first-container')
  const stepTwo = document.getElementById('second-container')
  const stepThree = document.getElementById('third-container')

  const ringOne = document.getElementById('ring-one')
  const ringTwo = document.getElementById('ring-two')
  const ringThree = document.getElementById('ring-three')

  const ballOne = document.getElementById('ball-one')
  const ballTwo = document.getElementById('ball-two')
  const ballThree = document.getElementById('ball-three')

  const steps = document.getElementById('steps-container')

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', () => {
      checkbox.classList.toggle('selected')
    })
  })

  submitOne.addEventListener('click', () => {
    event.preventDefault()
    name = nameInput.value
    email = emailInput.value
    console.log(name, email)
    stepOne.classList.toggle('invisible')
    stepTwo.classList.toggle('invisible')

    ballOne.classList.toggle('activated')
    ballOne.classList.toggle('deactivated')
    ringOne.classList.toggle('activated')
    ringOne.classList.toggle('deactivated')
    ballTwo.classList.toggle('deactivated')
    ballTwo.classList.toggle('activated')
    ringTwo.classList.toggle('deactivated')
    ringTwo.classList.toggle('activated')
    
    steps.children[0].innerHTML = 'Step 2 of 3'
  })

  submitTwo.addEventListener('click', () => {
    event.preventDefault()
    interests = []
    checkboxes.forEach(checkbox => {
      if (checkbox.classList.contains('selected')) {
        interests.push(checkbox.children[1].innerHTML)
      }
    })

    nameBox.innerHTML = name
    emailBox.innerHTML = email
    let li
    interests.forEach(interest => {
      li = document.createElement('li')
      li.innerHTML = interest
      topicsList.appendChild(li)
    })

    stepTwo.classList.toggle('invisible')
    stepThree.classList.toggle('invisible')

    ballTwo.classList.toggle('activated')
    ballTwo.classList.toggle('deactivated')
    ringTwo.classList.toggle('activated')
    ringTwo.classList.toggle('deactivated')
    ballThree.classList.toggle('deactivated')
    ballThree.classList.toggle('activated')
    ringThree.classList.toggle('deactivated')
    ringThree.classList.toggle('activated')

    steps.children[0].innerHTML = 'Step 2 of 3' 
  })

  submitFinal.addEventListener('click', () => {
    event.preventDefault()
    message.classList.toggle('invisible')
    setTimeout(() => {
      message.classList.toggle('invisible')
    }, 2500)  
  })
})