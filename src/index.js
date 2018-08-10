// Importing installed libraries
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// Importing my libraries
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCRE1YiDS5nENEURWWpAQ83bRbEhB_jaRg';

YTSearch({key: API_KEY, term: 'liron'}, data => console.log(data));

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
