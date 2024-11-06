import React from "react";

import '../assets/css/Footer.scss'

import Discord from '../assets/img/body/footer/discord_full.png';
import Twitter from '../assets/img/body/footer/twitter_full.png';
import Youtube from '../assets/img/body/footer/youtube_full.png';
import Patreon from '../assets/img/body/footer/patreon_full.png';

import DisChan from '../assets/img/body/footer/dischan.png';
import Sekai from '../assets/img/body/footer/sekai_project.png';
import Denpasoft from '../assets/img/body/footer/denpasoft.png';
import Scarlet_moon from '../assets/img/body/footer/scarlet_moon.png';

export default class Footer extends React.Component {

    state = {
        socialLinkList: [
            {png: Discord, link: 'https://discord.gg/uc5Njsy'},
            {png: Twitter, link: 'https://twitter.com/mahouarms'},
            {png: Youtube, link: 'https://youtube.com/channel/UCJDg4oX76d5kkwNwln6IV7A'},
            {png: Patreon, link: 'https://patreon.com/paperbag'},
        ],

        creditsLinkList: [
            {png: DisChan,      link: 'https://dischan.co/'},
            {png: Sekai,        link: 'https://sekaiproject.com/'},
            {png: Denpasoft,    link: 'https://denpasoft.com/'},
            {png: Scarlet_moon, link: 'http://scarletmoon.com/'},
        ]
    }

    render() {
        return (
            <div className={'footer-contain'}>
                <div className={'seperator'}></div>
                <div className={'socialList-contain'}>{this.state.socialLinkList.map((item, index) => {
                    return (
                        <a href={item.link} key={index}>
                            <img src={item.png} alt={''}/>
                        </a>
                    )
                })}</div>
                <div className={'seperator'}></div>
                <div className={'footer-copyright-creditList-contain'}>
                    <div className={'copyright-contain'}>
                        <p>© 2018 - 2020 Dischan, All Rights Reserved</p>
                        <div>
                            <a href={'https://drive.google.com/file/d/1UhUxZ9m5Pe36RsLdsYp_oVIdT6EUeMCc/view?usp=sharing'}>Press Kit</a>
                            <a href={'https://mahouarms.com/faq'}>FAQ</a>
                            <a href={'https://mahouarms.com/patcher/bundles/'}>Steam Patcher Bundles</a>
                        </div>
                    </div>
                    <div className={'empty-block'}></div>
                    <div className={'creditList-contain'}>
                        {this.state.creditsLinkList.map((item, index) => {
                            return (
                                <a href={item.link} key={index}>
                                    <img src={item.png} alt={''}/>
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}