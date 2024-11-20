import React from "react";

import "../assets/css/Layout/Body.scss";

import reseau_plate from '../assets/img/genal/reseau_plate.png'
import starts from '../assets/img/genal/stars.png'
import amelia from '../assets/img/genal/amelia.png'

import Header from "./Header.jsx";

import Home from '../views/Home';
import Buy from "../views/Buy.jsx";
import Story from "../views/Story.jsx";
import Media from "../views/Media";
import Footer from "./Footer.jsx";
import Patreon from "../views/Patreon";

export default class Body extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        currentTarget: 'Home'
    }

    scrollPos = (event) => {
        let homeHeight = document.getElementById('Home').clientHeight
        let buyHeight = document.getElementById('Buy').clientHeight
        let storyHeight = document.getElementById('Story').clientHeight
        let mediaHeight = document.getElementById('Media').clientHeight
        let containHeight = document.getElementById('Body').scrollHeight
        let windowHeight = document.getElementById('Body').clientHeight

        let currentHeight = event.target.scrollTop
        let currentTarget = ''

        if (currentHeight < homeHeight) {
            currentTarget = 'Home'
        } else if (homeHeight === currentHeight || currentHeight < homeHeight + buyHeight) {
            currentTarget = 'Buy'
        } else if (homeHeight + buyHeight === currentHeight || currentHeight < homeHeight + buyHeight + storyHeight) {
            currentTarget = 'Story'
        } else if (homeHeight + buyHeight + storyHeight === currentHeight || currentHeight < homeHeight + buyHeight + storyHeight + mediaHeight) {
            currentTarget = 'Media'
        } else {
            currentTarget = 'About'
        }
        this.setState({currentTarget: currentTarget})
    }

    render() {
        return (
            <div id={'Body'} onScroll={event => this.scrollPos(event)} className={'body'}>
                <Header target={this.state.currentTarget}></Header>
                <Home></Home>
                <Buy></Buy>
                <Story></Story>
                <Media></Media>
                <Patreon></Patreon>
                <Footer></Footer>
                {/*<div className={'background-img'}><img src={starts} alt={''} /></div>*/}
                {/*<div className={'background-img'} style={{backgroundImage: `url(${reseau_plate})`, backgroundSize: 'cover'}}></div>*/}
                {/*<div className={'background-img'}><img src={amelia} alt={''}/></div>*/}
            </div>
        )
    }
}
