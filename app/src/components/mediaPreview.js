import React from 'react';


const Button = props => {
  const { cover, type } = props;

  return (
    <React.Fragment>
      <img className={"media-preview"} src={cover} alt="preview image of media" />
    </React.Fragment>
  )
}
export default Button;