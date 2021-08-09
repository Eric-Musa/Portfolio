const nPics = $(".slideshow").children().length;


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

export function slideshowTransition () {
    const checkedVal = parseInt($("input[name=slider]:checked").val());
    for (var i = 1; i < nPics + 1; i++){
        const valDiff = i - checkedVal;
        // console.log(i, valDiff, valDiff - nPics, valDiff + nPics)
        if (valDiff == -2 || valDiff - nPics == -2) {
            $(`#pic-${i}`).css(farLeftSlide());
        } else if (valDiff == -1 || valDiff - nPics == -1) {
            $(`#pic-${i}`).css(nearLeftSlide());
        } else if (valDiff == 0) {
            $(`#pic-${i}`).css(centerSlide());
            // $(`#pic-${i} img`).css(centerSlideShadow());
        } else if (valDiff == 1 || valDiff + nPics == 1) {
            $(`#pic-${i}`).css(nearRightSlide());
        } else if (valDiff == 2 || valDiff + nPics == 2) {
            $(`#pic-${i}`).css(farRightSlide());
        } else {
            $(`#pic-${i}`).css(hiddenSlide());
        }
    }
}
