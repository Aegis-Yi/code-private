 {
    // 普通装饰器
    function logClass(params: any) {
        console.log(params);
        params.prototype.apiUrl = "动态的扩展属性";
        params.prototype.run = () => console.log("我是run方法");
    }

    @logClass
    class HttpClient {
        getData() {

        }
    }

    let http: any = new HttpClient();

    // console.log(http.apiUrl);
    // http.run();
}

{
    // 装饰器工厂
    function LogClass(params: any) {

        return (target: any) => {
            console.log(target);
            console.log(params);

            target.prototype.apiUrl = params;
        };
    }

    @LogClass("http://www.bilibili.com/api")
    class HttpClient {
        getData() {

        }
    }

    let http: any = new HttpClient();
    // console.log(http.apiiUrl);
}

{   // 修改类中的属性
    function LogClass(params: any) {
        console.log(params);
        return class extends params {
            apiUrl: any = "我是修改后的apiUrl";
            getDate() {
                this.apiUrl += "-------";
                console.log(this.apiUrl);
            }
        };
    }
    @LogClass
    class HttpClient {
        public apiUrl: string | undefined;
        constructor() {
            this.apiUrl = "我是构造函数中的apiUrl";
        }

        getDate() {
            console.log(this.apiUrl);
        }
    }

    let http: any = new HttpClient();
    // http.getDate();
}

{   // 属性装饰器
    function LogClass(params: any) {
        return (target: any, attr: any) => {
            console.log(target);
            console.log(attr);
            target[attr] = params;
        };

    }

    class HttpClient {
        @LogClass("http://bilibili.com")
        public apiUrl: string | undefined;

        getDate() {
            console.log(this.apiUrl);
        }
    }
    const http = new HttpClient();
    http.getDate();
}

{// 方法装饰器
    function logMethod(params: any) {
        return (target: any, methodname: any, desc: any) => {
            console.log(target);
            console.log(methodname);
            console.log(desc);
            console.log(desc.value);


            target.url = "http://google.com";  // 修改属性
            target.run = () => {               // 添加新方法
                console.log("runing");
            };

            desc.value = (...args: any[]) => { // 修改方法
                args.map((value) => {
                    return String(value);
                });
                args.map((value) => String(value));
                console.log(args);
            };
        };
    }

    class HttpClient {
        public url: string | undefined;
        @logMethod("http://www.bilibili.com")
        getdata() {
            console.log(this.url);
        }
    }

    const http: any = new HttpClient();
    http.getdata(123, "xxxx");
    http.run();
}
