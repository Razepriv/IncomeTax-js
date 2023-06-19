function calculate() {
    var x = Number(document.getElementById("income").value);

    if (x > 1500000) {
        var y = (x / 100) * 30;
        document.getElementById("tax").value = y;
    } else if (x > 1250000) {
        var y = (x / 100) * 25;
        document.getElementById("tax").value = y;
    } else if (x > 1000000) {
        var y = (x / 100) * 20;
        document.getElementById("tax").value = y;
    } else if (x > 750000) {
        var y = (x / 100) * 15;
        document.getElementById("tax").value = y;
    } else if (x > 500000) {
        var y = (x / 100) * 10;
        document.getElementById("tax").value = y;
    } else if (x > 250000) {
        var y = (x / 100) * 5;
        document.getElementById("tax").value = y;
    } else {
        document.getElementById("tax").value = "No Tax";
    }
}