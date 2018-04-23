import React from 'react';
import { Button } from 'reactstrap';

const InputForm = props => {
  console.log(props);
  return (
    <div className="mt-3">
      <input
        className="form-control"
        type="text"
        placeholder="insert todo list"
        ref={props.setRef}
      />
      <br />
      <Button outline color="primary" onClick={props.onClick}>
        Add Todo List
      </Button>{' '}
    </div>
  );
};

export default InputForm;
