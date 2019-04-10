import axios from "axios";
import { appconfig } from "src/appConfig"
const {apiRoot} = appconfig

async function homeBannerApi (succeed?:(data:bannerItemI[])=>void, failed?:()=>void) {
    const result = await axios.get(`${apiRoot}/bookgame`);
    console.log(result.data)
}


export {
    homeBannerApi
}