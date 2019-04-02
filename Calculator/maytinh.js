function cong() {
    var ketqua1 = document.getElementById("input1");
    var ketqua2 = document.getElementById("input2");
    ketqua = parseFloat(parseFloat(ketqua1.value) + parseFloat(ketqua2.value));
    alert("ket qua: " + ketqua);
}
function tru() {
    var ketqua1 = document.getElementById("input1");
    var ketqua2 = document.getElementById("input2");
    ketqua = parseFloat(parseFloat(ketqua1.value) - parseFloat(ketqua2.value));
    alert("ket qua: " + ketqua);
}
function nhan() {
    var ketqua1 = document.getElementById("input1");
    var ketqua2 = document.getElementById("input2");
    ketqua = parseFloat(parseFloat(ketqua1.value) * parseFloat(ketqua2.value));
    alert("ket qua: " + ketqua);
}
function chia() {
    var ketqua1 = document.getElementById("input1");
    var ketqua2 = document.getElementById("input2");
    ketqua = parseFloat(parseFloat(ketqua1.value) / parseFloat(ketqua2.value));
    alert("ket qua: " + ketqua);
}
