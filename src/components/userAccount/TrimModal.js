import React, { useState } from 'react';
import Modal from '../ui/Modal';
import Cropper from 'react-easy-crop';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';

const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', (error) => reject(error))
    image.src = url
  })

const getCroppedImg = async (imageSrc, pixelCrop, rotation = 0) => {
  const image = await createImage(imageSrc);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;
  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  );
  return new Promise((resolve) => {
    canvas.toBlob(blob => resolve(blob), 'image/png')
  })
}

const TrimModal = (props) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  
  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }
  
  const onZoomChange = (zoom) => {
    setZoom(zoom);
  }

  const saveCroppedImage = async () => {
    try {
      const croppedImage = await getCroppedImg(props.originPhotoSrc, croppedAreaPixels);
      console.log('done', { croppedImage });
      props.setPhotoBlob(croppedImage); // Send blob of image to parent component
      props.onClose(); // Close modal
    } catch (e) {
      console.error(e);
    }
  };
  
  return (
    <React.Fragment>
      <Modal onClose={props.onClose}>
        <div className="crop-container">
          <Cropper
            image={props.originPhotoSrc} 
            crop={crop}
            onCropChange={setCrop}
            zoom={zoom}
            cropShape="round"
            aspect={1}
            onCropComplete={onCropComplete}
          />
        </div>
        <div className="controls">
          <span id="minus">&#8722;</span>
          <Slider 
            value={zoom}
            min={1}
            max={3}
            step={0.1}
            aria-labelledby="Zoom"
            onChange={(e, zoom) => onZoomChange(zoom)}
          />
          <span id="plus">&#43;</span>
        </div>
        <div className="buttons">
          <Button
            onClick={props.onClose}
            variant="contained"
            id="close"
          >
            Close
          </Button>
          <Button
            onClick={saveCroppedImage}
            variant="contained"
            color="primary"
          >
            Save
          </Button>
        </div>
      </Modal>
    </React.Fragment>
  )
}

export default TrimModal;