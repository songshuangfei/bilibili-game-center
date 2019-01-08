import * as React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ImgLoadingIcon } from "../icons"

const Banner = (props:{
    width:string,
    height:string,
    items:Array<{img:string,link:string}>
})=>{
    return(
        <div style={{
            backgroundColor:"#fff",
            backgroundImage:`url(${ImgLoadingIcon})`,
            backgroundPosition:"center",
            backgroundRepeat:"no-repeat",
            backgroundSize:"3rem auto",
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
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default Banner;