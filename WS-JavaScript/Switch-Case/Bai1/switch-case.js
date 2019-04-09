var browser = prompt("Trình duyệt: ","");
switch (browser) {
    case "Edge":
        alert("You've got Edge Browser");
        break;
    case "Chrome":
    case "Firefox":
    case "Safari":
    case "Opera":
        alert("Okay we support these browser too !!");
        break;
    default:
        alert("We hope that this page looks ok !!");
}
