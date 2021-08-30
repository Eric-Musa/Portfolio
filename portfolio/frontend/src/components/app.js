import React from "react";
import { render } from "react-dom";

import { ThemeProvider } from "@material-ui/styles";
import { createTheme, responsiveFontSizes } from "@material-ui/core";
import { green, yellow, black, purple, red, blue, orange, grey } from "@material-ui/core/colors";

import ApiComponent from "./apiCall";
import BasicTextBox from "./basicTextBox";
import MainToolbar from "./mainToolbar";
import MainGrid from "./mainGrid";
import Slideshow from './slideshow'
import SocialMediaNavBar from "./socialMediaToolbar";

let theme = createTheme({
    palette: {
        primary: {
            dark: "#000",
            main: "#212121",
            light: "#f4f4f4",
            text: "#fff",
        },
        secondary: {
            dark: "#000140",
            main: "#062c6b",
            light: "#43549a",
            text: "#fff",
        }
    }
})
theme = responsiveFontSizes(theme)

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
    heightPercent: "85%",
    maxHeight: 720,
    maxWidth: 1600,
    margin: 20,
    transitionTime: 1.25,
    clickFactor: 1.5,
    initIndex: 'random'
}

const keyWords = [
    'ReactJS🧪', 'NodeJS☀️', 'SASS🖌️', 'HTML🗒️',
    'Django⚙️', 'REST-API💤', 'HTTPS✈️', 'Webpack🗃️',
    'GIT📝', 'AWS☁️', 'Lightsail⛵', 'Apache🤲', 
    'Material-UI🖥️', 'Babel📖', 'SQLite3📅',
    'Functional👷‍♂️', 'Responsive☎️', 'SPA📃'
]

function updateSummary () {
    const initDate = new Date('July 22, 2021 19:00:00 GMT-5:00');
    const today = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }));
    const daysDiff = Math.ceil(Math.abs(today - initDate) / 1000 / 24 / 60 / 60);
    const weeksDiff = Math.floor(daysDiff / 7) + 1;
    const summaryText = "Many improvements with nice techs have been made to" +
                        " the site and more  are planned!" +
                        " This site was created on July 22, 2021, about " + weeksDiff + 
                        " weeks and change ago, which is when my journey towards Full-Stack-dom began." +
                        " Continue checking back periodically as improvements are made :)";
    return summaryText
}

const wipHead = 'Welcome to my portfolio! React integration is underway!'
const wipBody = updateSummary()
const wipTail = 'Yours truly, Eric Musa'

export default function App() {
    // console.log(theme.palette.primary)
    return (
        <div style={{
            'min-height': '100vh',
            backgroundColor: theme.palette.primary.dark,
            }}>
            <ThemeProvider theme={theme}>
                {/* <MainToolbar></MainToolbar> */}
                <div style={{padding: '20px'}}>
                    <BasicTextBox text={wipHead} variant='h2'></BasicTextBox>
                    <BasicTextBox text={wipBody} textJustify='justify' variant='h5'></BasicTextBox>
                    <BasicTextBox text={wipTail} variant='h3'></BasicTextBox>
                </div>
                <MainGrid keyWords={keyWords} rows='4' ></MainGrid>
                {/* <ApiComponent></ApiComponent> */}
                <Slideshow props={slideshowProps} ></Slideshow>
                {/* <Slideshow props={slideshowProps} ></Slideshow> */}
                <MainGrid keyWords={keyWords} rows='4'></MainGrid>
                {/* <MainGrid></MainGrid>
                <MainGrid></MainGrid> */}
                {/* <MainGrid></MainGrid> */}
                <SocialMediaNavBar></SocialMediaNavBar>
            </ThemeProvider>
        </div>
    );
}
const appDiv = document.getElementById("app");
render(<App />, appDiv)
