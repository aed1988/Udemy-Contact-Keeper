import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export const Spinner = () => {
  return (
    <>
      <FontAwesomeIcon icon={faSpinner} size="5x" className='all-center' spin/>
    </>
  )
}

export default Spinner
