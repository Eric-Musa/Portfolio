import React, { Component } from "react";
import { render } from "react-dom";
import Slideshow from './slideshow'

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
        <>
            <Slideshow slideshowHeight="480" imNamesAndAltTexts={slideshowImNamesAndAltTexts}></Slideshow>
        </>
    );
}
const appDiv = document.getElementById("app");
render(<App />, appDiv)
