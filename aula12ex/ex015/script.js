function carregar(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hours = data.getHours()

    msg.innerHTML = `Agora são ${hours} horas`

    if(hours >= 0 && hours < 12){
        img.src = 'img/dia.jpg'
        document.body.style.background = '#F6BA5A'
    }
    else if(hours >= 12 && hours < 18){
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#5EC265'
    }
    else{
        img.src = 'img/noite.jpg'
        document.body.style.background = '#E6CBC4'
    }

    setTimeout("location.reload(true);",100)
}