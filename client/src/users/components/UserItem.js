import React from 'react';

import classes from './UserItem.module.css';

const UserItem = (props) => {
  return (
    <li key={props.id}>
      <h2>{props.name}</h2>
      <p>{props.placeCount}</p>
    </li>
  );
};

export default UserItem;
