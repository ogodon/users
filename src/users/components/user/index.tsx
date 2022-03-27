import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { User, Gender } from '../../types/user';
import Editable, { FieldType } from '../editable';
import Text from '../text';
import Block from '../block';
import Image from '../image';
import Column from '../column';

import './index.css';

type Props = {
  user: User
};

export const UserDetail = ({ user }:Props) => {
  return <div className='user'>
    <div className='user-title'>
      { user.picture.thumbnail && <div className='user-title-picture'><Image src={user.picture.thumbnail} alt={`${user.name.first} ${user.name.last}`} rounded={true} /></div>}
      <div className='user-title-name'>{user.name.title} {user.name.first} {user.name.last}</div>
    </div>
    
    <Column className='user'>
      <Block label='Name'>
        <Editable user={user} property='name.title' label='Title' value={user.name.title} field={FieldType.input} />
        <Editable user={user} property='name.first' label='Firstname' value={user.name.first} field={FieldType.input} />
        <Editable user={user} property='name.last' label='Lastname' value={user.name.last} field={FieldType.input} />
      </Block>
      <Block label='Pictures'>
        <Editable user={user} property='picture.thumbnail' label='Picture thumbnail' value={user.picture.thumbnail} field={FieldType.input} />
        <Editable user={user} property='picture.medium' label='Picture medium' value={user.picture.medium} field={FieldType.input} />
        <Editable user={user} property='picture.large' label='Picture large' value={user.picture.large} field={FieldType.input} />
      </Block>
        <div className='user-pictures'>
          { user.picture.thumbnail && <div className='user-title-picture'><Image src={user.picture.thumbnail} alt={`${user.name.first} ${user.name.last}`} /></div>}
          { user.picture.medium && <div className='user-title-picture'><Image src={user.picture.medium} alt={`${user.name.first} ${user.name.last}`} /></div>}
          { user.picture.large && <div className='user-title-picture'><Image src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} /></div>}
        </div>
    </Column>

    <Column className='user'>
      <Block label='Informations'>
        <Text label='Uuid' value={user.login.uuid} />
        <Editable user={user} property='gender' label='Gender' value={user.gender} type={Gender} field={FieldType.select} />
        <Editable user={user} property='email' label='Email' value={user.email} field={FieldType.input} input='email' />
        <Editable user={user} property='dob.date' label='Date of birth' value={user.dob.date} field={FieldType.date} />
        <Text label='Age' value={user.dob.age} />
        <Editable user={user} property='phone' label='Phone' value={user.phone} field={FieldType.input} />
        <Editable user={user} property='cell' label='Cell' value={user.cell} field={FieldType.input} />
        <Editable user={user} property='nat' label='Nationality' value={user.nat} field={FieldType.input} />
      </Block>
    </Column>

    <Column className='user'>
      <Block label='Location'>
        <Editable user={user} property='location.street.number' label='Street number' value={user.location.street.number} field={FieldType.input} input='number' />
        <Editable user={user} property='location.street.name' label='Street name' value={user.location.street.name} field={FieldType.input} />
        <Editable user={user} property='location.city' label='City' value={user.location.city} field={FieldType.input} />
        <Editable user={user} property='location.state' label='State' value={user.location.state} field={FieldType.input} />
        <Editable user={user} property='location.country' label='Country' value={user.location.country} field={FieldType.input} />
        <Editable user={user} property='location.postcode' label='Post code' value={user.location.postcode} field={FieldType.input} />
        <Editable user={user} property='location.coordinates.latitude' label='Latitude' value={user.location.coordinates.latitude} field={FieldType.input} />
        <Editable user={user} property='location.coordinates.longitude' label='Longitude' value={user.location.coordinates.longitude} field={FieldType.input} />
        <Editable user={user} property='location.timezone.offset' label='Timezone offset' value={user.location.timezone.offset} field={FieldType.input} />
        <Editable user={user} property='location.timezone.description' label='Timezone name' value={user.location.timezone.description} field={FieldType.input} />
      </Block>
    </Column>
  </div>;
};

const UserDetailConnected = () => {
  const { uuid } = useParams();
  const dispatch = useDispatch();

  const users = useSelector((state:any) => state.users.users.filter((u:User) => u.login.uuid === uuid));
  if(users.length === 0) {
    dispatch({ type: 'user/not-found', 'uuid': uuid });
    return null;
  }
  const user = users[0];
  return <UserDetail user={user} />;
};

export default UserDetailConnected;