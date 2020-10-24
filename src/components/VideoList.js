import React from 'react';
import VideoItem from './VideoItem';

// APpでpropsとして渡したvideosを受け取る。
// 受取は(props)で、props.videos.lengthでも良いが、{videos}として受け取れば、以下のように出力するときにprops.-と書かずにすむ
const VideoList = ( { videos, onVideoSelect } ) => {
const renderList = videos.map( (video) => {
    return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />;
});

return <div className="ui relaxed divided list">{renderList}</div>;
};

export default VideoList;