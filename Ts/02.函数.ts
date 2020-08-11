// @name     typescript学习笔记
// @author   Aegis-Yi

//Typescript中的函数

// <summary>
// 函数定义
// </summary>
/*

///函数声明法
function run(): void {
    console.log("run");
}
run();
///匿名函数
var str = function(): string {
    return "你好TS!";
}
alert(str());
///定义方法传参
function getInfo(name: string, age: number): string {
    return `${name}---${age}`;
}
alert(getInfo("张三", 20));

//*/

// <summary>
// 方法可选参数
// </summary>
/*
///可选参数必须配置在参数最后面
function getInfo(name: string, age?: number) {
    if (age) {
        return `${name}---${age}`;
    }
    else {
        return `${name}---年龄保密`;
    }
}
alert(getInfo("张三"));

//*/

// <summary>
// 默认参数
// </summary>
/*

function getInfo(name: string, age: number=20) {
    if (age) {
        return `${name}---${age}`;
    }
    else {
        return `${name}---年龄保密`;
    }
}
alert(getInfo("张三"));
alert(getInfo("张三", 30));

//*/

// <summary>
// 剩余参数
// </summary>
/*

function sum(...result: number[]): number {
    var sum = 0;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
alert(sum(1, 2, 3, 4, 5));

//*/

// <summary>
// 函数的重载
// </summary>
/*

function getInfo(name: string): string;
function getInfo(age: number): string;
function getInfo(str: any): any {
    if (typeof str === 'string') {
        return "我是" + str;
    }
    else {
        return "年龄" + str;
    }
}

alert(getInfo("张三"));
alert(getInfo(20));

function getinfo(name: string): string;
function getinfo(name: string,age: number): string;
function getinfo(name: string,age?: number): string {
    if (age) {
        return `${name}---${age}`;
    }
    else {
        return `${name}---年龄保密`;
    }
}
alert(getinfo("张三", 20));
alert(getinfo("张三"));
//*/

// <summary>
// 箭头函数
// </summary>
/*

setTimeout(() => {
    alert("run");
}, 1000);

//*/