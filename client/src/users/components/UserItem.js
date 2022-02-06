import React from 'react';

import classes from './UserItem.module.css';

const UserItem = (props) => {
  return (
    <li className={classes.item} key={props.id}>
      <div className={classes.content}>
        <div className={classes.image}>
          <img src={props.image} alt={props.name} />
        </div>
        <div className={classes.info}>
          <h2>{props.name}</h2>
          <h3>{props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places' </h3>
        </div>
      </div>
    </li>
  );
};

export default UserItem;
