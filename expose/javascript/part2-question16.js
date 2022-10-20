let statistics = {
  redCars: 21,
  blueCars: 45,
  greenCars: 12,
  raceCars: 5,
  blackCars: 40,
  rareCars: 2
}; // Object to iterate over


for(const car in statistics) {
  if(car[0] == 'r') {
    console.log(statistics[car]); 
  } //Print value of property if starts with r
  else if(statistics[car] % 2 == 1) {
    console.log(statistics[car]);
  } //Print value of property if value of property odd
}
