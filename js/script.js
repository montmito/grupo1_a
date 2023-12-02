document.addEventListener('DOMContentLoaded', function() {
    invest_img = document.querySelector("#invest_img")
    invest_img.addEventListener("mouseover", function(event){
        img = document.createElement('img');
        img.classList.add("add")
        img.src = "img/investir_popup.jpg";
        invest_img.appendChild(img);
        console.log(invest_img)
    })

    invest_img.addEventListener("mouseout", function(event){
        img = invest_img.querySelector('.add')
        img.remove()
    })
})