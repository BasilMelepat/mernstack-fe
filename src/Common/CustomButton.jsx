import React from 'react';
import './CustomButton.css'

function CustomButton({label}) {
  return (
    <button type="submit" className="btn w-100">
      {label}
    </button>
  );
};

export default CustomButton;