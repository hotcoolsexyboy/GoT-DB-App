import React from 'react';
import './error-message.sass';

const ErrorMessage = () => {
  return(
    <div>
      <img src={process.env.PUBLIC_URL + '/img/pic2.jpg'} alt={'capture'}></img>
      <span>Something went wrong!</span>
    </div>
  )
}

export default ErrorMessage;