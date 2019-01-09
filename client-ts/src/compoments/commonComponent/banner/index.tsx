import * as React from 'react';
import { Carousel } from 'react-responsive-carousel';
import {Link} from "react-router-dom"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./banner.css"

const Banner = (props:{
    width:string,
    height:string,
    items:Array<{img:string,link:string}>
})=>{
    return(
        <div style={{
            backgroundColor:"#fff",
            height:props.height,
            width:props.width,
        }}>
            <Carousel 
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                autoPlay={true}
                infiniteLoop={true}
            >
                {props.items.map(v=>(
                    <div key={v.link}>
                        <img style={{height:props.height}}  src={v.img} alt=""/>
                        <Link to={v.link} className="banner-link"/>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default Banner;