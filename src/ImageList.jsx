import React from 'react';
import PropTypes from 'prop-types';

const ImageList = ({ images }) => (
  <main>
    {images.map(url => (
      <Image key={url} src={url} />
    ))}
  </main>
);
ImageList.propTypes = {
  images: PropTypes.array.isRequired
};
export default ImageList;

const Image = ({ src }) => <img src={src} />;
Image.propTypes = {
  src: PropTypes.string.isRequired
};
