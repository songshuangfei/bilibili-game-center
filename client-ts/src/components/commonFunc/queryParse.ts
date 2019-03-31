
const queryParse = (url:string, key:string) => {
    const query = url.split("?")[1];
    const keyValue = query.split("&");
    for(const v of keyValue){
        const kv = v.split("=");
        if(kv[0]===key){
            return {isFound:true,value:kv[1]};
        }
    }
    return {isFound:false,value:""}
}
export default queryParse