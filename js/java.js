document.addEventListener('DOMContentLoaded', function (event){

    videos = document.querySelectorAll('.video')

    localStorage.setItem('1', false)
    localStorage.setItem('2', false)
    localStorage.setItem('3', false)
    localStorage.setItem('4', false)

    

    for(video of videos){
        video.addEventListener('click', function(event){

        if (videos.indexOf(video) == 1){
            localStorage.setItem('1', true)

        }
        if (videos.indexOf(video) == 2){
            localStorage.setItem('2', true)

        }

        if (videos.indexOf(video) == 3){
            localStorage.setItem('3', true)

        }

        if (videos.indexOf(video) == 4){
            localStorage.setItem('4', true)

        }

            




        })
    }

    v1 = localStorage.getItem('1')
    v2 = localStorage.getItem('2')
    v3 = localStorage.getItem('3')
    v4 = localStorage.getItem('4')


    if(v1 == true){
        
    }



})
