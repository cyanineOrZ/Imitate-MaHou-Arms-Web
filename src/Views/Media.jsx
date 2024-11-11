import React from "react";

import '../assets/css/Media.scss'

export default class Media extends React.Component {
    render() {
        return (
            <div className={'media-contain'}>
                <div className={'seperator'} style={{position: 'absolute', top: '-4px'}}></div>

                <VideoContent></VideoContent>

                <div className={'seperator'} style={{position: 'absolute', top: '50%', translate: '0 -50%'}}></div>

                <SwiperContent></SwiperContent>

                <div className={'media-background-image'}>

                </div>
            </div>
        );
    }
}

// 视屏播放器容器组件
class VideoContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'video-contain'}>
                <div className={'media-header'}>
                    <img src={'../../assets/img/body/media/media-video-header-sep'} alt={''} className={'media-header-image'}></img>
                </div>
            </div>
        )
    }
}

class SwiperContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'swiper-contain'}>

            </div>
        )
    }
}