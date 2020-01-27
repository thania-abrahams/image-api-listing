import React from 'react';
import unsplash from '../apis/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

  state = { images: [] };

  onSearchSubmit = (term) => {
    unsplash.get('search/photos', {
      params: {
        query: term
      }
    }).then((response) => this.setState({ images: response.data.results }));
  }


  render () {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
