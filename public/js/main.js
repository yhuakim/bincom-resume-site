document.addEventListener('DOMContentLoaded', () => {
    let gallery = document.querySelectorAll('.card')
    let current = 0

    console.log(gallery.length)

    const startSlide = () => {
        for(let i = 0; i < gallery.length; i++) {
            gallery[i].style.display = 'none'
        }
        current++

        if(current > gallery.length) {
            current = 1
        }
        gallery[current - 1].style.display = 'block'
        
        setTimeout(()=> (
            startSlide()
        ), 5000);
    }

    startSlide()

})