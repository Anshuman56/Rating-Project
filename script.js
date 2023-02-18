let content = document.querySelector('.content')
let submit = document.querySelector('button')
let rating = document.querySelector('#rating')
let rates = document.querySelectorAll('li')
let num = document.querySelector('.number')

rates.forEach((rate)=>{
    rate.addEventListener('click',() =>{
        num.textContent=rate.textContent
    })
})

submit.addEventListener('click',e=>{
    content.innerHTML='';
    content.style.display='none';
    rating.style.display='flex';
    content.innerHTML=rating;
})