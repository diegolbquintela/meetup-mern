import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../../shared/components/UI/Card';
import Avatar from '../../shared/components/UI/Avatar';
import classes from './UserItem.module.css';

const UserItem = (props) => {
  return (
    <li className={classes.item} key={props.id}>
      <Card className={classes.content}>
        <Link to={`/${props.id}/places`}>
          <div className={classes.image}>
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className={classes.info}>
            <h2>{props.name}</h2>
            <h3>
              {props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
