import * as React from 'react';
import "./find-type.css";
import { findGift,findRank,findKinds } from "src/components/icons";
import {Link} from "react-router-dom";

class FindType extends React.Component {
    public render(){
        return(
            <div className="find-type">
                <div className="type">
                    <img src={findRank} alt=""/><span>排行</span>
                    <Link to="/rank"/>
                </div>
                <div className="v-line"/>
                <div className="type">
                    <img src={findKinds} alt=""/><span>分类</span>
                    <Link to="/kind"/>
                </div>
                <div className="v-line"/>
                <div className="type">
                    <img src={findGift} alt=""/><span>礼包</span>
                    <Link to="/gift"/>
                </div>
            </div>
        )
    }
}

export default FindType;