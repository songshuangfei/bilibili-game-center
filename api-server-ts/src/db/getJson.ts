import * as fs from "fs";

const { mediaFileRoot } = JSON.parse(fs.readFileSync("appConfig.json").toString());;

// 给src数据加上静态资源艮路径
function rowPreprocessing(rows:any[],jsonName:string){
    let resRows:any[]=[...rows];
    switch(jsonName){
    case "users":
        for(let row of resRows){
            row["headPicSrc"] = mediaFileRoot + row["headPicSrc"];
            row["coverSrc"] = mediaFileRoot + row["coverSrc"];
        }
        break;
    case "homeBanner":
        for(let row of resRows){
            row["imgSrc"] = mediaFileRoot + row["imgSrc"];
        }
        break;
    case "findBanner":
        for(let row of resRows){
            row["imgSrc"] = mediaFileRoot + row["imgSrc"];
        }
        break;
    case "publishedGames":
        for(let row of resRows){
            row["gameIconSrc"] = mediaFileRoot + row["gameIconSrc"];
            row["gameCover"] = mediaFileRoot + row["gameCover"];
        }
        break;
    case "unpublishedGames":
        for(let row of resRows){
            row["gameIconSrc"] = mediaFileRoot + row["gameIconSrc"];
            row["gameCover"] = mediaFileRoot + row["gameCover"];
        }
        break;
    case "strategys":
        for(let row of resRows){
            row["coverSrc"] = mediaFileRoot + row["coverSrc"];
        }
        break;
    case "gameActivities":
        for(let row of resRows){
            row["coverSrc"] = mediaFileRoot + row["coverSrc"];
        }
        break;
    case "videoStrategy":
        for(let row of resRows){
            row["coverImgSrc"] = mediaFileRoot + row["coverImgSrc"];
        }
    break;
    default:
        break;
    }
    return resRows;
}

function _getJson (jsonName:string){
    return new Promise<any[]>((rs,rj)=>{
        fs.readFile(`./data/${jsonName}.json`,(err, data)=>{
            if (err) {
                rj(err);
            } else {
                let row = JSON.parse(data.toString());
                rs(rowPreprocessing(row,jsonName));
            }
        })
    });
}

async function getJson(jsonName:string):Promise<any[]>{
    const rows = await _getJson(jsonName);
    return rows;
}

export default getJson;