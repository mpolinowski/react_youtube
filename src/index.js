import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyACvlMnNP3gzBpdCATIYDhdALM5bsF8hrA';
const ChannelId = 'UCnOMuCrpMSAlLlE7GBZ74bA';

// Create component APP to produce HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.videoSearch('IN-5907HD')

  }

  videoSearch(term) {
    YTSearch({key: API_KEY, forUsername: 'INSTARTV', term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos [0],
      });
    });
  }

  render() {
    return (
      <div>
          <SearchBar onSearchTermChange={videoSearch} />
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos} />
      </div>
    );
  }
}

// Take instance of App and render it to container in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
