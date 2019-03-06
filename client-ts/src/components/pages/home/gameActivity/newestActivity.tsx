import * as React from 'react';
import ActivityItems from "./activityItems";

class NewestActivity extends React.Component {
    public render(){
        return(
            <div>
                <ActivityItems 
                    coverSrc="http://192.168.1.101:8000/gamenews/2.png"
                    gameIconSrc="http://192.168.1.101:8000/gameicon/bh3.png"
                    gameName="崩坏三"
                    gameScore="8.4"
                    activityIntro="空之律者觉醒"
                />
            </div>
        )
    }
}

export default NewestActivity;