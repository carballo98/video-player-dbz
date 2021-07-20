const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')


$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)

function handlePlay() {
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    console.log('le diste click al botón de play')
}

function handlePause() {
    $video.pause()
    $pause.hidden = true
    $play.hidden = false
    console.log('le diste click al botón de pause')
}

$backward.addEventListener('click', handlebackward)

$forward.addEventListener('click', handleforward)

function handlebackward() {
    $video.currentTime -= 10
    console.log('atrás 10 segundos', $video.currentTime)
}
function handleforward() {
    $video.currentTime += 10
    console.log('adelante 10 segundos', $video.currentTime)
}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoader)
$video.addEventListener('timeupdate', handleTimeUpdate)

function handleLoader() {
    $progress.max = $video.duration
console.log("ha cargado el video", $video.duration)
}
function handleTimeUpdate () {
    $progress.value = $video.currentTime
}

$progress.addEventListener('input', handleInput)

function handleInput() {
    $video.currentTime = $progress.value
    console.log($progress.value)
}