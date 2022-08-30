import React, { useContext } from 'react';
import AlertContext from '../../context/alert/AlertContext';


function Alert() {

  const {alert} = useContext(AlertContext)

  if(alert !== null) {
    return (
      <section>
        <div className='container alert-box'>
          <p>{alert.msg}</p>
        </div>
      </section>
      
    )
  }
  
}

export default Alert