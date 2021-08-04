// REFERENCED OBJECTS

$(document).ready(onPageLoad);


// RUN THIS FUNCTION ON PAGE LOAD
function onPageLoad () {
    updateSummary()
    addListeners()
}




function updateSummary () {
    const initDate = new Date('July 22, 2021 19:00:00 GMT-5:00');
    const today = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }));
    const daysDiff = Math.ceil(Math.abs(today - initDate) / 1000 / 24 / 60 / 60);
    const weeksDiff = Math.floor(daysDiff / 7) + 1;
    const summaryText = "It's obviously a big WIP! The cloud instance serving this site" +
                        " was created on July 22, 2021, so it's been about " + weeksDiff + 
                        " weeks and change since I began my journey towards becoming" +
                        " a full stack developer. Check back periodically as I make improvements :)";
    $("#summary").html(summaryText);
}

function addListeners () {
    // addSlideshowBackgroundTransition()
}

function addSlideshowBackgroundTransition () {
    const transition = () => {$(".middle").toggleClass('blue');};
    $(".slideshow-input").on("change", () => {
        transition()
        // setTimeout(transition, 500);
    });
}
