import React from "react";

import media_sep from '../assets/img/body/media/media-video-header-sep.png'
import media_underLine from '../assets/img/body/media/media_underline.png'

import swiper_pic_1 from '../assets/img/body/media/swiper-pic-1.jpg'
import swiper_pic_2 from '../assets/img/body/media/swiper-pic-2.jpg'
import swiper_pic_3 from '../assets/img/body/media/swiper-pic-3.jpg'
import swiper_pic_4 from '../assets/img/body/media/swiper-pic-4.jpg'
import swiper_pic_5 from '../assets/img/body/media/swiper-pic-5.jpg'

import swiper_button_png from '../assets/img/body/media/swiper-button.png'

import '../assets/css/Views/Media.scss'

export default class Media extends React.Component {
    render() {
        return (
            <div className={'media-contain'}>
                <div className={'seperator'} style={{position: 'absolute', top: '-4px'}}></div>

                <VideoContent></VideoContent>

                <div className={'seperator'} style={{position: 'absolute', top: 'calc(100vh + 90px - 4px)'}}></div>

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

// 轮播图组件
class SwiperContent extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        active_index: 0,

        picList: [
            swiper_pic_1,
            swiper_pic_2,
            swiper_pic_3,
            swiper_pic_4,
            swiper_pic_5
        ]
    }

    changeActive = (event, index) => {
        this.setState({
            active_index: index
        })
    }

    render() {
        return (
            <div className={'swiper-contain'}>

                <div className={'swiper-header'}>
                    <div>Gallery</div>
                </div>
                <div className={'swiper-content-contain'}>
                    <img src={this.state.picList[this.state.active_index]} className={'swiper-picture-show'} alt={''}/>
                    <div className={'thumbnails'}>
                        {this.state.picList.map((item, index) => {
                            return (
                                <div onClick={(event) => this.changeActive(event, index)} className={['item', this.state.active_index === index? 'current': null].join(' ')} key={index}>
                                    <img src={item} alt={''}/>
                                </div>
                            )
                        })}
                    </div>
                    <div className={'swiper-button'} style={{left: '-2%'}}><img src={swiper_button_png} alt={''}/></div>
                    <div className={'swiper-button'} style={{right: '-2%', rotate: '180deg'}}><img src={swiper_button_png} alt={''}/></div>
                </div>
            </div>
        )
    }
}
