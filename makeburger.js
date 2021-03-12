
function makeBurger (pickles, bacon) {
    pickles = pickles || 3;
    bacon = bacon || false;
    return 'Burger with ' + pickles + ' pickles and ' + bacon + ' bacon';
  }
  
  let myBurger = makeBurger(1, true);
  console.log(myBurger);
