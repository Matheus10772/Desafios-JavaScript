

let contadorslide = 0
let imagemslides = document.getElementsByClassName('slider')
imagemslides[0].style.display = 'inline'
let botoesnavegacao = document.getElementsByName('navigation')
let originalposition = imagemslides[0
].getBoundingClientRect().left
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
        animacao(imagemslides[contadorslide], originalposition, -600, 5, 'avançar')
        contadorslide++
        console.log(imagemslides[contadorslide])
        imagemslides[contadorslide].style.display = 'inline'
        animacao(imagemslides[contadorslide], 1500, originalposition, 5, 'avançar')
    }
    else{
        console.log(imagemslides[contadorslide])
        let originalposition = imagemslides[contadorslide].getBoundingClientRect().left
        animacao(imagemslides[contadorslide], originalposition, -600, 5, 'avançar')
        contadorslide = 0
        console.log(imagemslides[contadorslide])
        imagemslides[contadorslide].style.display = 'inline'
        animacao(imagemslides[contadorslide], 1500, originalposition, 5, 'avançar')
    }
}

function volta(){
    if(contadorslide > 0){
        console.log(imagemslides[contadorslide])
        let originalposition = imagemslides[contadorslide].getBoundingClientRect().left
        animacao(imagemslides[contadorslide], originalposition, 1500, 5, 'voltar')
        contadorslide--
        console.log(imagemslides[contadorslide])
        imagemslides[contadorslide].style.display = 'inline'
        animacao(imagemslides[contadorslide], -600, originalposition, 5, 'voltar')
    }
    else{
        console.log(imagemslides[contadorslide])
        let originalposition = imagemslides[contadorslide].getBoundingClientRect().left
        animacao(imagemslides[contadorslide], originalposition, 1500, 5, 'voltar')
        contadorslide = imagemslides.length - 1
        console.log(imagemslides[contadorslide])
        imagemslides[contadorslide].style.display = 'inline'
        animacao(imagemslides[contadorslide], -600, originalposition, 5, 'voltar')
    }
}

function animacao(elemento, inicio, fim, passo, disposicao){
        elemento.style.left = inicio
        if(disposicao == 'avançar'){
            inicio = inicio - passo       
            if(inicio > fim){
                setTimeout(() => {
                    animacao(elemento, inicio, fim, passo, disposicao)
                }, 2);
            }
        }
        else{
            inicio = inicio + passo       
            if(inicio < fim){
                setTimeout(() => {
                    animacao(elemento, inicio, fim, passo, disposicao)
                }, 2);
            }
        }
}
