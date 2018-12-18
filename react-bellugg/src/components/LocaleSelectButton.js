import React from 'react';

const LocaleSelectButton = ({clicked, onToggle}) => {

  return (
    
      <button
        className="select-button"
        aria-expanded={clicked}
        onClick={onToggle}
      >
        <span>Please Select</span>
      </button>
  );
};

export default LocaleSelectButton;