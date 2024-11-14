import React from "react";

import media_sep from '../assets/img/body/media/media-video-header-sep.png'
import media_underLine from '../assets/img/body/media/media_underline.png'

import swiper_button_png from '../assets/img/body/media/swiper-button.png'

import '../assets/css/Views/Media.scss'

export default class Media extends React.Component {
    render() {
        return (
            <div className={'media-contain'}>
                <div className={'seperator'} style={{position: 'absolute', top: '-4px'}}></div>

                <VideoContent></VideoContent>

                <div className={'seperator'} style={{position: 'absolute', top: '50%', translate: '0 50%'}}></div>

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
                    <img src={media_sep} alt={''} className={'media-header-image'}></img>
                </div>
                <div className={'media-video'}>
                    <span className={'title'}>Media</span>
                    <div  className={'video-contain'}>
                        <iframe src="https://www.youtube.com/embed/K0RmhKXmvqg" frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen=""></iframe>
                    </div>
                    <div style={{display: "flex", justifyContent: 'center', paddingTop: '10px'}}>
                        <img src={media_underLine} alt={''} className={'underline'}/>
                    </div>
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
                <div className={'swiper-header'}>
                    <div>Gallery</div>
                </div>
                <div className={'swiper-content-contain'}>
                    <div className={'swiper-picture-show'}></div>
                    <div className={'swiper-bottom'}></div>
                    <div className={'swiper-button'} style={{left: '-2%'}}><img src={swiper_button_png} alt={''}/></div>
                    <div className={'swiper-button'} style={{right: '-2%', top: '34.75vh', rotate: '180deg'}}><img src={swiper_button_png} alt={''}/></div>
                </div>
            </div>
        )
    }
}