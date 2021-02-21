function isLeap(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    }
    else {
        return false;
    }
        
}

var testYear = 2020;

while(testYear <= 2100) {
    console.log("Year " + testYear + ": " + isLeap(testYear));
    testYear += 1;
}