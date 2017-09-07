import React from 'react';

function ImageDisplay({ image }) {
  console.log(image.jpeg);
  if (image.jpeg) {
    const objurl = URL.createObjectURL(new Blob([image.jpeg.data]), {
      type: 'image/jpeg',
    });

    return <img alt="glitched" src={objurl} />;
  } else {
    return <h2>No Image</h2>;
  }
}

export default ImageDisplay;
