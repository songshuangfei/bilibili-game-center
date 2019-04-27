import * as fs from "fs";

const db = function (jsonName:string) {
    return  new Promise<any>((rs,rj)=>{
        fs.readFile(`./data/${jsonName}`,(err, data)=>{
            if (err) {
                rj(err);
            } else {
                rs(JSON.parse(data.toString()).data);
            }
        })
    });
}
export default db;