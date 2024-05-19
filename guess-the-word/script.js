  const words = ['crimes', 'styles', 'sprint', 'people', 'stuffs', 'tomato' ]
  const guess = new Array(6)
  let tries = 0

  const setNewWord = (previous) => {
    if (previous) {
      return words.filter(word => word !== previous)[Math.floor(Math.random() * (words.length - 1))]
    }
    return words[Math.floor(Math.random() * words.length)]
  }

  const scrambleWord = (word) => {
    array = Array.from(word); 
    for (let i = 0; i < array.length - 1; ++i) { 
        let j = Math.floor(Math.random() * array.length); 
        let temp = array[i]; 
        array[i] = array[j]; 
        array[j] = temp; 
    } 
    return array.join(" ");
  }

  document.addEventListener('DOMContentLoaded', () => {
    //getting elements from DOM
    const random = document.getElementById('random-btn')
    const reset = document.getElementById('reset-btn')
    const scrambledText = document.getElementById('scrambled-text')
    const inputs = document.querySelectorAll('.letter-input')
    const mistakes = document.getElementById('mistakes')
    const bubbles = document.querySelectorAll('.bubble')
    const triesText = document.getElementById('tries')
    const mistakesText = document.getElementById('mistakes')
    
    //initial load
    let word = setNewWord()
    let scrambledWord = scrambleWord(word)
    scrambledText.textContent = scrambleWord(word)

    //event listeners
    random.addEventListener('click', () => {
      word = setNewWord(word)
      scrambledText.textContent = scrambleWord(word)
    })

    reset.addEventListener('click', () => resetGame())

    const checkLetter = (letter, key) => {
      if (letter.length == 0){
        return 
      }
      if (letter !== word[key] && !word.includes(letter)){
        addMistake(letter)
        tries++
      }
      else if (letter === word[key]) {
        inputs[key].disabled = true
      }
    }

    const updateTries = (tries = 0) => {
      if (tries === 0){
        bubbles.forEach(bubble => {
          bubble.classList.remove('active')
        })
        triesText.textContent = `Tries (0/5):`
        mistakesText.textContent = 'Mistakes: '
      }
      else {
        for (let i = 0; i < tries; i++) {
          if (!bubbles[i].classList.contains('active')){
            bubbles[i].classList.add('active')
          }
        }
        triesText.textContent = `Tries (${tries}/5):`
      }
    }

    const addMistake = (letter) => {
      if (!mistakes.textContent.slice(10).includes(letter)){
      mistakes.textContent = mistakes.textContent + ` ${letter},`
      }
    }

    const resetGame = () => {
      tries = 0
      updateTries(tries)
      word = setNewWord(word)
      scrambledText.textContent = scrambleWord(word)
      inputs.forEach(input => {
        input.value = null
        input.disabled = false
      })
    }

    const isWon = () => {
      const values = Array.from(inputs).map(input => input.value);
      return values.every((value, index) => value === word[index]);
    }

    inputs.forEach((input, key) => {
      input.addEventListener('input', () => {
        guess[key] = event.target.value
        if (event.target.value.length === 1 && key < inputs.length - 1) {
          inputs[key + 1].focus()
        }
        checkLetter(event.target.value, key)
        if (isWon()){
          window.alert('you won the game!!')
          resetGame()
          return
        }
        updateTries(tries)
        if (tries === 5) {
          window.alert('you lost the game loser')
          resetGame()
        }
      })
    })

  })