let dburl1 = "xxxxxx";

export function getinfo(): any[] { // 使用export把对应的方法或数据暴露
    console.log("获取数据....");

    return [
        {
            title: "123123"
        },
        {
            title: "321321"
        }
    ];
}

export function save(): any[] {
    console.log("保存数据...");

    return [
        {
            title: "123123"
        },
        {
            title: "321321"
        }
    ];
}

export { dburl1 };
