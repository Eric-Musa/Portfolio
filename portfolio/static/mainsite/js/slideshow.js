const nPics = $(".slideshow").children().length;
const nShowing = 5;


function farLeftSlide () {
    return {
        "transform": "translatex(-60%) scale(.5)",
        "opacity": .2,
        "zIndex": -1,
    }
}

function nearLeftSlide () {
    return {
        "transform": "translatex(-45%) scale(.8)",
        "opacity": .5,
        "z-index": 0,
    }
}

function centerSlide () {
    return {
        "transform": "translatex(0) scale(1)",
        "opacity": 1,
        "z-index": 1,
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
        "opacity": .5,
        "z-index": 0,
    }
}

function farRightSlide () {
    return {
        "transform": "translatex(0) scale(.2)",
        "opacity": .2,
        "z-index": -2,
    }
}

function hiddenSlide () {
    return {
        "transform": "translatex(-60%) scale(.5)",
        "opacity": 0,
        "z-index": -1,
    }
}

export function iterateSlideshow () {
    const checkedVal = parseInt($("input[name=slider]:checked").val());     
    for (var i = checkedVal-1; i < nPics; i++){
        const valDiff = checkedVal - checkedVal;
        if (valDiff == -2) {
            $(`pic-${checkedVal}`).css(farLeftSlide());
        } else if (valDiff == -1) {
            $(`pic-${checkedVal}`).css(nearLeftSlide());
        } else if (valDiff == 0) {
            $(`pic-${checkedVal}`).css(centerSlide());
            $(`pic-${checkedVal} .img`).css(centerSlideShadow());
        } else if (valDiff == 1) {
            $(`pic-${checkedVal}`).css(nearRightSlide());
        } else if (valDiff == 2) {
            $(`pic-${checkedVal}`).css(farRightSlide());
        } else {
            $(`pic-${checkedVal}`).css(hiddenSlide());
        }
    }
}
