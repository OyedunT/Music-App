import React from 'react';

const Img = (props) => {
  return (
    <div>
      <img className={props.sty} src={props.image} alt="" />
      <h1 className="img-header">{props.text}</h1>
      <p className="img-content">{props.cont}</p>
    </div>
  );
}

export default Img;
