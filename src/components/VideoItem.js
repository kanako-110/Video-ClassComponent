import React from 'react'
import './VideoItem.css'

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        // onClickしたときにコールバック関数を起動するように設定
        // そのコールバック関数はApp.jsにある。
        // その関数をAppから渡してきた。これによって、子供から親に接続をしている。
        // OnClickが起きるたびに、親コンポーネントにあるその関数が起動することになる
    <div onClick={() => onVideoSelect(video)} className="video-item item">
        <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header"　>{video.snippet.title}</div>
                </div>
        </div>
    )
};

export default VideoItem;