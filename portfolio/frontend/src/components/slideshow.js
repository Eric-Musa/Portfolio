import React, { useState, useEffect } from "react";
import "../../static/styling/slideshow.scss";


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

    const [index, setIndex] = useState(0);

    useEffect(() => {
        console.log(index)
    });

    return (
        <div className="slideshow">
            <div className="slideshow-container" onChange={(e) => setIndex(e.target.value)}>
                {IMG_NAMES_AND_ALTS.map(([imgName, altText], i) => (
                        <label className={"slide " + getSlideType(i, index)} id={"slide-" + i}>
                            <input type="radio"
                                value={i}
                                checked={index === i}
                                style={{ display: 'none' }}/>
                            <img src={"/static/images/" + imgName} alt={altText}/>
                        </label>
                    ))
                }
            </div>
        </div>
    );
    
}
