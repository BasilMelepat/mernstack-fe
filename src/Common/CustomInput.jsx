import React from 'react';

const CustomInput = ({ label, type, name, value, onChange }) => {
  return (
    <div className="form-group mb-3">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        className="form-control"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default CustomInput;