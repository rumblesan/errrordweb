import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps({ imageData }) {
  return imageData;
}

class ImageCanvas extends Component {
  componentDidUpdate() {
    const canvas = this.refs.displayCanvas;
    const ctx = canvas.getContext('2d');
    const { imageData, fileData } = this.props;
    if (imageData !== null && fileData !== null) {
      const blob = new Blob([imageData], { type: fileData.type });
      const img = new Image();
      img.onload = function() {
        ctx.drawImage(img, 0, 0);
        console.log('drawn image');
      };
      img.src = URL.createObjectURL(blob);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  render() {
    return <canvas ref="displayCanvas" />;
  }
}

export default connect(mapStateToProps)(ImageCanvas);
