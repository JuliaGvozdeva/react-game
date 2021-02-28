export function exchangeFileds(emptyField, clickElement) {
  emptyField.classList.toggle('empty');
  emptyField.id = clickElement.id;
  emptyField.innerText = clickElement.innerText;
  clickElement.classList.toggle('empty');
  clickElement.id = 'empty';
  clickElement.innerText = "";

  console.log(clickElement.id, emptyField.id)
}

// export function checkOverGame(gameItems) {
//   let check = 1;
//   document.querySelectorAll(".game-field").forEach(element => {
//     if (+element.id === check) {
//       if (check === gameItems) {
//         this._showOverGame();
//         this._saveBestScore();
//       } else {
//         check++;
//       }
//     }
//   });
// }