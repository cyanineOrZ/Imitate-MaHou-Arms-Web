import React from "react";
import '../assets/css/Layout/Header.scss'

import Discord_Png from '../assets/img/header/discord_small.png'
import Twitter_Png from '../assets/img/header/twitter_small.png'
import Youtube_Png from '../assets/img/header/youtube_small.png'

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'nav'}>
                <div className={'contain'}>
                    <HeaderMenu></HeaderMenu>
                    <SocialMenu></SocialMenu>
                </div>
            </div>
        )
    }
}

class HeaderMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        link: [
            { text: 'Home' },
            { text: 'Buy' },
            { text: 'Story' },
            { text: 'Media' },
            { text: 'Downloads' },
        ]
    }

    render() {
        return (
            <div className={'menu-contain'}>
                {this.state.link.map((item, index) => {
                    return (
                        <a className={'menu-item'} key={index}>{item.text}</a>
                    )
                })}
            </div>
        )
    }
}

class SocialMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        linkList: [
            { png: Discord_Png, link: 'https://discord.com/invite/uc5Njsy' },
            { png: Twitter_Png, link: 'https://twitter.com/mahouarms' },
            { png: Youtube_Png, link: 'https://youtube.com/channel/UCJDg4oX76d5kkwNwln6IV7A' }
        ],
    }

    render() {
        return (
            <div className={'social-contain'}>
                {this.state.linkList.map((item, index) => {
                    return (
                        <a href={item.link} key={index}>
                            <img src={item.png} className={'img'} alt={''}/>
                        </a>
                    )
                })}
            </div>
        )
    }
}