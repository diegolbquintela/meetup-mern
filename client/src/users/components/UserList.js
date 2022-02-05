import React from 'react';

import UserItem from './UserItem';
import classes from './UserList.module.css';

const UserList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className={classes.center}>
        <h2>No users found.</h2>
      </div>
    );
  }
  console.log(props.items);
  return (
    <ul>
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.img}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};

export default UserList;
