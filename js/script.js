document.addEventListener('DOMContentLoaded', function() {
    //Pop up INVESTIR
    invest_img = document.querySelector("#invest_img")
    invest_img.addEventListener("mouseover", function(event){
        img = document.createElement('img');
        img.classList.add("pop_invs")
        img.src = "img/investir_popup.jpg";
        invest_img.appendChild(img);
    })

    invest_img.addEventListener("mouseout", function(event){
        img = invest_img.querySelector('.pop_invs')
        img.remove()
    })

    //Pop up Vídeos/Org. Fin
    orgfin_img = document.querySelector("#orgfin_img")
    orgfin_img.addEventListener("mouseover", function(event){
        img = document.createElement('img');
        img.classList.add("pop_org")
        img.src = "img/imagem_org.jpg";
        orgfin_img.appendChild(img);
    })

    orgfin_img.addEventListener("mouseout", function(event){
        img = orgfin_img.querySelector('.pop_org')
        img.remove()
    })

    // Pop up Vincular conta
    vinc_img = document.querySelector("#vinc_img")
    vinc_img.addEventListener("mouseover", function(event){
        img = document.createElement('img');
        img.classList.add("pop_vinc")
        img.src = "img/vincular_popup.png";
        vinc_img.appendChild(img);
    })

    vinc_img.addEventListener("mouseout", function(event){
        img = vinc_img.querySelector('.pop_vinc')
        img.remove()
    })
})