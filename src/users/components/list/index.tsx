import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { User } from '../../types/user';
import ListElement from '../listElement';

import './index.css';

type Props = {
  users: Array<User>
};

export const List = ({ users }: Props) => {
  return <div className="users-list">
    { users && users.length > 0 && users.map((user:User, index:number) => (
      <div key={index} className="users-list-user-wrapper">
        <Link to={`/user/${user.name.first}/${user.name.last}/${user.login.uuid}`}>
          <ListElement user={user} key={index} />
        </Link>
      </div>
    ))
    }
  </div>;
};

const ListConnected = () => {
  const users = useSelector((state:any) => state.users.users);
  return <List users={users} />;
}

export default ListConnected;