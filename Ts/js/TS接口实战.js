"use strict";
// @name     typescript学习笔记
// @author   Aegis-Yi
class car {
    run() {
        alert(`car is running...`);
    }
}
class truck {
    run() {
        alert(`truck is running...`);
    }
}
class LinghtTank {
    run() {
        alert(`LinghtTank is running...`);
    }
    fire() {
        alert(`boom!!!`);
    }
}
class MidTank {
    run() {
        alert(`MidTank is running...`);
    }
    fire() {
        alert(`boom!!!boom!!!`);
    }
}
class HeavyTank {
    run() {
        alert(`HeavyTank is running...`);
    }
    fire() {
        alert(`boom!!!boom!!!boom!!!`);
    }
}
class Driver {
    drive(vechice) {
        vechice.run();
    }
}
var driver1 = new Driver().drive(new car());
var driver2 = new Driver().drive(new HeavyTank());
