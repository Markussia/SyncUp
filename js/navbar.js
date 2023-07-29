let navBtn = document.querySelector('.nav-bar-mobile'),
    contentBar = document.querySelector('.content-bar'),
    closeBtn = document.querySelector('.content-bar button')

navBtn.addEventListener('click', function(){
    contentBar.classList.add('bar-animate')
})

closeBtn.addEventListener('click', function() {
    contentBar.classList.remove('bar-animate')
})
