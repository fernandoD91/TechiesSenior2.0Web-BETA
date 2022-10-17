const menuButton = document.querySelector('nav .open') 
const menuList = document.querySelector('nav .menu')

menuButton.addEventListener('click',() => {
    alterClass(menuButton,menuList,'open','close')
})

function alterClass(el,tag,a,b){
    tag.classList.toggle('active') ?
    el.classList.replace(a,b) : 
    el.classList.replace(b,a)
}