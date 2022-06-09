const links = document.querySelectorAll('.menu a')

function redirecionar(event){
    event.preventDefault()
    
    const href = this.getAttribute('href')
    const section = document.querySelector(href)
    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
}

function eventosLinks(link){
    link.addEventListener("click", redirecionar)
}

links.forEach(eventosLinks)