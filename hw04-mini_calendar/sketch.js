 function setup() { 
  createCanvas(400, 400);
  background(255);
  colorMode(RGB);
  noStroke();
   
  let totalDays = daysInMonth(); 
  let today = day();
  let columns = 7; // 7circles each rows
  let rows = ceil(totalDays / columns); // caculate the integer value of rows
  let circleDiameter = width / columns; // equally distribute the circles
  let space = circleDiameter * 0.1;// circles' interval 

   
  for (let i = 1; i <= totalDays; i++) {
    let col = (i - 1) % columns; 
    let currentRow = floor((i - 1) / columns); 
    let x = col * circleDiameter + circleDiameter / 2;
    let y = currentRow * circleDiameter + circleDiameter / 2; 
    
    if (i == today) {
      fill(191, 0, 0); // Highlight today in red
      arc(x, y, circleDiameter - space, circleDiameter - space, HALF_PI, PI + HALF_PI);
    } else {
      fill(255,201,201,80);
      ellipse(x, y, circleDiameter - space);
    }
  }
}
   
  function daysInMonth() {
  let currentMonth = month();
  let currentYear = year();
  return new Date(currentYear, currentMonth, 0).getDate(); 

 }