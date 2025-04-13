window.addEventListener("load",() =>{
const loader = document.querySelector(".loader");

loader.classList.add("loader-hidden");

loader.addEventListener("transitionend",() => {
document.body.removeChild("loader");
})
})


    document.addEventListener('DOMContentLoaded', function() {
      const hamburger = document.querySelector('.hamburger');
      const navLinks = document.querySelector('.nav-links');
  
      hamburger.addEventListener('click', function() {
          navLinks.classList.toggle('active');
          hamburger.classList.toggle('active');
      });
  });