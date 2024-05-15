const getQuote = async () => {
  let response = await fetch('https://api.quotable.io/quotes/random')
  let parsedResponse = await response.json()
  return parsedResponse[0]
}

document.addEventListener('DOMContentLoaded', async  () => { 
  let text = document.getElementById('text-container')
  let author = document.getElementById('author-container')
  let tags = document.getElementById('tags-container')
  let random = document.getElementById('random-btn')
  let copy = document.getElementById('copy-btn')

  const setQuote = async () => {
    let quote = await getQuote()

    // add the quote content
    let q = document.createElement('p')
    q.innerText = quote.content
    q.id = 'quote-txt'
    text.replaceChildren()
    text.appendChild(q)
    
    // add the author
    let a = document.createElement('p')
    a.innerText = quote.author
    author.replaceChildren()
    author.appendChild(a)
    
    // add tags
    tags.replaceChildren()
    quote.tags.forEach(tag => {
      let t = document.createElement('p')
      t.innerHTML = tag
      tags.append(t)
    })
  }

  await setQuote()

  random.addEventListener('click', setQuote)
  copy.addEventListener('click', () => {
    let textToCopy = document.getElementById('quote-txt')
    navigator.clipboard.writeText(textToCopy.textContent)
  })
})