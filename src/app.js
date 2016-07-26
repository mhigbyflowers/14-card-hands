'use strict';
import Hand from 'hand';
export default class App {
  constructor(el) {
    // this.app = app;
    this.el = el;
    // console.log('what');
  }
  start() {
    fetch(`https://card-proxy.herokuapp.com/decks/new`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        for (var i = 0; i < 5; i++) {
         const hand = new Hand(data.deck_id,this.el);
          hand.getData().then(() => {
          hand.render();
          });
        }

      });
  }
}
