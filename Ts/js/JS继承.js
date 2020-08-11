function Person() {
    this.name = "张三";
    this.age = 20;

    this.run = function() {               //...实例方法
        console.log(this.name + "在运动");
    }
}

/* Person.getInfo=function () {         //...静态方法
    console.log("我是静态方法");
}*/

Person.prototype.sex = "男";
Person.prototype.work=function() {
    console.log(this.name + "在工作");
}

/* var p = new Person();
console.log(p.name);
p.run();
p.work(); 
Person.getInfo(); */

//继承

{
    function Aperson() {
        Person.call(this);   //...对象冒充,可以继承属性和方法,不能继承原型链
    }

    var a = new Aperson();
    a.run();
    //a.work();     //error

    function Bperson() {
    
    }
    Bperson.prototype = new Person(); //...原型链实现继承

    var b = new Bperson();
    b.run();
    b.work();
}

{
    function IPerson(name, age) {
        this.name = name;
        this.age = age;
    
        this.run = function () {               //...实例方法
            console.log(this.name + "在运动");
        }
    }

    IPerson.prototype.sex = "男";
    IPerson.prototype.work=function() {
        console.log(this.name + "在工作");
    }

    var ai = new IPerson("李四", 30);
    ai.run();

    //...原型链继承,实例化子类的时候无法给父类传参
    function AIperson(name, age) {
        
    }
    AIperson.prototype = new IPerson();
    var ai = new AIperson();
    ai.run();

    //...原型链+对象冒充继承
    function BIperson(name, age) {
        IPerson.call(this, name, age);
    }
    BIperson.prototype = new IPerson();   //Iperson会执行两遍

    var bi = new BIperson("王五", 30);
    bi.run();
    bi.work();

    //...原型链+对象冒充继承第二种方式*
    function CIperson(name, age) {
        IPerson.call(this, name, age);
    }
    CIperson.prototype = IPerson.prototype;   //原型链继承Ipersom的原型链

    var ci = new CIperson("张三",20);
    ci.run();
    ci.work();
}