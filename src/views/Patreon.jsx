import React from "react";
import '../assets/css/Views/Patreon.scss'

import linkPng from '../assets/img/body/parteron/patreon_link.png'

export default class Patreon extends React.Component {
    render() {
        return (
            <div id={'About'} className={'patreon_contain'}>
                <div className={'seperator'} style={{position: 'absolute', top: '-4px'}}></div>
                <div className={'content-contain'}></div>
                <a className={'patreon-content-contain'}>
                    <img src={linkPng} alt={''} className={'link-image'}/>
                    <div style={{fontFamily: 'PlayfairDisplay serif', paddingLeft: '12px', fontSize: '1.4em', fontWeight: "bold", paddingBottom: '10px'}}>Support Mahou Arms on Patreon and get access to:</div>

                    <div style={{paddingTop: '10px', paddingLeft: '25px', fontWeight: 'bold', fontSize: '1.2em'}}>
                        <div>+Bleeding-Edge builds</div>
                        <div>+Exclusive Monthly Artwork</div>
                        <div>+Patron-only posts</div>
                        <div>+and more!</div>
                    </div>
                </a>
            </div>
        )
    }
}
