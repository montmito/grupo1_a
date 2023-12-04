document.addEventListener('DOMContentLoaded', function() {
    //Pop up cielo 
    cielo_img = document.querySelector("#cielo_img")
    cielo_img.addEventListener("mouseover", function(event){
        img = document.createElement('img');
        img.classList.add("pop_cielo")
        img.src = "img/check_popup.jpg";
        cielo_img.appendChild(img);
        img2 = document.createElement('img');
        img2.classList.add("pop_cielo2")
        img2.src = "img/check_popup.jpg";
        cielo_img.appendChild(img2);
    })

    cielo_img.addEventListener("mouseout", function(event){
        img = cielo_img.querySelector('.pop_cielo')
        img2 = cielo_img.querySelector('.pop_cielo2')
        img.remove()
        img2.remove()
    })

    //Pop up itaú
    itau_img = document.querySelector("#itau_img")
    itau_img.addEventListener("mouseover", function(event){
        img = document.createElement('img');
        img.classList.add("pop_itau")
        img.src = "img/check_popup.jpg";
        itau_img.appendChild(img);
    })

    itau_img.addEventListener("mouseout", function(event){
        img = itau_img.querySelector('.pop_itau')
        img.remove()
    })

    //Pop petrobras
    petrobras_img = document.querySelector("#petrobras_img")
    petrobras_img.addEventListener("mouseover", function(event){
        img = document.createElement('img');
        img.classList.add("pop_pt")
        img.src = "img/dec_popup.png";
        petrobras_img.appendChild(img);
    })

    petrobras_img.addEventListener("mouseout", function(event){
        img = petrobras_img.querySelector('.pop_pt')
        img.remove()
    })

    //Pop vale
    vale_img = document.querySelector("#vale_img")
    vale_img.addEventListener("mouseover", function(event){
        img = document.createElement('img');
        img.classList.add("pop_vale")
        img.src = "img/neutro_pop.png";
        vale_img.appendChild(img);
    })

    vale_img.addEventListener("mouseout", function(event){
        img = vale_img.querySelector('.pop_vale')
        img.remove()
    })
})