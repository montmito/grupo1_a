document.addEventListener('DOMContentLoaded', function() {
    //Pop up cielo 
    cielo_img = document.querySelector("#cielo_img")
    cielo_img.addEventListener("mouseover", function(event){
        img = document.createElement('img');
        img.classList.add("pop_cielo")
        img.src = "img/check_popup.jpg";
        cielo_img.appendChild(img);
    })

    cielo_img.addEventListener("mouseout", function(event){
        img = cielo_img.querySelector('.pop_cielo')
        img.remove()
    })
})