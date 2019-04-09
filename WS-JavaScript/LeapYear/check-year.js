
var year1 = parseInt(prompt("Nhập năm cần check: "));
var isLeapYear = false;
if (year1 % 4 == 0) {
    if (year1 % 100 == 0) {
        if (year1 % 400 == 0) {
            isLeapYear = true;
        } else {
            isLeapYear = false;
        }
    } else {
        isLeapYear = true;
    }
} else {
    isLeapYear = false;
}
if (isLeapYear) {
    document.write( year1 + " is a leap year !! :>");
} else {
    document.write( year1 + " isn't a leap year !! :<");
}

