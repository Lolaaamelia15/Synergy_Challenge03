function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  for(var i = 0; i < cars.length; i++){
    for(var j = 0; j < (cars.length - 1); j++){
      if(cars[j].year < cars[j+1].year){
        let temp = cars[j];
        cars[j] = cars[j+1];
        cars[j+1] = temp;
      }
    }
  }

  // Rubah code ini dengan array hasil sorting secara ascending
  return cars;
}
