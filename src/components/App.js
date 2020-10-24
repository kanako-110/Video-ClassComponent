import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
	state = { videos: [], selectedVideo: null };

	// constructor=> 最初のrender =>コンテンツがスクリーンに映し出される=>componentDidMountが行われる=>そのごはアップデート待ち
	// なので、componentDdiMountは最初の段階で呼び出されている(その少し前にdefaultのページと、そこからrenderが起こり、render後のページが映し出され、componentDidMountまで行われて(設定されていない限り、render直後と変化なし)、ページがストップする)
	componentDidMount() {
		this.onTermSubmit("cats");
	}

	onTermSubmit = async (term) => {
		// １APIにリクエスト
		// ２API取得後、内容を参照できるようにするために、asyncが必要。async→await→cont responseの順番で追加
		// console.log(response)してみればわかるが、responseの中身は、ビデオの情報。id　config dataなどとってきている。
		// axiosのpre-configured関数のget。第一引数でurl、第二引数でオプションを設定する
		const response = await youtube.get("search", {
			params: {
				// qと呼べと、youtubeAPIに指定されている
				// 検索ワードにpropsとして渡ってきたtermを指定している
				q: term,
			},
		});

		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0],
		});
	};

	onVideoSelect = (video) => {
		this.setState({ selectedVideo: video });
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onTermSubmit} />
				<div className="ui grid">
					<div className="ui row">
						<div className="eleven wide column">
							<VideoDetail video={this.state.selectedVideo} />
						</div>
						<div className="five wide column">
							<VideoList
								onVideoSelect={this.onVideoSelect}
								videos={this.state.videos}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
