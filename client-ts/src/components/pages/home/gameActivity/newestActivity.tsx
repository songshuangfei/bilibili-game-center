import * as React from 'react';
import ActivityItems from "./activityItems";

class NewestActivity extends React.Component {
    public render(){
        return(
            <div>
                <ActivityItems 
                    coverSrc="//file.suafe.cn/blgc/gamenews/2.png"
                    gameIconSrc="//file.suafe.cn/blgc/gameicon/bh3.png"
                    gameName="崩坏三"
                    gameScore="8.4"
                    activityIntro="空之律者觉醒空之律者觉醒空之律者觉醒空之律者觉醒空之律者觉醒空之律者觉醒空之律者觉醒空之律者觉醒空之律者觉醒空之律者觉醒空之律者觉醒"
                    gameId="002"
                />
            </div>
        )
    }
}

export default NewestActivity;