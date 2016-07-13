export default class Hand {
  constructor(deckId,parentEl) {

// console.log(parentEl);
  this.parentEl = parentEl;
  this.handHolder = this.parentEl.querySelector('.card-hand');
  this.handContainer= document.createElement('div');
  this.handContainer.classList = 'card-hand__card';

  this.imageEl = document.createElement('img');
  this.imageEl.classList= 'card-hand__card-img';
  this.valueEl = document.createElement('h2');
  this.valueEl.classList='card-hand__card-value';
  this.handHolder.appendChild(this.handContainer);




    this.deckId = deckId;
      //  console.log(this.handHolder);

  }
  getData() {
    return fetch(`https://card-proxy.herokuapp.com/decks/${this.deckId}/draw?count=5`)
      .then((res) => res.json())
      .then((data) => {
        this.data = data;
      });
  }

  render() {

    this.data.cards.forEach((card) => {
this.imageEl.src= card.image;
this.valueEl.innerText=card.value;
this.handContainer.appendChild(this.imageEl);
this.handContainer.appendChild(this.valueEl);
      // console.log(this.handHolder);


    });

  }
}
