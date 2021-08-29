import React from "react";
import { render } from "react-dom";
import Slideshow from './slideshow'
import MainToolbar from "./mainToolbar";
import MainGrid from "./mainGrid";
import ApiComponent from "./apiCall";
import SocialMediaNavBar from "./SocialMediaToolbar";

const slideshowImNamesAndAltTexts = [
    ["me_grand_tetons.jpg", "Me at Grand Tetons!"],
    ["dancing_at_oxford.jpg", "Us dancing at Oxford Housing!"],
    ["me_sand_dunes.jpg", "Me at Great Sand Dunes!"],
    ["boys_on_the_roof.jpg", "Boys on the roof at Oxford!"],
    ["me_grad_pic.jpg", "Me in graduation garb!"],
    ["boys_at_the_stadium.jpg", "Boys at Michigan Stadium!"],
];

const slideshowProps = {
    imNamesAndAltTexts: slideshowImNamesAndAltTexts,
    interval: 4000,
    aspectRatio: 16/9,
    heightPercent: "80%",
    maxHeight: 720,
    maxWidth: 1600,
    margin: 20,
    transitionTime: 1.25,
    clickFactor: 1.5,
    initIndex: Math.floor(Math.random() * slideshowImNamesAndAltTexts.length)
}


export default function App() {
    return (
        <div style={{'min-height': '100vh'}}>
            <MainToolbar></MainToolbar>
            <MainGrid></MainGrid>
            <ApiComponent></ApiComponent>
            <Slideshow props={slideshowProps} ></Slideshow>
            <MainGrid></MainGrid>
            <MainGrid></MainGrid>
            <MainGrid></MainGrid>
            <MainGrid></MainGrid>
            <SocialMediaNavBar></SocialMediaNavBar>
        </div>
    );
}
const appDiv = document.getElementById("app");
render(<App />, appDiv)
