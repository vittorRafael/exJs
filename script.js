function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas!`

    if (hora >= 0 && hora < 12) {
        //bom dia 
        img.src = "img/manhaCirculo.png"
        document.body.style.background = '#A7940E'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = "img/tardeCirculo.png"
        document.body.style.background = '#E26910'
    } else {
        //boa noite
        img.src = "img/noiteCirculo.png"
        document.body.style.background = '#054A9F'
    }







}