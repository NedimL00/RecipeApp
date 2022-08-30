import React from 'react';
import SpinnerImage from '../assets/Spinner.svg'

function Spinner() {
  return (
    <div className='spinner'>
      <img src={SpinnerImage} />
    </div>
  )
}

export default Spinner