"use strict";
// @name     typescript学习笔记
// @author   Aegis-Yi
// typescript泛型
// <summary>
// 泛型定义 obj<T>
// </summary>
function getInfo(value) {
    return value;
}
getInfo("我是张三");
getInfo(123);
// <summary>
// 泛型类
// </summary>
class MyClass {
    constructor() {
        this.list = [];
    }
    add(value) {
        this.list.push(value);
    }
    min() {
        let minNUM = this.list[0];
        for (let i of this.list) {
            if (minNUM > i) {
                minNUM = i;
            }
        }
        return minNUM;
    }
}
let m1 = new MyClass();
m1.add(2);
m1.add(3);
m1.add(1);
let m2 = new MyClass();
m2.add("a");
m2.add("b");
m2.add("c");
let getDate = (value) => value;
getDate("1234");
function GetData(value) {
    return value;
}
let myData = GetData;
myData("2020");
// <summary>
// 泛型类加强
// <summary>
{
    class User {
    }
    class Mysql {
        add(user) {
            console.log(user);
            return true;
        }
    }
    let u = new User();
    u.username = "zhangsan";
    u.psword = "123456";
    let DB = new Mysql();
    // DB.add(u);
}
{
    class AticlaCate {
    }
    class Mysql {
        add(info) {
            console.log(info);
            return true;
        }
    }
}
{
    class Mysql {
        add(info) {
            console.log(info);
            return true;
        }
    }
    class User {
    }
    class AticlaCate {
        constructor(params) {
            this.title = params.title;
            this.desc = params.desc;
            this.status = params.status;
        }
    }
    let u = new User();
    u.username = "zhangsan";
    u.psword = "123456";
    let DB = new Mysql();
    DB.add(u);
    let a = new AticlaCate({
        title: "BOOK",
        desc: "1111",
        status: "2222"
    });
    let db = new Mysql();
    db.add(a);
}
