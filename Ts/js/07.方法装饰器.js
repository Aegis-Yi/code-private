"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
{
    // 普通装饰器
    function logClass(params) {
        console.log(params);
        params.prototype.apiUrl = "动态的扩展属性";
        params.prototype.run = () => console.log("我是run方法");
    }
    let HttpClient = class HttpClient {
        getData() {
        }
    };
    HttpClient = __decorate([
        logClass
    ], HttpClient);
    let http = new HttpClient();
    // console.log(http.apiUrl);
    // http.run();
}
{
    // 装饰器工厂
    function LogClass(params) {
        return (target) => {
            console.log(target);
            console.log(params);
            target.prototype.apiUrl = params;
        };
    }
    let HttpClient = class HttpClient {
        getData() {
        }
    };
    HttpClient = __decorate([
        LogClass("http://www.bilibili.com/api")
    ], HttpClient);
    let http = new HttpClient();
    // console.log(http.apiiUrl);
}
{ // 修改类中的属性
    function LogClass(params) {
        console.log(params);
        return class extends params {
            constructor() {
                super(...arguments);
                this.apiUrl = "我是修改后的apiUrl";
            }
            getDate() {
                this.apiUrl += "-------";
                console.log(this.apiUrl);
            }
        };
    }
    let HttpClient = class HttpClient {
        constructor() {
            this.apiUrl = "我是构造函数中的apiUrl";
        }
        getDate() {
            console.log(this.apiUrl);
        }
    };
    HttpClient = __decorate([
        LogClass
    ], HttpClient);
    let http = new HttpClient();
    // http.getDate();
}
{ // 属性装饰器
    function LogClass(params) {
        return (target, attr) => {
            console.log(target);
            console.log(attr);
            target[attr] = params;
        };
    }
    class HttpClient {
        getDate() {
            console.log(this.apiUrl);
        }
    }
    __decorate([
        LogClass("http://bilibili.com")
    ], HttpClient.prototype, "apiUrl", void 0);
    const http = new HttpClient();
    http.getDate();
}
{ // 方法装饰器
    function logMethod(params) {
        return (target, methodname, desc) => {
            console.log(target);
            console.log(methodname);
            console.log(desc);
            console.log(desc.value);
            target.url = "http://google.com"; // 修改属性
            target.run = () => {
                console.log("runing");
            };
            desc.value = (...args) => {
                args.map((value) => {
                    return String(value);
                });
                args.map((value) => String(value));
                console.log(args);
            };
        };
    }
    class HttpClient {
        getdata() {
            console.log(this.url);
        }
    }
    __decorate([
        logMethod("http://www.bilibili.com")
    ], HttpClient.prototype, "getdata", null);
    const http = new HttpClient();
    http.getdata(123, "xxxx");
    http.run();
}
