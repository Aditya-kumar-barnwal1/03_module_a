const btn=document.querySelector('#btn');

const textarea=document.querySelector('textarea');

btn.addEventListener('click',()=>{
    const text=document.querySelector('#text');
    text.innerHTML.filter(item=>item===textarea.value);
    
})