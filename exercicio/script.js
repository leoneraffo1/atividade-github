function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    
  
    msg.innerHTML = `Agora sao ${hora} horas`

    if(hora >= 0 && hora < 12){
        //Bom dia
        img.src ='Manha.jpg'
        document.body.style.background = "#e2cd9f"
        }else if(hora >= 12 && hora < 18){
        //Boa tarde pirimpirimpompom
        img.src ='Tarde.jpg'
        document.body.style.background = "#b9846f"
        
    }else {
        //Boa noite sabe que nois tem o dom
        img.src ='Noite.jpg'
        document.body.style.background = "#515154"
        
    }
}