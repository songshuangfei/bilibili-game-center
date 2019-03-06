import * as React from 'react';
import ActivityItems from "./activityItems";
import {ImgLoadingIcon} from "src/components/icons"

class PreviousActivity extends React.Component {
    public render(){
        return(
            <div>
                
                {
                    [0,1,2,3,4].map(v=>(
                        <ActivityItems 
                            key={v}
                            coverSrc="#"
                            gameIconSrc={ImgLoadingIcon}
                            gameName="bilibili"
                            gameScore="0"
                            activityIntro="bilibili"
                        />
                    ))
                }
            </div>
        )
    }
}

export default PreviousActivity;