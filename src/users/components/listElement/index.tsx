import React from 'react';
import Moment from 'moment';

import { User } from '../../types/user';
import Image from '../image';
import './index.css';

type Props = {
  user: User
};

const ListElement = ({ user }: Props) => {
  return <div className="users-list-user">
    <div className="user-img">
      <Image src={user.picture.thumbnail} alt={`${user.name.first} ${user.name.last}`} rounded={true} />
    </div>
    <div className="user-name-dob">
      <div className="user-name">{user.name.title} {user.name.first} {user.name.last}</div>
      <div className="user-dob">{Moment(user.dob.date).format('MMMM Do YYYY')}</div>
    </div>
  </div>;
};

export default ListElement;