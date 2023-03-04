console.log('hello beautiful people!');

const myName ="hajar akarouch";
const h1 = document.querySelector(".heading-primary");

console.log(myName);
console.log(h1);

// h1.addEventListener("click", function(){
//   h1.textContent=myName;
//   h1.style.backgroundColor="red";
//   h1.style.padding="5rem";
// } );


// set Current year
  const yearEl = document.querySelector(".year");
  const currentYear= new Date().getFullYear();
  yearEl.textContent=currentYear; 


// Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener('click', function(){
  headerEl.classList.toggle("nav-open");
});


