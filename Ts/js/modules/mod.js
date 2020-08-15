"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dburl1 = exports.save = exports.getinfo = void 0;
let dburl1 = "xxxxxx";
exports.dburl1 = dburl1;
function getinfo() {
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
exports.getinfo = getinfo;
function save() {
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
exports.save = save;
