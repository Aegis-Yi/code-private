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
