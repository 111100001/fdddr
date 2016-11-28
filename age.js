txtd.value = CDate(new Date());


btncalc.onclick = function() {
    var born;
    born = CDate(txtbirthday.value);
    if (chkages.getValue(1) == true) {
        txtdays.value = DateDiff("d", born, CDate(new Date()));
    }
    if (chkages.getValue(2) == true) {
        txtmonths.value = DateDiff("m", born, CDate(new Date()));
    }
    if (chkages.getValue(3) == true) {
        txtyears.value = DateDiff("yyyy", born, CDate(new Date()));
    }
};

btnclear.onclick = function() {
    Form1.reset();
    txtd.value = CDate(new Date());
};