import React from 'react';

const Form = () => {
  return (
    <form>
      <input name="name" placeholder="이름" />
      <input name="description" placeholder="설명" />
      <button type="submit">추가</button>
    </form>
  );
};

export default Form;