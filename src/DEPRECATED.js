import React, { Component } from 'react';

class ImageGrid extends Component {
    render() {
        const {altText, imgSrc, onImageClick} = this.props;
        return(
            <img 
                alt={altText}
                src={imgSrc}
                onClick={() => onImageClick(imgSrc)} />
        )
    }
}

export default ImageGrid