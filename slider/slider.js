let contadorslide = 0
let imagemslides = document.getElementsByClassName('slider')
imagemslides[0].style.display = 'inline'
let botoesnavegacao = document.getElementsByName('navigation')
botoesnavegacao[0].addEventListener('click',(evento)=>{
    evento.preventDefault()
    volta()
})
botoesnavegacao[1].addEventListener('click', (evento)=>{
    evento.preventDefault()
    avança()
})

function avança(){
    if(contadorslide < imagemslides.length - 1 ){
        console.log(imagemslides[contadorslide])
        imagemslides[contadorslide].style.display = 'none'
        contadorslide++
        console.log(imagemslides[contadorslide])
        imagemslides[contadorslide].style.display = 'inline'
    }
    else{
        console.log(imagemslides[contadorslide])
        imagemslides[contadorslide].style.display = 'none'
        contadorslide = 0
        imagemslides[contadorslide].style.display = 'inline'
    }
}

function volta(){
    if(contadorslide > 0){
        console.log(imagemslides[contadorslide])
        imagemslides[contadorslide].style.display = 'none'
        contadorslide--
        imagemslides[contadorslide].style.display = 'inline'
    }
    else{
        console.log(imagemslides[contadorslide])
        imagemslides[contadorslide].style.display = 'none'
        contadorslide = imagemslides.length - 1
        imagemslides[contadorslide].style.display = 'inline'
    }
}