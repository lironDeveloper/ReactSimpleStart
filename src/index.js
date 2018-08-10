// Importing installed libraries
import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// Importing my libraries
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCRE1YiDS5nENEURWWpAQ83bRbEhB_jaRg';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    // Hitting a search immedietaly on boot
    this.videoSearch('ישי ריבו');
  }

  videoSearch(searchTerm) {
    YTSearch({key: API_KEY, term: searchTerm}, videos => {
      this.setState({
        videos: videos, 
        selectedVideo: videos[0]
      }); 
    });  
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
