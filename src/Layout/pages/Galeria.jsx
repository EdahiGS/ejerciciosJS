import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Galeria() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://fondosmil.com/fondo/29367.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Presentacion 1</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://fondosmil.com/fondo/29394.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Presentacion 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images5.alphacoders.com/100/1000939.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Presentacion 3</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Galeria