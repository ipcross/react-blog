import React from 'react';

const Image = (props) => (
  <div>
    <img src={props.image.src} width={props.image.width}
       height={props.image.height} alt={props.image.alt} />
  </div>
)

export default Image;
