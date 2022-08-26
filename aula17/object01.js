let amigo = {
    nome: 'keitey',
    sexo: 'f',
    idade: 34,
    bumbum: 80,
    crescerBumbum(b=0){
        console.log('cresceu o bumbum')
        this.bumbum += b
    }
}

amigo.crescerBumbum(4)
console.log(`O nome é ${amigo.nome}, idade ${amigo.idade} com ${amigo.bumbum}cm de bumbum`)