// @name     typescript学习笔记
// @author   Aegis-Yi

// Typescript中的接口

// <summary>
// 属性接口
// </summary>

interface fullName {
	firstname: string;
	secondname: string;
	thirdname?: string; // 可选属性 "?"
}
interface Age extends fullName {
	age: number;
}

function printName(name: fullName) {
	if (name.thirdname) {
		alert(name.firstname + "--" + name.secondname + name.thirdname);
	} else {
		alert(name.firstname + "--" + name.secondname);
	}
}
function printInfo(info: Age) {
	alert(info.firstname + info.secondname + "--" + info.age);
}

// printName({
//     firstname: "张",
//     secondname: "三",
//     //thirdname:"可选"
// })

const obj = {
	firstname: "李",
	secondname: "四",
	age: 20,
};

// printInfo(obj);

//*/

// <summary>
// 函数类型接口
// </summary>
//*

type encrypt = (key: string, value: string) => string;

var md5: encrypt = function (key: string, value: string): string {
	return key + value;
};

var sha1: encrypt = function (key: string, value: string): string {
	return key + `---` + value;
};

// alert(md5("name", "zhangsan"));
// alert(sha1("name", "zhangsan"));

//*/

// <summary>
// 可索引接口,数组,对象的约束
// </summary>
//*

///对数组的约束
interface userarr {
	[index: number]: string;
}

var arr1: userarr[] = ["aaa", "bbb"];
for (let i of arr1) {
	// alert(i);
}

///对对象的约束
interface userobj {
	[index: string]: string;
}

var arr2: userobj = { name1: "张三", name2: "李四" };

///类类型接口
interface animal {
	name: string;
	eat(str: string): void;
}

class dog1 implements animal {
	name: string;
	constructor(name: string) {
		this.name = name;
	}

	eat() {
		alert(this.name + `吃狗粮`);
	}
}

class cat1 implements animal {
	name: string;
	constructor(name: string) {
		this.name = name;
	}

	eat() {
		alert(this.name + `吃猫粮`);
	}
}

new dog1("小黑").eat();
new cat1("小花").eat();

//*/
