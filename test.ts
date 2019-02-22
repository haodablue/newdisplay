// tests go here; this will not be compiled when this package is used as a library

basic.forever(function () {
    newdisplay.write_xy(1, 2);
    newdisplay.writeBuff();
    basic.pause(500);

})