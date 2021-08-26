import React, { Component, useState, useEffect, useRef } from "react";
import "../../static/styling/slideshow.scss";
import useWindowDimensions from "./windowDimension";



/**
 * Slideshow component
 * 
 */
export default function Slideshow (props) {
    const nPics = props.imNamesAndAltTexts.length

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

    function getSlideType(i) {
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
    return (
        <div className="slideshow-container" 
            style={{"height": width < (parseInt(props.slideshowHeight) * 5/4) ? (width * 4/5) + "px" : props.slideshowHeight + "px"}}>
            {/* ^^ responsive to screen width */}

            <div className="slideshow" onChange={(e) => clicked(e)}>
                {props.imNamesAndAltTexts.map(([imgName, altText], i) => (
                    <label className={"slide " + getSlideType(i)} 
                        id={"slide-" + i}
                        style={{"width": ((width-20)/2) + "px"}}>

                        <input type="radio"
                            className="slideshow-radio"
                            value={i}
                            checked={index === i}/>
                        <img src={"/static/images/" + imgName} alt={altText}/>
                    </label>
                ))}
            </div>
        </div>
    );
    
}
