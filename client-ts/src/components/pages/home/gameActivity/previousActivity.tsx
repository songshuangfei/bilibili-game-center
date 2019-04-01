import * as React from 'react';
import ActivityItems from "./activityItems";

class PreviousActivity extends React.Component {
    public render(){
        return(
            <div>
                {
                    [0,1,2,3,4].map(v=>(
                        <ActivityItems 
                            key={v}
                            coverSrc=""
                            gameIconSrc=""
                            gameName="bilibili"
                            gameScore="0"
                            activityIntro="bilibili"
                            gameId={v.toString()}
                        />
                    ))
                }
            </div>
        )
    }
}

export default PreviousActivity;