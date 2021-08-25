import React, { useState, useEffect } from "react";
import { render } from "react-dom";

// const nPics = $(".slideshow").children().length;
function farLeftSlide () {
    return {
        "transform": "translatex(-75%) scale(.5)",
        // "opacity": .2,
        "filter": "brightness(50%) blur(5px)",
        "z-index": 1,
    }
}

function nearLeftSlide () {
    return {
        "transform": "translatex(-45%) scale(.8)",
        // "opacity": .5,
        "filter": "brightness(75%) blur(2px)",
        "z-index": 2,
    }
}

function centerSlide () {
    return {
        "transform": "translatex(0) scale(1)",
        // "opacity": 1,
        "filter": "brightness(100%)",
        "z-index": 3,
    }
}

function centerSlideShadow () {
    return {        
        "box-shadow": "5px 5px 5px rgba(81, 81, 81, 0.47)",
    }
}

function nearRightSlide () {
    return {
        "transform": "translatex(45%) scale(.8)",
        // "opacity": .5,
        "filter": "brightness(75%) blur(2px)",
        "z-index": 2,
    }
}

function farRightSlide () {
    return {
        "transform": "translatex(75%) scale(.5)",
        // "opacity": .2,
        "filter": "brightness(50%) blur(5px)",
        "z-index": 1,
    }
}

function hiddenSlide () {
    return {
        "transform": "translatex(0%) scale(.2)",
        // "opacity": 0,
        "filter": "brightness(0)",
        "z-index": 0,
    }
}

// export function slideshowTransition () {
//     const checkedVal = parseInt($("input[name=slider]:checked").val());
//     for (var i = 1; i < nPics + 1; i++){
//         const valDiff = i - checkedVal;
//         // console.log(i, valDiff, valDiff - nPics, valDiff + nPics)
//         if (valDiff == -2 || valDiff - nPics == -2) {
//             $(`#pic-${i}`).css(farLeftSlide());
//         } else if (valDiff == -1 || valDiff - nPics == -1) {
//             $(`#pic-${i}`).css(nearLeftSlide());
//         } else if (valDiff == 0) {
//             $(`#pic-${i}`).css(centerSlide());
//             // $(`#pic-${i} img`).css(centerSlideShadow());
//         } else if (valDiff == 1 || valDiff + nPics == 1) {
//             $(`#pic-${i}`).css(nearRightSlide());
//         } else if (valDiff == 2 || valDiff + nPics == 2) {
//             $(`#pic-${i}`).css(farRightSlide());
//         } else {
//             $(`#pic-${i}`).css(hiddenSlide());
//         }
//     }
// }


// function Slide (props) {
//     return (
//         <label className={props.labelName}>
//             <input type="radio" 
//                 className="slide" 
//                 // name="slide" 
//                 value={this.state.index === props.value} 
//                 id={props.id} 
//                 checked={props.checked} 
//                 style={{ display: 'none' }}/>
//             <img src=`/static/images/${props.imageName}` alt={props.altText}/>
//         </label>
//     )
// }
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
        // for (var i = 0; i < nPics; i++){
        //     const valDiff = i - index;
        //     // console.log(i, valDiff, valDiff - nPics, valDiff + nPics)
        //     if (valDiff == -2 || valDiff - nPics == -2) {
        //         $(`#pic-${i}`).css(farLeftSlide());
        //     } else if (valDiff == -1 || valDiff - nPics == -1) {
        //         $(`#pic-${i}`).css(nearLeftSlide());
        //     } else if (valDiff == 0) {
        //         $(`#pic-${i}`).css(centerSlide());
        //         // $(`#pic-${i} img`).css(centerSlideShadow());
        //     } else if (valDiff == 1 || valDiff + nPics == 1) {
        //         $(`#pic-${i}`).css(nearRightSlide());
        //     } else if (valDiff == 2 || valDiff + nPics == 2) {
        //         $(`#pic-${i}`).css(farRightSlide());
        //     } else {
        //         $(`#pic-${i}`).css(hiddenSlide());
        //     }
        // }
    });

    return (
        <div className="slideshow-container" onChange={(e) => setIndex(e.target.value)}>
            {IMG_NAMES_AND_ALTS.map(([imgName, altText], i) => (
                    <label className={getSlideType(i, index)} id={"slide-" + i}>
                        <input type="radio" 
                            value={i} 
                            checked={index === i} 
                            style={{ display: 'none' }}/>
                        <img src={"/static/images/" + imgName} alt={altText}/>
                    </label>
                ))
            }
        </div>
    );
    // }
    
}
