import { Component } from 'react/cjs/react.production.min';
import './App.css';
import * as ImagesAPI from './utils/ImagesAPI';
import SearchImages from './SearchImages';
import ListOfImages from './ListOfImages';
import ImageFullView from './ImageFullView';

class App extends Component {
  state = {
    loadingImages: false,
    images: [],
    searchText: '',
    openImageView: false,
    viewingImageLink: '',
    viewingImageAltText: ''
  }
  componentDidMount() {
		ImagesAPI.getAll(this.state.searchText)
      .then((images) => {
        console.log(images)
        this.setState({
          loadingImages: false,
          images,
          openImageView: false
        })
      })
	}
  updateSearchedText = (searchText) => {
    this.setState({
      searchText
    })
  }
  updateSearchedValue = (searchText) => {
    this.setState({
      loadingImages: true,
      images: []
    })
    ImagesAPI.getAll(searchText)
      .then((images) => {
        console.log(images)
        this.setState({
          loadingImages: false,
          images,
          openImageView: false
        })
      })
  }
  onImageClick = (viewingImageLink) => {
    this.setState({
        openImageView: true,
        viewingImageLink: viewingImageLink
    })
  }
  handleOnImageClose = () => {
    this.setState({
        openImageView: false
    })
  }
  render() {
    const openImage = this.state.openImageView
    return (
      openImage ? 
        <ImageFullView 
          altText={this.state.viewingImageAltText}
          imgSrc={this.state.viewingImageLink}
          onImageClose={this.handleOnImageClose}
        /> :
      (<div className="App">
        <header className="App-header">
          <h1>Search Image</h1>
          <SearchImages 
            searchText={this.state.searchText}
            updateSearchedText={this.updateSearchedText}
            updateSearchedValue={this.updateSearchedValue} />
        </header>
        <section className="search-image-results">
          {this.state.loadingImages ? <div className="loading-images">Loading... </div>: ''}
            <ListOfImages
              loadingImages={this.state.loadingImages} 
              images={this.state.images}
              onImageClick={this.onImageClick}  
            />
        </section>
      </div>)
    );
  }
}

export default App;
