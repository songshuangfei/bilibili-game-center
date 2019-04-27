export default function (queryStr: string){
    let result:any = {};
    for( let item of queryStr.split('&')) {
        let t = item.split('=');
        result[t[0]] = t[1]
    }

    return result;
}