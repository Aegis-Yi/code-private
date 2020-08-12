"use strict";
// @name     typescript学习笔记
// @author   Aegis-Yi
function printName(name) {
    if (name.thirdname) {
        alert(name.firstname + "--" + name.secondname + name.thirdname);
    }
    else {
        alert(name.firstname + "--" + name.secondname);
    }
}
function printInfo(info) {
    alert(info.firstname + info.secondname + "--" + info.age);
}
// printName({
//     firstname: "张",
//     secondname: "三",
//     //thirdname:"可选"
// })
var obj = {
    firstname: "李",
    secondname: "四",
    age: 20
};
var md5 = function (key, value) {
    return key + value;
};
var sha1 = function (key, value) {
    return key + `---` + value;
};
var arr1 = ["aaa", "bbb"];
for (let i of arr1) {
    //alert(i);
}
var arr2 = { name1: '张三', name2: '李四' };
class dog1 {
    constructor(name) {
        this.name = name;
    }
    eat() {
        alert(this.name + `吃狗粮`);
    }
}
class cat1 {
    constructor(name) {
        this.name = name;
    }
    eat() {
        alert(this.name + `吃猫粮`);
    }
}
new dog1("小黑").eat();
new cat1("小花").eat();
//*/
