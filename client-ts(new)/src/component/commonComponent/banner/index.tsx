import * as React from 'react';
import { Carousel } from 'react-responsive-carousel';
import {Link} from "react-router-dom";
import {ImgLoadingIcon} from "src/compoments/icons"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./banner.css";


const Banner = (props:{width:string, height:string, items:Array<{imgSrc:string,link:string}> })=>{
    const content = (
        <Carousel 
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
        >
            {props.items.map(v=>(
                <div key={v.link}>
                    <img style={{height:props.height}}  src={v.imgSrc} alt=""/>
                    <Link to={v.link} className="banner-link"/>
                </div>
            ))}
        </Carousel>
    );
    return(
        <div className="banner-out" style={{
            backgroundColor:"#fff",
            backgroundImage:`url(${ImgLoadingIcon})`,
            height:props.height,
            width:props.width,
        }}>
            {props.items.length === 0?"":content}
        </div>
    );
}

export default Banner;