

function writeCards(names, event) {
    const cards = [];

  for (let i = 0; i < names.length; i++) {
    cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  console.log(cards);
  return cards;
}


writeCards(["Charlie", "Samip", "Ali"], "birthday");


function countDown(number) {
  let countdown = number;
      while (countdown >= 0) {
        console.log(countdown--);
        }
}

countDown(10);