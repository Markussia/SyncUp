let accordion = document.querySelector('.link .unanimate'),
    accordionBtn = document.querySelector('.link button')

accordionBtn.addEventListener('click', function(){
    accordion.classList.toggle('accordion-animate')
})
