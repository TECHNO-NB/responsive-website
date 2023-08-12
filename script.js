const icon=document.getElementById('icon');
const ul=document.querySelector("ul");

icon.addEventListener('click',()=>{
    ul.classList.toggle("active")
})