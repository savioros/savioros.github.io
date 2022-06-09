function scrollSuave(){
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
}
scrollSuave()

function animaAoCarregar(){
    
    const sections = document.querySelectorAll('.js-animacao')
    sections.forEach((section) => {
        section.classList.add('aparece-ao-carregar')
    })

}
window.addEventListener('load', animaAoCarregar)