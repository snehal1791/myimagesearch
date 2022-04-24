import React, { Component } from 'react';
import ImageView from './ImageView';

class ListOfImages extends Component {
    render() {
        const {images, onImageClick} = this.props;
        return (
            <div className="images">
                {images.map(image => (
                   <ImageView
                        key={image.id}
                        altText={image.title}
                        imgSrc={image.images ? image.images[0]['link'] : image.link}
                        onImageClick={onImageClick} />
                    )

                )}
            </div>
        )
    }
}

export default ListOfImages;
