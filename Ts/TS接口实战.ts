// @name     typescript学习笔记
// @author   Aegis-Yi

//Typescript接口实战

interface IVechicle{//定义一个交通工具的基接口
    run(): void;
}

class car implements IVechicle{//实现接口的run方法
    run() {
        alert(`car is running...`);
    }
}

class truck implements IVechicle{
    run() {
        alert(`truck is running...`);
    }
}

interface IWeapon{//定义一个坦克炮台的基接口
    fire(): void;
}
interface ITank extends IVechicle, IWeapon {//定义一个坦克的基接口
    ///用多个接口实现接口隔离
}
class LinghtTank implements ITank{
    run() {
        alert(`LinghtTank is running...`);
    }
    fire() {
        alert(`boom!!!`);
    }
}

class MidTank implements ITank{
    run() {
        alert(`MidTank is running...`);
    }
    fire() {
        alert(`boom!!!boom!!!`);
    }
}

class HeavyTank implements ITank{
    run() {
        alert(`HeavyTank is running...`);
    }
    fire() {
        alert(`boom!!!boom!!!boom!!!`);
    }
}

class Driver {
    drive(vechice:IVechicle) {
        vechice.run();
    }
}

var driver1 = new Driver().drive(new car());
var driver2 = new Driver().drive(new HeavyTank());
