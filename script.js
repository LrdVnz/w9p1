
/* Script di feather Icons */
feather.replace();

/* Script per creare animazione di riempimento del bookmark */

let cards = document.getElementsByClassName("card");

for(single_card of cards){
  single_card.addEventListener('mouseenter' , (event) => {
    event.target.classList.add("show");
  });

  single_card.addEventListener('mouseleave' , (event) => {
    event.target.classList.remove("show");
  });

} 
