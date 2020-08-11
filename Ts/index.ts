// @name     typescript学习笔记
// @author   Aegis-Yi

//Typescript中的接口

// <summary>
// 属性接口
// </summary>
//*
interface fullName {
    firstname: string;
    secondname: string;
    thirdname?: string;  //可选属性 "?"
}
interface Age extends fullName{
    age: number;
}
function printName(name: fullName) {
    if (name.thirdname) {
        alert(name.firstname + "--" + name.secondname + name.thirdname);
    }
    else {
        alert(name.firstname + "--" + name.secondname);
    }
}
function printInfo(info: Age) {
    alert(info.firstname + info.secondname + "--" + info.age);
}

printName({
    firstname: "张",
    secondname: "三",
    //thirdname:"可选"
})

var obj = {
    firstname: "李",
    secondname: "四",
    age: 20
}

//printInfo(obj);


