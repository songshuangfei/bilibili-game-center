import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

class Setting extends React.Component {
    public props: RouteComponentProps;
    public render(){
        return(
            <div>
                <div  onClick={this.props.history.goBack}>
                    {"<"}返回
                </div>
            </div>
        )
    }
}

export default Setting;