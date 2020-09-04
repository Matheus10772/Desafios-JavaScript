
let videoControl = document.getElementsByClassName('videoControl')
let videoR = document.getElementById('meuprimeirovideo')
let ProgressBar = document.getElementsByClassName('progresso')[0].children[0]

videoControl[0].addEventListener('click', (evento)=>{
    evento.preventDefault()
    PlayPause(videoControl[0],videoR)
})

videoR.addEventListener('timeupdate', ()=>{updateProgressBar(videoR, ProgressBar)})
videoR.oncontextmenu = () => false

function PlayPause(controle,video){
    if(video.ended)
        video.currentTime = 0
    if(controle.innerHTML == 'Play'){
        controle.innerHTML = 'Pause'
        video.play()
    }
    else{
        controle.innerHTML = 'Play'
        video.pause()
    }
}

function updateProgressBar(video, Progresso){
    let porcentagem = (video.currentTime/video.duration) * 100
    Progresso.style.width = porcentagem + '%'
    Progresso.innerHTML = parseInt(porcentagem) + '%'
}