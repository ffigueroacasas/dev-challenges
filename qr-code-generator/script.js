document.addEventListener('DOMContentLoaded', () => {
  // const code = new QRCode(document.getElementById('qr-container'), "http://google.com")
  
  const qrContainer = document.getElementById('qr-container')
  const input = document.getElementById('url-input')
  const submit = document.getElementById('qr-btn')
  const form = document.getElementById('form-div')
  const display = document.getElementById('display-div')
  const download = document.getElementById('download-btn')
  const share = document.getElementById('share-btn')

  submit.addEventListener('click', () => {
    event.preventDefault()
    let url = input.value
    if (url === ''){
      window.alert('Ingrese un URL')
    }
    else {
      form.classList.add('invisible')
      display.classList.remove('invisible')
      let code = new QRCode(qrContainer, url)
    }
  })

  share.addEventListener('click', async () => {
    const imageSource = document.querySelector('#qr-container > img').src
    const image = await fetch(imageSource)
    const blob = await image.blob()
    await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob})])
  })

  download.addEventListener('click', () => {
    var canvas = document.querySelector("#qr-container > canvas")
    var image = canvas.toDataURL()
    var aDownloadLink = document.createElement('a')
    aDownloadLink.download = 'canvas_image.png'
    aDownloadLink.href = image
    aDownloadLink.click()
  })
})