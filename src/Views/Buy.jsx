import React from "react";

import '../assets/css/Views/Buy.scss'
import Steam from "../assets/img/body/buy/buy_store_button_steam.png";
import Sekai from "../assets/img/body/buy/buy_store_button_sekai.png";
import Denpa from "../assets/img/body/buy/buy_store_button_denpa.png";

export default class Buy extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        linkList: [
            { png: Denpa, link: 'https://denpasoft.com/products/mahou-arms/' },
            { png: Steam, link: 'https://store.steampowered.com/app/1165870/Mahou_Arms' },
            { png: Sekai, link: 'https://sekaiproject.com/products/mahou-arms/' },
        ]
    }

    render() {
        return (
            <>
                <div className={'buy-contain'}>
                    <div className={'buy-square-contain'}>
                        {this.state.linkList.map((item, index) => {
                            return (
                                <BuySquare png={item.png} link={item.link} key={index}></BuySquare>
                            )
                        })}
                    </div>
                    <div className={'seperator'} style={{position: 'absolute', bottom: '-4px'}}></div>
                </div>
            </>
        );
    }
}

class BuySquare extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {}

    render() {
        return (
            <div className={'square-item'}>
                <a className={'link'} href={this.props.link}>
                    <img src={this.props.png} alt={''} className={'image'}/>
                </a>
            </div>
        )
    }
}