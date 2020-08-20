// @name     typescript学习笔记
// @author   Aegis-Yi

// typescript泛型

// <summary>
// 泛型定义 obj<T>
// </summary>

function getInfo<T>(value: T): T {
	return value;
}

getInfo<string>("我是张三");

getInfo<number>(123);

// <summary>
// 泛型类
// </summary>

class MyClass<T> {
	public list: T[] = [];

	add(value: T): void {
		this.list.push(value);
	}

	min(): T {
		let minNUM = this.list[0];
		for (let i of this.list) {
			if (minNUM > i) {
				minNUM = i;
			}
		}
		return minNUM;
	}
}

let m1 = new MyClass<number>();

m1.add(2);
m1.add(3);
m1.add(1);

let m2 = new MyClass<string>();

m2.add("a");
m2.add("b");
m2.add("c");

// <summary>
// 泛型接口
// </summary>

type ConfigFn = <T>(value: T) => T;

let getDate: ConfigFn = <T extends {}>(value: T): T => value;

getDate<string>("1234");

type ConfigFj<T> = (value: T) => T;

function GetData<T>(value: T) {
	return value;
}

let myData: ConfigFj<string> = GetData;

myData("2020");

// <summary>
// 泛型类加强
// <summary>

{
	class User {
		username: string | undefined;
		psword: string | undefined;
	}

	class Mysql {
		add(user: User): boolean {
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
		title: string | undefined;
		desc: string | undefined;
		status: string | undefined;
	}

	class Mysql {
		add(info: AticlaCate): boolean {
			console.log(info);
			return true;
		}
	}
}

{
	class Mysql<T> {
		add(info: T): boolean {
			console.log(info);
			return true;
		}
	}

	class User {
		username: string | undefined;
		psword: string | undefined;
	}

	class AticlaCate {
		title: string | undefined;
		desc: string | undefined;
		status: string | undefined;
		constructor(params: {
			// 强制进行函数传入以及函数校验
			title: string | undefined;
			desc: string | undefined;
			status: string | undefined;
		}) {
			this.title = params.title;
			this.desc = params.desc;
			this.status = params.status;
		}
	}

	let u = new User();
	u.username = "zhangsan";
	u.psword = "123456";

	let DB = new Mysql<User>();
	DB.add(u);

	let a = new AticlaCate({
		title: "BOOK",
		desc: "1111",
		status: "2222",
	});
	let db = new Mysql<AticlaCate>();
	db.add(a);
}
