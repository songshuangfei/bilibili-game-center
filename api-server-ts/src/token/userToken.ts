import * as jwt from 'jsonwebtoken';
import * as fs from "fs"

const { 
    tokenSecretKey,
    tokenMaxAge, 
    loginOverdueDays
} = JSON.parse(fs.readFileSync("appConfig.json").toString());

/**
 * 
 * @param uid 
 * 用户登录成功，根据用户id创建token
 */
function createUserToken(uid: string) {
    const resJson = {
        uid,
        loginDate: new Date()
    }
    const token = jwt.sign(resJson, String(tokenSecretKey), { expiresIn: `${tokenMaxAge}d` });
    return token;
}


function _parseUserToken(userToken: string) {
    return new Promise<any>((rs, rj) => {
        jwt.verify(userToken, String(tokenSecretKey), (err, json) => {
            if (err) {
                rj(err);
            } else {
                rs(json);
            }
        })
    })
}

async function parseUserToken(userToken: string):Promise<{err: jwt.VerifyErrors,parsedToken:any}> {
    try {
        const parsedToken = await _parseUserToken(userToken);
        return {
            err:null,
            parsedToken:parsedToken
        }
    } catch (err) {
        // token过期
        return{
            err:err,
            parsedToken:null
        }
    }
}



export {
    createUserToken,
    parseUserToken
}