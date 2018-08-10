import React from 'react';
import Loader from 'react-loader';

const VideoDetail= (props) => {
    if(!props.video) {
        return <Loader loaded={false} lines={13} length={20} width={10} radius={30}
        corners={1} rotate={0} direction={1} color="#000" speed={1}
        trail={60} shadow={false} hwaccel={false} className="spinner"
        zIndex={2e9} top="50%" left="50%" scale={1.00}
        loadedClassName="loadedContent"/>;
    } else {
        const videoId = props.video.id.videoId;
        const url = `http://www.youtube.com/embed/${videoId}`;

        return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                    <div className="video-detail-title">{props.video.snippet.title}</div>
                    <div className="video-detail-description">{props.video.snippet.description}</div>
            </div>
        </div>
        );
    }
}

export default VideoDetail;