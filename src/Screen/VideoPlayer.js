import React, { Component } from 'react';
import Player from 'react-player'
import Fb from './img/bg.svg'
// import ''
import rnredux from './rnredux.jpg';
import './css/video.css';
import Iframe from 'react-iframe'
class VideoPlayer extends Component{
    constructor(){
        super()
        this._Pause = this._Pause.bind(this)
        this.state={
            playing:false
        }
    }
    _Pause(){

        
        this.setState({ playing: !this.state.playing })
    }
    render(){
       
        return(
            <div className="pl">
            {/* <Player
            url='https://fast.wistia.net/embed/iframe/dso2sjap7u'
            controls
            playing={this.state.playing}
            // light={rnredux}
            onClick={this._Pause}
            config={{ 
                file: { 
                attributes: {
                    style: { width: '50%', height: '50%', },
                    controlsList: 'nodownload',
                    onContextMenu: e => e.preventDefault(),
                    
                } 
                }
                 
            }}
            /> */}
            <Iframe url="https://fast.wistia.net/embed/iframe/dso2sjap7u"
            width="450px"
            height="450px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
            allowFullScreen/>
            {/* <iframe src="https://fast.wistia.net/embed/iframe/dso2sjap7u" style={{width:"100%",height:"100%"}}></iframe> */}
            </div>
        )
    }
}
export default VideoPlayer;