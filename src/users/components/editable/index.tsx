import React, { Dispatch, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Action } from 'redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

import { User, cloneUser } from '../../types/user';
import { update } from '../../slices/usersSlice';
import { updateObject } from '../../../lib/object';
import { handleSubmit, handleBlur, openEdit, closeForm, changeData, changeSelectData, changeDate, formatDate, formatValue } from './functions';

import './index.css';

export enum FieldType {
  input = 'input',
  select = 'select',
  date = 'date'
};

type Props = {
  user: User,
  property: string,
  label: string,
  value: string|number,
  field: FieldType,
  dispatch: Dispatch<Action>,
  type?: any,
  input?: string
};

export const Editable = ({ user, property, label, value, field, dispatch, type = null, input = 'text' }: Props) => {
  const [ edit, setEdit ] = useState(false);
  const [ data, setData ] = useState(value);

  return <div className='editable'>
    <label className='label'>{label}</label>
    <div className='text-wrapper'>
    { edit &&
      <div className='edit-field'>
        <form
          onSubmit={handleSubmit(setEdit, data, user, property, dispatch, updateObject, cloneUser, update)}
          onBlur={handleBlur(setData, setEdit, value)}>
          { field === FieldType.input &&
            <input autoFocus type={input} value={data} onChange={changeData(setData)} />
          }
          { field === FieldType.select &&
            <select autoFocus defaultValue={data} onChange={changeSelectData(setData)}>
              {Object.keys(type).map(key => {
                return <option key={key} value={type[key]}>{key}</option>;
              })}
            </select>
          }
          { field === FieldType.date &&
            <input autoFocus type='date' value={formatDate(data)} onChange={changeDate(setData)} pattern="\d{4}-\d{2}-\d{2}" />
          }
          <button className='submit' type='submit'><FontAwesomeIcon icon={faCheck}/></button>
          <button className='cancel' type='button' onClick={closeForm(setData, setEdit, value)}><FontAwesomeIcon icon={faXmark}/></button>
        </form>
      </div>
    }
    { !edit &&
      <div className='text' onClick={openEdit(setEdit)} title='click to edit'>{formatValue(value, field)}</div>
    }
    </div>
  </div>
};

type PropsConnected = {
  user: User,
  property: string,
  label: string,
  value: string|number,
  field: FieldType,
  type?: any,
  input?: string
};
const EditableConnected = ({ user, property, label, value, field, type = null, input = 'text' }: PropsConnected) => {
  const dispatch = useDispatch();
  return <Editable user={user} property={property} label={label} value={value} field={field} type={type} input={input} dispatch={dispatch} />
};


export default EditableConnected;