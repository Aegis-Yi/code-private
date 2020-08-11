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
printName({
    firstname: "张",
    secondname: "三",
});
var obj = {
    firstname: "李",
    secondname: "四",
    age: 20
};
//printInfo(obj);
