function verificar(){
    
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')

    if(fano.value.length === 0 || fano.value > ano){
        alert('verifique os dados!')
    }
    else{
        let sexo = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.style.borderRadius = '50%'
        img.setAttribute('id', 'foto')

        if(sexo[0].checked){
            genero = 'homem'

            if(idade >= 0 && idade < 10){
                //menino
                img.setAttribute('src', 'img/menino.jpg')
            }
            else if(idade < 21){
                //jovem homem
                img.setAttribute('src', 'img/jovem_homem.jpg')
            }
            else if(idade < 50){
                //homem
                img.setAttribute('src', 'img/homem.jpg')
            }
            else{
                //idoso
                img.setAttribute('src', 'img/idoso.jpg')
            }
        }
        else if(sexo[1].checked){
            genero = 'mulher'

            if(idade >= 0 && idade < 10){
                //menina
                img.setAttribute('src', 'img/menina.jpg')
            }
            else if(idade < 21){
                //jovem mulher
                img.setAttribute('src', 'img/mulher_jovem.jpg')
            }
            else if(idade < 50){
                //mulher
                img.setAttribute('src', 'img/mulher.jpg')
            }
            else{
                //idosa
                img.setAttribute('src', 'img/idosa.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
