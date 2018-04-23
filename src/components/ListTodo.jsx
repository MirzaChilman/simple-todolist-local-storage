import React from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

const ListTodo = props => {
  console.log(props);

  return (
    <ListGroup>
      {props.items &&
        props.items.map((item, index) => {
          return (
            <ListGroupItem key={index}>
              <div className="d-flex">
                <div className="p-2">{item}</div>
                <div className="ml-auto p-2">
                  <Button color="danger" onClick={() => props.onClick(index)}>
                    <span className="fa fa-close">x</span>{' '}
                  </Button>
                </div>
              </div>
            </ListGroupItem>
          );
        })}
    </ListGroup>
  );
};

export default ListTodo;
