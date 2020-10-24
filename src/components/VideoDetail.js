import React from 'react'

const VideoDetail = ( {video} ) => {
// このif文、videoの中身がなければ～がないとsnippetがnullで読み込めないというエラー文がでる
// それは、videoがstateでアップデートされるまで何も入っていないから。
// 何もないものに、titleは設定されていない
// そこで、videoが無い時はloadingを出力し、snippetは読み込まない、其れ以外は下のreturn文を実行という文を作るべし
if (!video){
    return <div>Loading....</div>;
}

const videoSrc=　`https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        // ui segment:枠の囲みができる
        <div>
            <div className="ui embed">
                <iframe title="video player" src={videoSrc} />
            </div>

            <div className="ui segment">
                <h4 className="ui header" > {video.snippet.title} </h4>
                <p> {video.snippet.description} </p>
            </div>
        </div>
    )
};

export default VideoDetail;