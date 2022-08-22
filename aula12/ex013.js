let currentTime = new Date()

let hours = currentTime.getHours('00:00')

if(hours >= 6 && hours < 12){
    console.log('bom dia')
}else if(hours >= 12 && hours < 18){
    console.log('boa tarde')
}else if(hours >= 18){
    console.log('boa noite')
}
