let bts=document.querySelector('#btn');
let can=document.querySelector('.canva');
let close=document.querySelector('.cls')
bts.addEventListener('click',()=>{
    can.classList.add('show');
});
close.addEventListener('click',()=>{
    can.classList.remove('show')
})