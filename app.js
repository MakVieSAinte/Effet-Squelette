// Script Local

const cardsGrid = document.querySelector(".cards-grid");
const cards = document.querySelectorAll(".card");

const img = ['1drapeau-americain.png', '2cover.jpg', '2.jpg']
var index = 0

window.addEventListener('load', (e) => {

	setTimeout((load) => {

      let cardsList = '';

      for(let i = 0; i <= 7; i++) {
         
      const newCard = `
      <div class="card">
          <div class="top-img">
             <img src="${img[index]}" class="top-img"/>
          </div>
          <div class="content">
             <h3>Lorem ipsum dolor</h3>
             <p class="card-text">Lorem ipsum dolor sit amet consectetur</p>
             <p class="card-text">Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur</p>
          </div>
      </div>
       `
       index++;
      cardsList += newCard;

      }
  
      cardsGrid.innerHTML = cardsList;
    
    },3000);

})

// 925DEV