import React, { Component, useState, useEffect, useRef } from "react";
import "../../static/styling/slideshow.scss";
import useWindowDimensions from "./windowDimension";


const IMG_NAMES_AND_ALTS = [
    ["me_grand_tetons.jpg", "Me at Grand Tetons!"],
    ["dancing_at_oxford.jpg", "Us dancing at Oxford Housing!"],
    ["me_sand_dunes.jpg", "Me at Great Sand Dunes!"],
    ["boys_on_the_roof.jpg", "Boys on the roof at Oxford!"],
    ["me_grad_pic.jpg", "Me in graduation garb!"],
    ["boys_at_the_stadium.jpg", "Boys at Michigan Stadium!"],
];
const nPics = IMG_NAMES_AND_ALTS.length;


function getSlideType(i, index) {
    const valDiff = i - index;
    if (valDiff == -2 || valDiff - nPics == -2) {
        return "farLeftSlide";
    } else if (valDiff == -1 || valDiff - nPics == -1) {
        return "nearLeftSlide";
    } else if (valDiff == 0) {
        return "centerSlide";
    } else if (valDiff == 1 || valDiff + nPics == 1) {
        return "nearRightSlide";
    } else if (valDiff == 2 || valDiff + nPics == 2) {
        return "farRightSlide";
    } else {
        return "hiddenSlide";
    }
}

export default function Slideshow () {

    const [index, setIndex] = useState(Math.floor(Math.random() * nPics));
    const { height, width } = useWindowDimensions();

    const INTERVAL = 4000
    const timer = useRef({intervalID: null, timeoutID: null})

    useEffect(() => {setSlideshowInterval()
        return () => (timer.current.intervalID = clearInterval(timer.current.intervalID))
    }, []);

    function setSlideshowInterval () {
        timer.current.intervalID = setInterval(() => setIndex(prevIndex => (prevIndex+1) % 6), INTERVAL)
    }

    function clicked (event) {  // if an image is clicked...
        setIndex(event.target.value);  // the index is changed
        timer.current.intervalID = clearInterval(timer.current.intervalID)  // clear current interval
        clearTimeout(timer.current.timeoutID)  // clear any existing timer from a previous click
        timer.current.timeoutID = setTimeout(setSlideshowInterval, INTERVAL *  1.5)  // set timer to start interval
    }

    return (
        <div className="slideshow" 
            style={{"height": width < 600 ? (width * 4/5) + "px" : "480px"}}>

            <div className="slideshow-container" onChange={(e) => clicked(e)}>
                {IMG_NAMES_AND_ALTS.map(([imgName, altText], i) => (
                    <label className={"slide " + getSlideType(i, index)} 
                        id={"slide-" + i}
                        style={{"width": ((width-20)/2) + "px"}}>

                        <input type="radio"
                            value={i}
                            checked={index === i}
                            style={{ display: 'none' }}/>
                        <img src={"/static/images/" + imgName} alt={altText}/>
                    </label>
                ))}
            </div>
        </div>
    );
    
}
