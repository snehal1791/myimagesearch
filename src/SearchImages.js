import React, { Component } from 'react'; 
// import serializeForm from 'form-serialize';

class SearchImages extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.updateSearchedValue(this.props.searchText)
    }
    render() {
        const { searchText, updateSearchedText } = this.props;
        return (
            <form 
                onSubmit={this.handleSubmit}
                className="search-images">
                <input 
                    type="text"
                    placeholder="Search image here..."
                    value={ searchText }
                    onChange={(event) => updateSearchedText(event.target.value)}
                />
                <button 
                    className="search-button"
                    type="submit">
                </button>
            </form>
        )
    }
}

export default SearchImages;
