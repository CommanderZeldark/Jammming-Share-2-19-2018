import React from 'react';
import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchResults: [
      {
        name: "Test This",
        artist: "CodeCademy",
        album: "Intense"
      },
      {
        name: "Engage",
        artist: "Captain Picard and the Next Generation",
        album: "Warp 9.9"
      },
      {
        name: "Taco Bell",
        artist: "Master Tang",
        album: "Top 10 Million Hits of All Time"
      },
      {
        name: "React to Django!",
        artist: "JavaScript Java Jazz Band",
        album: "Python Bites Back"
      }
    ]};
  }
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
