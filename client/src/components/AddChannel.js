import React from 'react';

/* 
  handleKeyUp function Prints input text to console and clears input field when user hits return (key code 13)
 */
const AddChannel = () => {
  const handleKeyUp = (evt) => {
    if (evt.keyCode === 13) {
      console.log(evt.target.value);
      evt.target.value = '';
    }
  };
  return (
    <input
      type="text"
      placeholder="New channel"
      onKeyUp={handleKeyUp}
    />
  );
};
export default AddChannel;
