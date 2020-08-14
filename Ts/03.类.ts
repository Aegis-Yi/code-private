// @name     typescript学习笔记
// @author   Aegis-Yi

// Typescript中的类

// <summary>
// 类的定义
// </summary>
/*
class person{
    name: string; //前面省略public

    constructor(n: string) { //构造函数 实例化的时候触发方法
        this.name = n;
    }

    getName(): string{
        return this.name;
    }
    setName(name: string): void {
        this.name = name;
    }

    run(): void{
        alert(this.name + "在运动");
    }
}

var p = new person("张三");
p.run();
alert(p.getName());
p.setName("李四");
p.run();

//*/

// <summary>
// TS的继承  extends...super
// </summary>
//*
class person {
    name: string; // 前面省略public

    constructor(n: string) { // 构造函数 实例化的时候触发方法
        this.name = n;
    }

    /*     getName(): string{
            return this.name;
        }
        setName(name: string): void {
            this.name = name;
        }
    */
    run(): void {
        alert(this.name + "在运动");
    }
}

/// 继承
class Aperson extends person{
    constructor(name: string) {
        super(name);   // ...初始化父类的构造函数
    }
}
let a = new Aperson("赵四");
// a.run();

/// TS中继承的探讨
class Bperson extends person {
    constructor(name: string) {
        super(name);   // ...初始化父类的构造函数
    }

    run(): void {
        alert(`${this.name}在跑步`); // ...子类重写父类
    }
    work(): void {
        alert(`${this.name}在工作`);
    }

}

const b = new Bperson("李四");
// b.run();
// b.work();

/// 类里面的修饰符

/*    ...与C#大致相同
Public
protected
private
*/

/// 静态属性,静态方法
class Person {
    static print() {
        alert(`我是静态方法`);
    }

    public name: string;
    constructor(name: string) {
        this.name = name;
    }

    run() {
        alert(`${this.name}在运动`);
    }
    work() {
        alert(`${this.name}在工作`);
    }
}

// Person.print();

/// 多态 类似C#

class animal {
    eat() {
        alert(`吃的方法`)
    }
}

class cat extends animal {
    eat() {
        alert(`cat eat`);
    }
    say() {
        alert(`喵喵喵`);
    }
}

class dog extends animal{
    eat() {
        alert(`dog eat`);
    }
}

/* new animal().eat();
new cat().eat();
new dog().eat();
new animal().eat(); */

/// 抽象 abstract 类似C#
abstract class Animal {
    abstract eat(): any;
}

class Cat extends Animal{  /// 抽象类的子类必须实现抽象方法
    eat() {
        alert(`cat eat`);
    }
    say() {
        alert(`喵喵喵`);
    }
}

class Dog extends Animal{
    eat() {
        alert(`dog eat`);
    }
    say() {
        alert(`汪汪汪`);
    }
}

// new Animal();  ///无法实例化抽象类

//*/