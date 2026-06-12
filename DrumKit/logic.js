document.addEventListener('keydown', function(event){
  const audio = document.querySelector(`audio[data-key = "${event.keyCode}"]`)
  const key = document.querySelector(`.key[data-key = "${event.keyCode}"]`)

  if(audio){
    key.classList.add('playing')
    audio.currentTime = 0
    audio.play()
    setTimeout(() =>{
      key.classList.remove('playing')
    },100)
  }
})

