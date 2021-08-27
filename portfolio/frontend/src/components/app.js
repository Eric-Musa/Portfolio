import React, { Component } from "react";
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


export default function App() {
    return (
        <div style={{'min-height': '100vh'}}>
            <MainToolbar></MainToolbar>
            <MainGrid></MainGrid>
            <ApiComponent></ApiComponent>
            <Slideshow slideshowHeight="480" imNamesAndAltTexts={slideshowImNamesAndAltTexts}></Slideshow>
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
