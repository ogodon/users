import { ChangeEvent, Dispatch } from 'react';
import Moment from 'moment';
import { Action } from 'redux';

import { FieldType } from './index';
import { User } from '../../types/user';


export const handleBlur = (setData:(d:any) => void, setEdit:(e:boolean) => void, data:string|number) => {
  return (event:any) => {
    if(event && event.currentTarget && !event.currentTarget.contains(event.relatedTarget)) {
      setData(data);
      setEdit(false);
    }
  };
};

export const handleSubmit = (setEdit:(e:boolean) => void, data:string|number, user:User, property: string, dispatch:Dispatch<Action>, updateObject:any, cloneUser:any, update:any) => {
  return (event:any) => {
    event.preventDefault();
    const updatedUser = updateObject(user, data, property, cloneUser);
    dispatch(update(updatedUser));
    setEdit(false);
  };
};

export const closeForm = (setData:(d:any) => void, setEdit:(e:boolean) => void, data:string|number) => {
  return (event:any) => {
    event.preventDefault();
    setData(data);
    setEdit(false);
  };
};

export const changeData = (setData:(d:any) => void) => {
  return (event: ChangeEvent<HTMLInputElement>) => {
    setData(event.target.value);
  };
};

export const changeSelectData = (setData:(d:any) => void) => {
  return (event: ChangeEvent<HTMLSelectElement>) => {
    setData(event.target.value);
  };
};

export const changeDate = (setData:(d:any) => void) => {
  return (event: ChangeEvent<HTMLInputElement>) => {
    if(!event.target.value) {
      return;
    }
    setData(Moment(event.target.value).format('yyyy-MM-DD'));
  };
};

export const openEdit = (setEdit:(e:boolean) => void) => {
  return () => {
    setEdit(true);
  };
};

export const formatDate = (date: string|number) => {
  return Moment(date).format("yyyy-MM-DD");
};

export const formatValue = (value: string|number, field: FieldType) => {
  if(field === FieldType.date) {
    return Moment(value).format('MMMM Do YYYY');
  }
  return value;
};