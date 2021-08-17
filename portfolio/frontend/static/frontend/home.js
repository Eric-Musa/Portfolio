// GLOBAL CONSTS
const nPics = 3;
const shortInterval = 5000;
const longInterval = 10000;


// REFERENCED OBJECTS
var slideshowInterval;
var slideshowTimeout;


// RUN THIS FUNCTION ON PAGE LOAD
$(document).ready(onPageLoad);


function onPageLoad () {
    updateSummary();
    setSlideshowInterval();
    addListeners()
    // addSlideshowAutoChange();
}


function updateSummary () {
    const today = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }));

    const initDate = new Date('July 22, 2021 19:00:00 GMT-5:00');
    const initDaysDiff = Math.ceil(Math.abs(today - initDate) / 1000 / 24 / 60 / 60);
    const initWeeksDiff = Math.round(initDaysDiff * 2 / 7) / 2  // Math.floor(initDaysDiff / 7) + 1;

    const reactDate = new Date('August 3, 2021 19:00:00 GMT-5:00');
    const reactDaysDiff = Math.ceil(Math.abs(today - reactDate) / 1000 / 24 / 60 / 60);
    const reactWeeksDiff = Math.round(reactDaysDiff * 2 / 7) / 2;

    const summaryText = "It's obviously a big WIP! The cloud instance serving this site" +
                        " was created on July 22, 2021, so it's been about " + initWeeksDiff + 
                        " weeks and change since I began my journey towards becoming" +
                        " a full stack developer. I have been locally integrating React into" +
                        " the site for the past " + reactWeeksDiff + " weeks, and will push" +
                        " changes to the cloud once they're complete!";
    $("#summary").html(summaryText);
}

function addListeners () {
    // addSlideshowBackgroundTransition()
    $("input[name=slider]").click(slideshowClicked);
}

// function addSlideshowBackgroundTransition () {
//     const transition = () => {$(".middle").toggleClass('blue');};
//     $(".slideshow-input").on("change", () => {
//         transition()
//         // setTimeout(transition, 500);
//     });
// }


function setSlideshowInterval () {
    slideshowInterval = window.setInterval(autoIterateSlideshow, shortInterval);
}

function slideshowClicked () {
    $(".picture").css({"transition": "transform 0.5s ease"})  // revert back to fast transition for clicks
    slideshowInterval = window.clearInterval(slideshowInterval);
    clearTimeout(slideshowTimeout);
    slideshowTimeout = setTimeout(setSlideshowInterval, shortInterval/2);
}

function autoIterateSlideshow () {
    const checkedVal = parseInt($("input[name=slider]:checked").val());
    const nextVal = (checkedVal == nPics) ? 1 : checkedVal + 1;
    $("input[name=slider][value="+nextVal+"]").prop('checked', true);
    $(".picture").css({"transition": "transform 1.5s ease"})  // make auto transition slower
}

