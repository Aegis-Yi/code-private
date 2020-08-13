"use strict";
// @name     typescript学习笔记
// @author   Aegis-Yi
class Car {
    run() {
        alert(`car is running...`);
    }
}
class Truck {
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
let driver1 = new Driver().drive(new Car());
let driver2 = new Driver().drive(new HeavyTank());
