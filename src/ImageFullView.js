import { Component } from 'react';


class ImageFullView extends Component {
    handleOnImageClose = () => {
        this.props.onImageClose();
    }
    render() {
        const {altText, imgSrc} = this.props;
        return(
        <div className="image-full-view ">
            <div className="close-image">
                <button className="close-image-button" onClick={this.handleOnImageClose}>
                </button>
            </div>
            <div className="image-container">
                <img  
                    alt={altText}
                    src={imgSrc}
                    className="full-view"
                />
            </div>
        </div>)
    }
}

export default ImageFullView