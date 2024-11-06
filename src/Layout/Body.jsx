import React from "react";

import "../assets/css/Body.scss";

import reseau_plate from '../assets/img/genal/reseau_plate.png'
import starts from '../assets/img/genal/stars.png'

import Home from '../Views/Home';
import Buy from "../Views/Buy.jsx";
import Story from "../Views/Story.jsx";
import Media from "../Views/Media";
import Footer from "../Views/Footer";
import Patreon from "../Views/Patreon";

export default class Body extends React.Component {
    render() {
        return (
            <div className={'body'}>
                <Home></Home>
                <Buy></Buy>
                <Story></Story>
                <Media></Media>
                <Patreon></Patreon>
                <Footer></Footer>
                <div className={'background-img'}><img src={starts} alt={''} /></div>
                <div className={'background-img'} style={{backgroundImage: `url(${reseau_plate})`, backgroundSize: 'cover'}}></div>
            </div>
        )
    }
}