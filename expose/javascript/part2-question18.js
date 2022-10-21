function printNum() {
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
} //Function to print time

setInterval(printNum, 1000); //printNum every second
