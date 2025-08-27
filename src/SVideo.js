import React from 'react'
import videohtml from './Videos/videohtml.mp4'
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import './index.css';


function SVideo() {
    return (
        <>
            <Video autoPlay loop muted className='video-cls'

            >
                <source src={videohtml} type="video/mp4" >
                </source>

            </Video>
        </>
    )
}

export default SVideo;

