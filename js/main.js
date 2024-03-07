let link = document.querySelector('.header__link')
let body  =document.getElementById('body')
let sun = document.getElementById('sun')
let moon = document.getElementById('moon')
let bode = document.querySelector('.bodd')
let head = document.getElementById('header')
let about = document.getElementById('about')
let life = document.getElementById('life')
let heade = document.getElementById('burger1')
let foot = document.getElementById('burger2')
let know = document.getElementById('knowladge')
let knowladge = document.querySelector('.accordion')
let footer = document.querySelector('.footer')
let favo = document.querySelector('.favorite')


console.log(bode);
let card = document.querySelector('.card')
console.log('ishladim');
function oy(){
    sun.classList.remove('hiden')
    moon.classList.add('hiden') 
    head.style.background = 'darkorange'
    about.style.background = 'brown'
    life.style.background = 'brown'
    know.style.background = 'brown'
    favo.style.background = 'brown'
    knowladge.style.background = 'brown'
    footer.style.background = 'darkorange'

    
    
}
function quyosh(){
    sun.classList.add('hiden')
    moon.classList.remove('hiden')
    head.style.background = '#000'
    about.style.background = '#222'
    life.style.background = '#222'
    know.style.background = '#222'
    favo.style.background = '#222'
    knowladge.style.background = '#222'
    footer.style.background = '#000'



}
moon.addEventListener('click',()=>{
    console.log('ok');
    oy()
})
sun.addEventListener('click',()=>{
    console.log('ok');
   quyosh()
})
heade.addEventListener('click',()=>{
    console.log('ok');
    
   
})
foot.addEventListener('click',()=>{
    
   
})



