const icon=document.getElementById("icon");
const ul=document.querySelector("ul");

icon.addEventListener('click',()=>{
    ul.classList.toggle("active");
});


var typed = new Typed('#element', {
    strings: ['YouTuber','WebDeveloper','Coder'],
    typeSpeed: 50,
    loop:true,
    backSpeed:50
   
  });
