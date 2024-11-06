import React from "react";

import '../assets/css/Home.scss'

import Logo from '../assets/img/body/home/game_logo.png';
import Steam from '../assets/img/body/home/steam_top.png';
import Sekai from '../assets/img/body/home/sekai_top.png';
import Denpa from '../assets/img/body/home/denpa_top.png';
import Patreon from '../assets/img/body/home/patreon_top.png';

import HomeSeperatorPng from '../assets/img/body/home/head_seperator.png'

export default class Home extends React.Component {
    render() {
        return (
            <div className={'home-contain'}>
                <Title></Title>
                <HomeSeperator></HomeSeperator>
            </div>
        )
    }
}

class Title extends React.Component {

    state = {
        linkList: [
            { png: Steam, link: 'https://store.steampowered.com/app/1165870/Mahou_Arms' },
            { png: Sekai, link: 'https://sekaiproject.com/products/mahou-arms/' },
            { png: Denpa, link: 'https://denpasoft.com/products/mahou-arms/' },
            { png: Patreon, link: 'https://patreon.com/paperbag' },
        ]
    }

    render() {
        return (
            <div className={'title-contain'}>
                <img className={'logo'} src={Logo} alt={''}/>
                <div className={'text'}><h2>IN EARLY ACCESS NOW</h2></div>
                <div className={'store-contain'}>
                    { this.state.linkList.map((item, index) => {
                        return (
                            <a href={item.link} key={index}>
                                <img src={item.png} alt={''}/>
                            </a>
                        )
                    })}
                </div>
            </div>
        );
    }
}

class HomeSeperator extends React.Component {
    render() {
        return (
            <>
              <img src={HomeSeperatorPng} alt={''} className={'bottom-image'} />
            </>
        )
    }
}


