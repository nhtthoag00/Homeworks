var userName = prompt("Who's there ? ");

if (userName == "admin") {
    var passWord = prompt("Password ? ");
    if (passWord == "TheMaster") {
        console.log("Welcome !!");
    } else if (passWord == null || passWord == "") {
        console.log("Canceled !!");
    } else {
        console.log("Wrong Password !!");
    }
} else if (userName == null || userName == "") {
    console.log("Canceled !!");
} else {
    console.log("I don't know you !!");
}
