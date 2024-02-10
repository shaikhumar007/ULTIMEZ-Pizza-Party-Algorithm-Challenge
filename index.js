function pizzaSliceCalculator(numberOfPeople) {
  let largePizzaSlices = 8;
  let mediumPizzaSlices = 6;
  let regularPizzaSlices = 4;
  let smallPizzaSlices = 1;

  let largePizzas = 0;
  let mediumPizzas = 0;
  let regularPizzas = 0;
  let smallPizzas = 0;

  let totalNumberOfSlices = 0;

  while (totalNumberOfSlices <= numberOfPeople) {
    totalNumberOfSlices += largePizzaSlices;
    largePizzas += 1;
    if (totalNumberOfSlices > numberOfPeople) {
      totalNumberOfSlices -= largePizzaSlices;
      largePizzas -= 1;
      break;
    }
  }

  while (totalNumberOfSlices <= numberOfPeople) {
    totalNumberOfSlices += mediumPizzaSlices;
    mediumPizzas += 1;
    if (totalNumberOfSlices > numberOfPeople) {
      totalNumberOfSlices -= mediumPizzaSlices;
      mediumPizzas -= 1;
      break;
    }
  }

  while (totalNumberOfSlices <= numberOfPeople) {
    totalNumberOfSlices += regularPizzaSlices;
    regularPizzas += 1;
    if (totalNumberOfSlices > numberOfPeople) {
      totalNumberOfSlices -= regularPizzaSlices;
      regularPizzas -= 1;
      break;
    }
  }

  while (totalNumberOfSlices <= numberOfPeople) {
    totalNumberOfSlices += smallPizzaSlices;
    smallPizzas += 1;
    if (totalNumberOfSlices > numberOfPeople) {
      totalNumberOfSlices -= smallPizzaSlices;
      smallPizzas -= 1;
      break;
    }
  }

  console.log(`If there are ${numberOfPeople} individuals`);
  console.log(`1. We will have ${largePizzas} Large pizzas`);
  console.log(`1. We will have ${mediumPizzas} Medium pizzas`);
  console.log(`1. We will have ${regularPizzas} Regular pizzas`);
  console.log(`1. We will have ${smallPizzas} Small pizzas`);
  console.log(
    `(${largePizzas}*${largePizzaSlices}) + (${mediumPizzas}*${mediumPizzaSlices}) + (${regularPizzas}*${regularPizzaSlices}) + (${smallPizzas}*${smallPizzaSlices}) = ${totalNumberOfSlices}`
  );
}

pizzaSliceCalculator(19);
