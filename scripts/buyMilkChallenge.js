function getMilk(cash) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  if(Math.floor(cash /1.5) == 1) {
      console.log("buy " + Math.floor(cash / 1.5) + " bottle of milk");
  }
  else if(Math.floor(cash / 1.5) == 0) {
      console.log("Could not afford to buy milk.");
  }
  else {
      console.log("buy " + Math.floor(cash / 1.5) + " bottles of milk");
  }
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

getMilk(1.5);