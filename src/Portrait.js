import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import ImageUploader from 'react-images-upload';
import Img from 'react-image';

class Portrait extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            pictures: [],
            urls: [] 
        };
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(pictureFiles, pictureDataURLs) {
        this.setState({
            pictures: this.state.pictures.concat(pictureFiles),
            urls: this.state.pictures.concat(pictureDataURLs)
        });
    }

    render() {
        return (
            <Img src = {null}
            loader={
                <ImageUploader
                    withIcon={true}
                    buttonText='Choose image'
                    onChange={this.onDrop}
                    imgExtension={['.jpg', '.gif', '.png']}
                    maxFileSize={5242880}
                    singleImage={true}
                />
            }
            />
        );
    }
}

export default Portrait;