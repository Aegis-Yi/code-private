"use strict";
/*

功能:定义一个操作数据库的库 支持Mysql Mssql MongDB

要求1.Mysql Mssql MongDB功能一样 都有 add update delate get方法

注意:约束统一的规范,以及代码重用

解决方法:需要约束规范所以要定义接口,需要代码重用所以要泛型

    1.接口:在面对对象的编程中,接口实一种规范的定义,它定义了行为和动作的规范

    2.泛型

*/
// 定义一个操作Mysql的类
class MysqlIDB {
    add(info) {
        throw new Error("Method not implemented.");
    }
    update(info, id) {
        throw new Error("Method not implemented.");
    }
    delate(id) {
        throw new Error("Method not implemented.");
    }
    get(id) {
        throw new Error("Method not implemented.");
    }
}
class MssqlIDB {
    add(info) {
        throw new Error("Method not implemented.");
    }
    update(info, id) {
        throw new Error("Method not implemented.");
    }
    delate(id) {
        throw new Error("Method not implemented.");
    }
    get(id) {
        throw new Error("Method not implemented.");
    }
}
class MongDBIDB {
    add(info) {
        throw new Error("Method not implemented.");
    }
    update(info, id) {
        throw new Error("Method not implemented.");
    }
    delate(id) {
        throw new Error("Method not implemented.");
    }
    get(id) {
        throw new Error("Method not implemented.");
    }
}
// 操作用户表 定义一个User类和数据表映射
class User {
}
