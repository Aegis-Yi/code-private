// @name     typescript学习笔记
// @author   Aegis-Yi

//Typescript中的数据类型

//布尔类型(boolean)
/*

var a: boolean = true;
a = false;

//*/

//数值类型(number)
/*

var a: number = 123;
a = 3333;
console.log(a);

//*/

//字符串类型(srting)
/*

var a: string = "你好";
a = "你好ts!";
console.log(a);

//*/

//数组类型(array)
/*

//第一种定义方法
var arr1: number[] = [1, 2, 3, 4, 5];
var arr2: string[] = ["你好JS", "123", "abc"];
console.log(arr1);
console.log(arr2);

//第二种定义方法
var arr3: Array<number> = [1, 2, 3, 4, 5];
var arr4: Array<string> = ["你好TS", "123", "abc"];
console.log(arr3);
console.log(arr4);

//*/

//元组类型(tuple)
/*

var arr: [string, number, boolean] = ["ts", 123, true];
console.log(arr);

//*/

//枚举类型(enum)
/*

enum flag { 成功 = 1, 失败 = 0 };
var f: flag = flag.成功;
console.log(f);

enum color { red, yellow = 5, blue };
var a: color = color.red;
console.log(a);

var c: color = color.blue;
console.log(c);

//*/

//任意类型(any)
/*

var a: any = "str";
a = 123;
console.log(a);

var obox:any = document.getElementById('box');
obox.style.color = '#66CCFF';

//*/

//null和 undefined
/*

var a: null = null;
console.log(a);

var un: undefined = undefined;
console.log(un);

var num: number | undefined;
num = 123;
console.log(num);

//*/

//void类型
/*

function run():void | number{
    console.log("run");
}
run();

function num():number {
    return 123;
}
var a: number = num();
console.log(a);

//*/

//nerver类型
/*

var a: never = (() => {
    throw new Error("皓哥傻逼");    
})();
alert(a);

//*/