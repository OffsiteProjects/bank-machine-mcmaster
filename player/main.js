const videoElement = document.querySelector('video')
const scrubBar = document.querySelector('#scrub')
const playBar = document.querySelector('.played')
const bufferBar = document.querySelector('.buffer')

var playing = false
var transcripts = Array.from(document.querySelectorAll('.transcript .body span'))
var transcriptIndex = 0
function showNextTranscript () {
  if (playing) {
    if (!transcripts[transcriptIndex]) return
    transcripts[transcriptIndex].style.display = 'inline-block';
    setTimeout(showNextTranscript, 4000)
    transcriptIndex++
  }
}
function playORPause () {
  if (playing) {
    document.querySelector('.bigplay').style.display = ''
    document.querySelector('#playBtn').src = './desktoplandscape_files/desktop-landscape-triangle-1 1@2x.png'
    videoElement.pause()
  } else {
    document.querySelector('.bigplay').style.display = 'none'
    document.querySelector('#playBtn').src = './desktoplandscape_files/pause_67300.png'
    videoElement.play()
    setTimeout(showNextTranscript, 4000)
  }
  playing = !playing
}

document.querySelector('.bigplay').addEventListener('click', playORPause)
document.querySelector('#playBtn').addEventListener('click', playORPause)
document.querySelector('video').addEventListener('click', playORPause)

document.querySelector('#scrub').addEventListener('click', (e) => {
  const x = e.pageX - (scrubBar.getBoundingClientRect().left + window.pageXOffset)
  const time = (x / parseInt(window.getComputedStyle(scrubBar).getPropertyValue('width'))) * videoElement.duration
  
  playBar.style.width = x + 'px'
  videoElement.currentTime = time
})

var settingsDisplay = false
document.querySelector('#settingsBtn').addEventListener('click', () => {
  if (settingsDisplay) {
    document.querySelector('.settings').style.display = 'none'
  } else {
    document.querySelector('.settings').style.display = ''
  }
  settingsDisplay = !settingsDisplay
})

Array.from(document.querySelectorAll('.settings span')).forEach((span) => {
  span.addEventListener('click', () => {
    span.parentElement.querySelector('.active').className = ''
    span.className = 'active'
    if (span.parentElement.id === 'speed') {
      videoElement.playbackRate = parseFloat(span.innerHTML.slice(0, -1))
      document.querySelector('.speed').innerHTML = span.innerHTML
      if (span.innerHTML == '1x') {
        document.querySelector('.speed').style.display = 'none'
      } else {
        document.querySelector('.speed').style.display = ''
      }
    }
  })
})

document.querySelector('#fullscreenBtn').addEventListener('click', () => {
  videoElement.requestFullscreen()
})

var ccDisplayed = false
document.querySelector('#ccBtn').addEventListener('click', () => {
  const cc = document.querySelector('.fakeCaptions')
  if (ccDisplayed) {
    cc.style.display = 'none'
  } else {
    cc.style.display = ''
  }
  ccDisplayed = !ccDisplayed
})

var volumeDisplayed = false
document.querySelector('#speakerBtn').addEventListener('click', () => {
  const volumeBar = document.querySelector('.volumebar')
  if (volumeDisplayed) {
    volumeBar.style.display = 'none'
  } else {
    volumeBar.style.display = ''
  }
  volumeDisplayed = !volumeDisplayed
})

Array.from(document.querySelectorAll('.scrollbar .handle')).forEach((handle) => {
  let dragging = false
  let scrollbar = handle.parentElement
  let scrollHeight = parseInt(window.getComputedStyle(scrollbar).getPropertyValue('height'))

  handle.addEventListener('mousedown', () => {
    dragging = true
  })
  window.addEventListener('mouseup', () => {
    dragging = false
  })
  function updateScroll (e) {
    const y = e.pageY - (scrollbar.getBoundingClientRect().top + window.pageYOffset)
    handle.style.top = Math.max(0, Math.min(y, scrollHeight - 14)) + 'px'

    if (scrollbar.id === 'volume') {
      const volume = 1 - (y / parseInt(window.getComputedStyle(scrollbar).getPropertyValue('height')))
      videoElement.volume = volume
    }
  }
  window.addEventListener('mousemove', (e) => {
    if (dragging) {
      updateScroll(e)
    }
  })
  scrollbar.addEventListener('click', (e) => {
    updateScroll(e)
  })
})

setInterval(() => {
  const curWidth = parseInt(bufferBar.style.width || 0)
  if (curWidth > 600) return
  bufferBar.style.width = (curWidth + 30) + 'px'
}, 200)