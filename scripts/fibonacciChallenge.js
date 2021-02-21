function fibonacciGenerator(n) {
    var numOfItems = [];    

    if(n == 1) {
        numOfItems = [0];
    }
    else if(n == 2) {
        numOfItems = [0, 1];
    }
    else {
        numOfItems = [0,1];
        for(var i = 2; i < n; i++) {
        numOfItems.push((numOfItems[i-2] + numOfItems[i-1]));
        }
    }
    
    return numOfItems;
}

var positions = prompt("Enter how many positions: ");

var output = fibonacciGenerator(positions);
alert(output);